// bind
const mehakNoor = {
    surname: 'Singh',
    empNo: 328
};

const harshDeep = {
    surname: 'Bhatia',
    empNo: 562
};

function func() {
    console.log(this.surname, this.empNo);
}

const func1 = func.bind(mehakNoor);
const func2 = func.bind(harshDeep);
// func1();
// func2();


// call  send argument as comma separated.
function fullName(city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
}

const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

// console.log(fullName.call(person1, 'Oslo', 'Norway'));

// console.log(fullName.apply(person1, ['Oslo', 'Norway']));

const obj = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
        __proto__: {
            b: 4
        }
    }
};