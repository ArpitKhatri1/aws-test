import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "The instance is running fine",
  });
});

app.listen(80, () => {
  console.log("The app listening on port 8080");
});
