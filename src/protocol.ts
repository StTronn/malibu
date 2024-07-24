import { canonicalize } from 'json-canonicalize';

type Message = {
	type: string
  [key:string]: any;
} 

interface ErrorType extends Message  {
  name: string;

}

export class Protocol {

  public constructor(){

  }

  listner(data:string){
    //format the data if not possible then throw error
    //Based on the type call appropriate handler
    //

  }

  writer(){

  }



}

export const Hello:Message = {
	type: 'hello',
	"version": "0.10.0",
  "agent": "Marabu-Core Client 0.10"
}

export const HelloFormated = canonicalize(Hello);

export const InvalidFormatError: ErrorType = {
  type: "error",
  name: "INVALID_FORMAT",
  description: "The note field in the block message contains more than 128 characters."
}





