const http = require('http')

const server = http.createServer((req, res) => {
    const resp = []
    resp['/'] = '<h1>HOME</h1>'
    resp['/sobre'] = '<h1>SOBRE</h1>'
    resp['/contato'] = '<h1>CONTATO</h1>'
    resp['semURL'] = '<h1>URL INDEFINIDA</h1>'

    res.end(resp[req.url] || resp['semURL'])
})



server.listen(3000, 'localhost', () => {
    console.log('Servidor Funcionando em: http://localhost:3000')
    console.log('Para desabilitar o servidor: ctrl + c')
})