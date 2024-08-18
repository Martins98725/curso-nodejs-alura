import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listLivros = await livro.find({});
      res.status(200).json(listLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao buscar os livros` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "livro criado com sucesso", livro: livroCriado });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha no cadastro` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao buscar os livros` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      const livroAtualizar = req.body;
      await livro.findByIdAndUpdate(id, livroAtualizar);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao atualiar o livro` });
    }
  }
  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao deletar o livro` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try{
      const livrosPorEditora  = await livro.find({editora: editora});
      res.status(200).json(livrosPorEditora);
    }
    catch(erro){
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao buscar os livros` });
    }
  }
}

export default LivroController;
