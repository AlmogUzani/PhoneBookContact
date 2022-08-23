import createPhonebook from "./Phonebook";
import Contact from "./Contact";

const myInstanceOfPhonebook = createPhonebook()
myInstanceOfPhonebook.add(new Contact('Almog', 'Ahihud, Ahihud 6a', ['050-2228644']))
myInstanceOfPhonebook.add(new Contact('Almog', 'Akko, Golani 4', ['050-2228645']))
myInstanceOfPhonebook.add(new Contact('Almog', 'Karmiel, flower 11', ['050-2228646']))
myInstanceOfPhonebook.add(new Contact('Asaf', 'Ahihud, Ahihud 57', ['050-5050000']))
myInstanceOfPhonebook.add(new Contact('Gil', 'Batyam, Ha-negev 8', ['050-4140542']))
myInstanceOfPhonebook.add(new Contact('Noam', 'Holon, Lorem 213', ['050-7878006']))
myInstanceOfPhonebook.add(new Contact('Yossi', 'Migdal Ha-emek, Tifrah 12', ['050-45645646']))
myInstanceOfPhonebook.add(new Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']))
myInstanceOfPhonebook.add(new Contact('Moshe', 'Unknown, Uknown 6a', ['050-78666']))
myInstanceOfPhonebook.add(new Contact('David', 'Tira, Bish 1', ['050-4643839']))
myInstanceOfPhonebook.add(new Contact('Beni', 'Eilat, Yassur 29', ['050-43111000']))


console.log('size before add: ', myInstanceOfPhonebook.size)
myInstanceOfPhonebook.add(new Contact('Almog', 'Tira, Bish 1', ['050-4643839']))
myInstanceOfPhonebook.add(new Contact('Ben-El', 'Eilat, Yassur 29', ['050-43111000']))
console.log('size after add: ', myInstanceOfPhonebook.size)

myInstanceOfPhonebook.addPhone(2,'04')

const contact = myInstanceOfPhonebook.get('Asaf')

myInstanceOfPhonebook.addPhone(contact![0].id!, '04')

console.log('size before remove: ', myInstanceOfPhonebook.size)
myInstanceOfPhonebook.remove(contact![0].id!)
console.log('size after remove: ', myInstanceOfPhonebook.size)
