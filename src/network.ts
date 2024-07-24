import net,{ Server, Socket } from "net";



export class Network {
	private server:Server;

	public constructor(){
		this.server = net.createServer(function(socket:Socket) {
			socket.write('Echo server\r\n');
			socket.pipe(socket);
			socket.on('data',(data:any)=>{

			})
		});

	}
		
	init(port:number, IP:string){
		this.server.listen(port, IP);
	}

}
