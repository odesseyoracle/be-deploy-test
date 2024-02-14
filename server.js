const express = require("express");
require("dotenv").config();

const userRouter = require("./routes/userRouter");
const app = express();
const port = process.env.PORT || 5000;

console.log("port:", port);

// Middelware
app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server work on port ${port}`);
});
