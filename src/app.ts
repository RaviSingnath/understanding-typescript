class Department {
    // public name: string;
    // private id: string;
    static fiscalYear = 2023;
    protected employees: string[] = [];

    constructor (private readonly id: string, public name: string) { // shorthand init
        // this.name = n;
        // this.id = id;
    }

    static createEmploy(name: string) {
        return { name: name }
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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

class Accounting extends Department {
    private lastReport: string;
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No repost found ...');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass a valid value!')
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }


    addEmploye(name: string) {
        if(name === 'Ravi') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// const department = new Department('D1', 'Accounting');
// department.describe();

// department.addEmploye('Ravi');
// department.addEmploye('Verma');
// // department.employees[2] = "Vivu"; It's a private
// department.employeesInfo();

// const departmentCopy = { name: 'DUMMY', describe: department.describe };
// departmentCopy.describe();

const employee = Department.createEmploy('Ravi');
console.log(employee, Department.fiscalYear);

//

const ITDep = new ITDepartment('D1', ['Ravi']);

console.log('Deparment Object: ', ITDep);

ITDep.describe();

ITDep.addEmploye('Ravi');
ITDep.addEmploye('Verma');
// deparment.employees[2] = "Vivu"; It's a private

ITDep.employeesInfo();

//

const accountDepartment = new Accounting('D2', []);

// console.log(accountDepartment.mostRecentReport); // This will throw error
// accountDepartment.mostRecentReport = '';  // This will throw error

accountDepartment.mostRecentReport = 'Monthly reposrt';

accountDepartment.addReport('test');
console.log(accountDepartment.mostRecentReport);

accountDepartment.printReports();

accountDepartment.addEmploye('Ravi');
accountDepartment.addEmploye('Verma');

console.log(accountDepartment);