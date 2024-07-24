import { logger } from './logger'
import { Network } from './network'


//peer-setup

const BIND_PORT = 18018
const BIND_IP = '0.0.0.0'

logger.info(`Malibu - A Marabu node`)
logger.info(`Rishav Thakur rishav.21m@gmail.com`)

const network = new Network()
network.init(BIND_PORT, BIND_IP)
