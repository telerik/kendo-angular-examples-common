import * as employeeHier from './employees.json';
import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';

const makeFlatData = (data, idField, parentField, containsField) => {
    const result = [];
    function visitChildren(childrenArray: any[], parentId: any): void {
        if (!childrenArray ) {
            return;
        }
        for (let obj of childrenArray) {
            let blank = {};
            blank[parentField] = parentId;
            result.push(Object.assign(blank, obj));
            visitChildren(obj[containsField], obj[idField]);
        }
    }
    visitChildren([data[0]], null);
    return result;
};

export interface Employee {
    id: number;
    managerId: number;
    name: string;
    firstName: string;
    reports: any;
    lastName: string;
    title: string;
    active: boolean;
    phone: number;
    hireDate: Date;
}
export function createEmployee(id: number, managerId: number, firstName: string, lastName: string, title: string, phone: number, active: boolean = true, reports: any = [],  hireDate: Date = null) {
    const emp: Employee = {
        id: id,
        managerId: managerId,
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        reports: reports,
        lastName: lastName,
        title: title,
        active: active,
        phone: phone,
        hireDate: new Date(hireDate)
    };
    return emp;
}

export const employeeTitles = ["Chief Executive Officer",
        "Chief Technical Officer",
        "VP, Engineering",
        "Team Lead",
        "Software Architect",
        "Director, Engineering",
        "QA Architect", "Chief Product Officer"];

export function makeEmployees(data, containsField
): Employee[] {
    function test(emp: Employee){
        return emp;
    }
    function mapTree(nodes: any[]): void {
        if (!nodes ) {
            return;
        }
        for (let obj of nodes ) {
            obj.hireDate = new Date(obj.hireDate);
            obj = obj;
            test(obj);
            mapTree(obj[containsField]);
        }
    }

    mapTree([data[0]]);
    return data;
}

@Injectable()
export class EmployeesService extends BehaviorSubject<any> {

    constructor() {
        super(null);
    }
    private dataHier = makeEmployees(employeeHier, 'reports');

    private data = makeFlatData(this.dataHier, 'id', 'managerId', 'reports');

    public readStatic(query: any = {skip:0, take: 10}, flat: boolean = true): Array<any> {
        if (flat) {
            let piece = this.data.slice(query.skip, query.take);
            return piece;
        } else {
            return this.dataHier;
        }
    }
    public readAsync(query: any = {skip:0, take: 10}, flat: boolean = true, time: number = 0 ): Observable<any> {
        if (flat) {
            let piece = this.data.slice(query.skip, query.take);
            return of(piece).pipe(delay(time));
        } else {
            return of(this.dataHier).pipe(delay(time));
        }
    }

    public save(item: any, isNew: boolean, time: number = 0, error: boolean = false) {
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        if (error) {
            return throwError(new Error('Error while updating'));
        }

        if (action == CREATE_ACTION) {
            this.data.push(item);
        } else {
            const updateIndex = this.data.findIndex(emp => emp.id == item.id);
            if (updateIndex == -1) {
                return throwError(new Error('Not found'))
            }
            this.data[updateIndex] = item;
        }
        return of(this.data).pipe(delay(time));
    }

    public reset() {
        this.data = makeEmployees(employeeHier, 'reports');
    }

    public remove(item?: Employee, time: number = 0, error: boolean = false) {
        if (error) {
            return throwError(new Error('Error while removing'))
        }

        const removeIndex = this.data.findIndex(emp => emp.id == item.id);

        if (removeIndex == -1) {
            return throwError(new Error('Not found'))
        }
        this.data.splice(removeIndex,1);
        return of(this.data).pipe(delay(time));
    }

}
