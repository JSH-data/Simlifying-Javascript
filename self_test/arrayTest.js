const defaultEmployee = {
    name : {
        first : '',
        last : ''
    },
    year : ''
};

defaultEmployee.name.first = "jsh"

const newObj = Object.assign(
    {},
    defaultEmployee,
    {
        name : Object.assign({}, defaultEmployee.name)
    }
);

console.log(newObj)