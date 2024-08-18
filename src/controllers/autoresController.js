import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao buscar os autores` });
    }
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "autor criado com sucesso", autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha no cadastro` });
    }
  };

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao buscar os autores` });
    }
  };

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorAtualizar = req.body;
      await autor.findByIdAndUpdate(id, autorAtualizar);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao atualiar o autor` });
    }
  };
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor deletado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao deletar o autor` });
    }
  };
};

export default AutorController;
