
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');


const getContactsFromfile = (cb) => {
    const p = path.join(rootDir, 'data', 'contacts.json');
    fs.readFile(p, (err, contents) => {
        if (err) {
            return cb([]);
        }
        else {
            cb(JSON.parse(contents));
        }
    });

}



module.exports = class Contacts {
    constructor(fName,lName,email,mobileNo) {
        this.fName = fName;
        this.lName=lName;
        this.email=email;
        this.mobileNo = mobileNo;
    }

    save() {
    const p = path.join(rootDir, 'data', 'contacts.json');

    getContactsFromfile(contacts => {
            contacts.push(this);
            fs.writeFile(p, JSON.stringify(contacts), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {//fetchAll function will work after reading the file
        getContactsFromfile(cb);

    }
}