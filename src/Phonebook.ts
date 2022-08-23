import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
    numberOfContacts:number
    constructor(){
        this.numberOfContacts = 11
    }
    get size():number {
        return this.numberOfContacts
    }
    add(contact:Contact):number {
        //add contact and returns its new id
        return 1
    }
    addPhone(id:number, phone:string):void {
        //add new phone to existing contact
    }
    get(id:number):Contact|undefined {
        //return contacts by id
        return Contact
    }
    get(name:string):Contact[]|undefined {
        //return contacts by name
        return Contact
    }
    remove(id:number):Contact|undefined {
        //remove contact by id and returns it
        return Contact
    }
}