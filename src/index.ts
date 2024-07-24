import { logger } from './logger'
import { Network } from './network'


//peer-setup

let port:number = 18018
const BIND_IP = '0.0.0.0'

const args = process.argv.slice(2);

args.forEach(arg => {
  if(arg.startsWith('--port=')){
    const portArg = arg.split('=')[1];
    port = parseInt(portArg, 10);
  }


})

logger.info(`Malibu - A Marabu node`)
logger.info(`Rishav Thakur rishav.21m@gmail.com`)

const network = new Network()
network.init(port, BIND_IP)
