import express from 'express';

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: 'Trono de vidro'
    },
    {
        id: 2,
        titulo: 'Percy Jackson'
    }
];

function buscarLivrosPeloId(id){
    return livros.findIndex(livro => {
        return livro.id ===  Number(id);
    });
}


app.get('/',  (req, res) => {
    res.status(200).send('Curso de node.js');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
     livros.push(req.body);

     res.status(201).send('livro cadastrado com sucesso');
});

app.get('/livros/:id', (req, res) => {
    const index = buscarLivrosPeloId(req.params.id);

    res.status(200).json(livros[index]);
})

app.put('/livros/:id', (req, res) => {
    const index = buscarLivrosPeloId(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const index = buscarLivrosPeloId(req.params.id);
    livros.splice(index, 1);
    res.status(204).send('livro removido')
})


export default app;