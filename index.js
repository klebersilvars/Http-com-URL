const http = require('http');
const { parse } = require('path');
const url = require('url')

const enderecoPadrao = 'https://meusite.com.br/catalogo?produtos=cadeira'
const parsedUrl = new url.URL(enderecoPadrao)

console.log(parsedUrl.host)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.search) // aqui fica os dados enviados para o meu servidor, depois do "?"


console.log(enderecoPadrao)

const porta = 3000
const server = http.createServer( (req, res)=> {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    if(!name) {
        res.end('<h1>Preencha o formulário cadastrado </h1>  <form method="GET"> <input type="text" name="name" id="name" placeholder="Digite seu nome" </input>  <button> Envie seu nome </button>  </form>  ')
    }else {
        res.end(`<h1> Seu nome ${name} </h1>`)
    }
})

//iniciando meu servidor
server.listen(porta, ()=> {
    console.log(`servidor iniciado na porta ${porta}`)
})


