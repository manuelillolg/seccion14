const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        

        //Middlewares
        this.middlewares();
        this.routes();

        //Configuraciond e sockets
        this.sockets();

    }

    routes(){
       // this.app.use(this.authPath, require('../routes/auth'));
    }

    sockets(){
        this.io.on('connection', socketController);        
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    middlewares(){
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
    }

  


}

module.exports = Server;