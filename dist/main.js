"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Phonebook_1 = __importDefault(require("./Phonebook"));
var Contact_1 = __importDefault(require("./Contact"));
var yellowPages = (0, Phonebook_1.default)();
yellowPages.add(new Contact_1.default('Almog', 'Ahihud, Ahihud 6a', ['050-2228644']));
yellowPages.add(new Contact_1.default('Almog', 'Akko, Golani 4', ['050-2228645']));
yellowPages.add(new Contact_1.default('Almog', 'Karmiel, flower 11', ['050-2228646']));
yellowPages.add(new Contact_1.default('Asaf', 'Ahihud, Ahihud 57', ['050-5050000']));
yellowPages.add(new Contact_1.default('Gil', 'Batyam, Ha-negev 8', ['050-4140542']));
yellowPages.add(new Contact_1.default('Noam', 'Holon, Lorem 213', ['050-7878006']));
yellowPages.add(new Contact_1.default('Yossi', 'Migdal Ha-emek, Tifrah 12', ['050-45645646']));
yellowPages.add(new Contact_1.default('Shahar', 'Ben-Gurion 14, Netanya', ['09-43433']));
yellowPages.add(new Contact_1.default('Moshe', 'Unknown, Uknown 6a', ['050-78666']));
yellowPages.add(new Contact_1.default('David', 'Tira, Bish 1', ['050-4643839']));
yellowPages.add(new Contact_1.default('Beni', 'Eilat, Yassur 29', ['050-43111000']));
console.log('size before add: ', yellowPages.size);
yellowPages.add(new Contact_1.default('Almog', 'Tira, Bish 1', ['050-4643839']));
yellowPages.add(new Contact_1.default('Ben-El', 'Eilat, Yassur 29', ['050-43111000']));
console.log('size after add: ', yellowPages.size);
yellowPages.addPhone(2, '04');
var contact = yellowPages.get('Asaf');
yellowPages.addPhone(contact[0].id, '04');
console.log('size before remove: ', yellowPages.size);
yellowPages.remove(contact[0].id);
console.log('size after remove: ', yellowPages.size);
var yelloPages = yellowPages.getAllContact();
yelloPages === null || yelloPages === void 0 ? void 0 : yelloPages.sort(function (a, b) {
    var first = a.name, second = b.name;
    if (first < second)
        return -1;
    if (first > second)
        return 1;
    return 0;
});
for (var _i = 0, _a = yelloPages; _i < _a.length; _i++) {
    var contact_1 = _a[_i];
    console.log(contact_1);
    //contacts will be delivered in alphabetical order
    //Try with O(N) complexity
}
