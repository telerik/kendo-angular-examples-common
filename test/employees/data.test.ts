import { getEmployees, getFlatEmployees } from '../../src/employees';

describe("employees data", () => {

    it("should retrieve different employees instance", () => {
        let employees = getEmployees(), employees1;

        expect(employees[1].reports[1]).toBeDefined();
        employees[1].reports[1].title = null;
        employees1 = getEmployees();
        expect(employees1[1].reports[1]).not.toEqual(null);

    });

    it("should retrieve different flat employees instance", () => {
        let employees = getFlatEmployees(), employees1;

        expect(employees.length).toEqual(43);
        employees[0].title = null;
        employees1 = getFlatEmployees();
        expect(employees1.title).not.toEqual(null);
    });
});
