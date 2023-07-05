class Deparment {
    // public name: string;
    // private id: string;
    private employees: string[] = [];

    constructor (private readonly id: string, public name: string) { // shorthand init
        // this.name = n;
        // this.id = id;
    }

    describe() {
        // console.log('Description: ', this.name);
        console.log(`Description: ${this.id} ${this.name}`);
    }

    addEmploye(employe: string) {
        this.employees.push(employe);
    }

    employeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const deparment = new Deparment('D1', 'Accounting');

console.log('Deparment Object: ', deparment);

deparment.describe();

deparment.addEmploye('Ravi');
deparment.addEmploye('Verma');
// deparment.employees[2] = "Vivu"; It's a private

deparment.employeesInfo();

// const deparmentCopy = { name: 'DUMMY', describe: deparment.describe };
// deparmentCopy.describe();