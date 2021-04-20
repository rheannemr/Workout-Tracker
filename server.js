const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the Database!"))

// routes
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});