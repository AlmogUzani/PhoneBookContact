import Contact from "./Contact"

interface IPhonebook extends Iterable<Contact | undefined> {
    index:number //-index for next()
    size:number //- gets the amount of contacts
    add(contact:Contact):number //- add contact and returns its new id
    addPhone(id:number, phone:string):void //- add new phone to existing contact
    get(id:number):Contact|undefined //- get contact by id
    get(name:string):Contact[]|undefined //- get contacts by name
    remove(id:number):Contact|undefined //- remove contact by id and returns it
}

export default IPhonebook