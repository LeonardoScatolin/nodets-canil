import express from "express";
import dotenv from 'dotenv'
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index'

dotenv.config()

const server = express();

// configurando template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// configurando arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

// configurando rotas
server.use(mainRoutes)

// página não encontrada
server.use((req, res) => {
    res.render('pages/404')
})

server.listen(process.env.PORT, () => {
    console.log('http://localhost')
});