

const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // middlewares
        this.middelwares();



        // routes
        this.routes();  // call the routes


    }


    middelwares() {
        
        this.app.use(cors());
        //directorio publico

        //lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes() {
        
      this.app.use(this.usuariosPath,require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Ejemplo de app listando en el puerto', this.port);
        }

        )
    };

}



module.exports = Server;