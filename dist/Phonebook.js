"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor() {
        this.index = 0;
        this.lastID = 0;
        this.allContacts = [];
    }
    get size() {
        return this.allContacts.length;
    }
    add(contact) {
        this.lastID++;
        contact.id = this.lastID;
        this.allContacts.push(contact);
        return this.lastID;
    }
    addPhone(id, phone) {
        const contact = this.allContacts.find(contact => contact.id === id);
        contact ? contact.phones.push(phone) : console.log("No such contact");
    }
    get(arg) {
        if (typeof arg === 'number')
            return this.allContacts.find(contact => contact.id === arg);
        return this.allContacts.filter(contact => contact.name === arg);
    }
    remove(id) {
        let counter = 0, myContact = {};
        for (let contact of this.allContacts) {
            if (contact.id === id) {
                myContact = contact;
                break;
            }
            counter++;
        }
        if (myContact)
            return this.allContacts.splice(counter, counter + 1)[0];
        return undefined;
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
        return this;
    }
}
function createPhonebook() {
    return new Phonebook();
}
exports.default = createPhonebook;
