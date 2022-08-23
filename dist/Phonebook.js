"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phonebook = /** @class */ (function () {
    function Phonebook() {
        this.allContacts = [];
        this.lastID = 0;
    }
    Object.defineProperty(Phonebook.prototype, "size", {
        get: function () {
            return this.allContacts.length;
        },
        enumerable: false,
        configurable: true
    });
    Phonebook.prototype.add = function (contact) {
        this.lastID++;
        contact.id = this.lastID;
        this.allContacts.push(contact);
        return this.lastID;
    };
    Phonebook.prototype.addPhone = function (id, phone) {
        var contact = this.allContacts.find(function (contact) { return contact.id === id; });
        contact ? contact.phones.push(phone) : console.log("No such contact");
    };
    Phonebook.prototype.get = function (arg) {
        if (typeof arg === 'number')
            return this.allContacts.find(function (contact) { return contact.id === arg; });
        return this.allContacts.filter(function (contact) { return contact.name === arg; });
    };
    Phonebook.prototype.remove = function (id) {
        var counter = 0, myContact = {};
        for (var _i = 0, _a = this.allContacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            if (contact.id === id) {
                myContact = contact;
                break;
            }
            counter++;
        }
        if (myContact)
            return this.allContacts.splice(counter, counter + 1)[0];
        return undefined;
    };
    Phonebook.prototype[Symbol.iterator] = function () {
        return this;
    };
    Phonebook.prototype.getAllContact = function () {
        return this.allContacts;
    };
    return Phonebook;
}());
function createPhonebook() {
    return new Phonebook();
}
exports.default = createPhonebook;
