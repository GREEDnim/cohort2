const net = require('net');
class Server{

    socket;
    static IP='127.0.0.1'
    constructor(){

    }
    startServer(port){

        // creates a TCP socket with full duplex communication
        this.socket=new net.Socket();
        this.socket.connect(port,Server.IP);

        this.socket.on('error',(err)=>{
            this.exitWithError(err.message)
        })

        this.read();
    }

    read(){
        this.socket.on('data',(data)=>{
            this.log(data)
        });
    }

    log(message){
        console.log(message);
    }
    exitWithError(error){
        this.log("ERROR :" + error);
        process.exit(1);
    }


}

module.exports=Server;