import express from "express";
import conectaNoDb from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectaNoDb();

conexao.on("erro", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão estabelecida");
});

const app = express();
routes(app);

export default app;