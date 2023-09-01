const employees = [
    {
        id:1,
        name: "Rafael de Luca",
        age: 35
    },
    {
        id:2,
        name: "Luciana de Luca",
        age: 41
    },
    {
        id:3,
        name: "Carolina de Luca",
        age: 22
    },
];

export function findEmployee (id : number) {
    return employees.find(empregados => empregados.id == id);
}

export default employees;