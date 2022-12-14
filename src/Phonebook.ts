import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
    public allContacts:Contact[]
    public index:number
    public lastID:number
    constructor(){
        this.index = 0
        this.lastID = 0
        this.allContacts = []
    }
    get size():number {
        return this.allContacts.length
    }
    add(contact:Contact):number { //add contact and returns its new id
        this.lastID++
        contact.id = this.lastID
        this.allContacts.push(contact)
        return this.lastID
    }
    addPhone(id:number, phone:string):void { //add new phone to existing contact
        const contact = this.allContacts.find(contact => contact.id === id)
        contact ? contact.phones.push(phone) : console.log("No such contact")
    }
    get(id:number):Contact | undefined //return contacts by id
    get(name:string):Contact[] | undefined; //return contacts by name
    get(arg:number | string):Contact | Contact[] | undefined { //return contacts by name/id
        if(typeof arg === 'number') return this.allContacts.find(contact => contact.id === arg)
        return this.allContacts.filter(contact => contact.name === arg)
    }
    remove(id:number):Contact|undefined { //remove contact by id and returns it
        let counter = 0,
            myContact = {}
        for(let contact of this.allContacts){
            if(contact.id === id) {
                myContact = contact
                break
            }
            counter++
        }
        if(myContact) return this.allContacts.splice(counter, counter+1)[0]
        return undefined
    }
    next() {
        if (this.index === this.allContacts.length) {
          return { 
           done: true,
           value: undefined
          };
        }
        return { 
          done: false, 
          value: this.allContacts[this.index++]
        };
    }
    [Symbol.iterator]() {
        return this
    }
}

function createPhonebook():IPhonebook {
    return new Phonebook()
}
export default createPhonebook