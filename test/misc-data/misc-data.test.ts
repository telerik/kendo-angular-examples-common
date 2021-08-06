import { getTasks, getFiles, getFlatTasks } from '../../src/misc-data';

describe("misc-data", () => {
    it("should retrieve tasks", () => {
        const tasks = getTasks();
        expect(tasks[1].children[1]).toBeDefined();
    });
    it("should retrieve files", () => {
        const files = getFiles();
        expect(files[3].contents[2].contents[2]).toBeDefined();
    });
    it("should retrieve flat tasks", () => {
        const tasks = getFlatTasks();
        expect(tasks.length).toEqual(27);
    });
});
