// Write your solution in this file!
const employee = {
    name: 'sam',
    streetAddress: '11 Tumbleweed',
};


function updateEmployeeWithKeyAndValue(employee, name, Gregory) {
    const newEmployee = {...employee};

    newEmployee[name] = Gregory;

    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, toad) {
    employee[name] = toad;

    return employee;
};

function deleteFromEmployeeByKey(employee, key) {

    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}