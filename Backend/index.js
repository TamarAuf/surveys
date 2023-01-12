const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errors } = require("celebrate");
const limiter = require("./middleware/limiter");
const routes = require("./routes/index");

dotenv.config();

const { PORT = 3000, NODE_ENV, DB_ADRESS } = process.env;

const app = express();

app.use(helmet());
app.use(cors());
app.options("*", cors());

mongoose.connect(
  NODE_ENV === "production" ? DB_ADRESS : "mongodb+srv://db_admin:FsYxEvQt9NSPaSQ7@bioactivitiescluster.jsexwee.mongodb.net/RMSTest",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected");
  }
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(limiter);

app.use("/", routes);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
});

//const port = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
