import net,{ Server, Socket } from "net";
import {HelloFormated} from './protocol';
import { logger } from './logger'



export class Network {
	private server:Server;

	public constructor(){
		this.server = net.createServer(function(socket:Socket) {
			socket.write(HelloFormated);
			socket.pipe(socket);
			socket.on('data',(data:string)=>{
				//will be multiple calls here
			 logger.info(data);	

			})
		});

	}
		
	init(port:number, IP:string){
		this.server.listen(port, IP);
	}

}
