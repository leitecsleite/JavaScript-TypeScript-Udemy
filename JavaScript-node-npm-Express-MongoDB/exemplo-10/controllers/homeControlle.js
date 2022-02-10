exports.paginaIncial =(req, res) =>{
    res.send(`
    <form action ='/' method ="POST">
    Nome do cliente: <input type="text" name="qualquercoisa">
    <button>Enviar</button>
    </form>
    `)
}

exports.receberDados = (req, resp) => {
    resp.send('Ei, sou sua nova rota de POST'); 
};