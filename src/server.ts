import express from "express";

const app = express();

app.get(
  "/",
  (request,
  response) => {
    return response.json({ message: "Testando 123!"});
  });

app.listen(5000);
