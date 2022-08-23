import createPhonebook from "./Phonebook";
import Contact from "./Contact";

const yellowPages = createPhonebook()
yellowPages.add(new Contact('Almog', 'Ahihud, Ahihud 6a', ['050-2228644']))
yellowPages.add(new Contact('Almog', 'Akko, Golani 4', ['050-2228645']))
yellowPages.add(new Contact('Almog', 'Karmiel, flower 11', ['050-2228646']))
yellowPages.add(new Contact('Asaf', 'Ahihud, Ahihud 57', ['050-5050000']))
yellowPages.add(new Contact('Gil', 'Batyam, Ha-negev 8', ['050-4140542']))
yellowPages.add(new Contact('Noam', 'Holon, Lorem 213', ['050-7878006']))
yellowPages.add(new Contact('Yossi', 'Migdal Ha-emek, Tifrah 12', ['050-45645646']))
yellowPages.add(new Contact('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']))
yellowPages.add(new Contact('Moshe', 'Unknown, Uknown 6a', ['050-78666']))
yellowPages.add(new Contact('David', 'Tira, Bish 1', ['050-4643839']))
yellowPages.add(new Contact('Beni', 'Eilat, Yassur 29', ['050-43111000']))


console.log('size before add: ', yellowPages.size)
yellowPages.add(new Contact('Almog', 'Tira, Bish 1', ['050-4643839']))
yellowPages.add(new Contact('Ben-El', 'Eilat, Yassur 29', ['050-43111000']))
console.log('size after add: ', yellowPages.size)

yellowPages.addPhone(2,'04')

const contact = yellowPages.get('Asaf')

yellowPages.addPhone(contact![0].id!, '04')

console.log('size before remove: ', yellowPages.size)
yellowPages.remove(contact![0].id!)
console.log('size after remove: ', yellowPages.size)

const contactArray = []
 for(const contact of yellowPages!){ //contacts will be delivered one by one
    //console.log(contact);
    contactArray.push(contact)
}

contactArray.sort((a, b) => { //sorted in alphabetical order
    let first = a!.name,
        second = b!.name
    if(first<second) return -1
    if(first>second) return 1
    return 0
})
console.log(contactArray);

