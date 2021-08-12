import { getTasks, getFiles, getFlatTasks } from '../../src/misc-data';

describe("misc-data", () => {

    it("should retrieve different tasks instance", () => {
        let tasks = getTasks(), tasks1;

        expect(tasks[1].children[1]).toBeDefined();
        tasks[1].children[1].title = null;
        tasks1 = getTasks();
        expect(tasks1[1].children[1].title).not.toEqual(null);

    });

    it("should retrieve different files instance", () => {
        let files = getFiles(), files1;

        expect(files[3].contents[2].contents[2]).toBeDefined();
        files[3].contents[2].contents[2] = null;
        files1 = getFiles();
        expect(files1[3].contents[2].contents[2]).not.toEqual(null);
    });

    it("should retrieve different flat tasks instance", () => {
        let tasks = getFlatTasks(), tasks1;

        expect(tasks.length).toEqual(27);
        tasks[0].title = null;
        tasks1 = getFlatTasks();
        expect(tasks1.title).not.toEqual(null);
    });
});
