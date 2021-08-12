import { Task } from './task.interface';

export const getTasks: Function = (): Task[] => {
    return [
        {
            id: 1,
            title: "Milestone",
            start: new Date("2014-06-02T00:00:00.000Z"),
            end: new Date("2014-06-02T00:00:00.000Z")
        },
        {
            id: 7,
            title: "Software validation, research and implementation",
            start: new Date("2014-06-02T00:00:00.000Z"),
            end: new Date("2014-07-12T00:00:00.000Z"),
            completionRatio: 0.45708333333333334,
            children: [
                {
                    id: 11,
                    title: "Research",
                    start: new Date("2014-06-02T00:00:00.000Z"),
                    end: new Date("2014-06-07T00:00:00.000Z"),
                    completionRatio: 0.5766666666666667,
                    children: [
                        {
                            id: 19,
                            title: "Validation with Customers",
                            start: new Date("2014-06-02T00:00:00.000Z"),
                            end: new Date("2014-06-04T00:00:00.000Z"),
                            completionRatio: 0.25
                        },
                        {
                            id: 20,
                            title: "Market Research",
                            start: new Date("2014-06-02T00:00:00.000Z"),
                            end: new Date("2014-06-03T02:00:00.000Z"),
                            completionRatio: 0.82
                        },
                        {
                            id: 39,
                            title: "Functional and Technical Specification",
                            start: new Date("2014-06-04T00:00:00.000Z"),
                            end: new Date("2014-06-07T00:00:00.000Z"),
                            completionRatio: 0.66
                        }
                    ]
                },
                {
                    id: 12,
                    title: "Design",
                    start: new Date("2014-06-09T00:00:00.000Z"),
                    end: new Date("2014-06-14T00:00:00.000Z"),
                    completionRatio: 0.6,
                    children: [
                        {
                            id: 22,
                            title: "UI Design",
                            start: new Date("2014-06-09T00:00:00.000Z"),
                            end: new Date("2014-06-11T00:00:00.000Z"),
                            completionRatio: 0.56
                        },
                        {
                            id: 23,
                            title: "HTML Prototype",
                            start: new Date("2014-06-11T00:00:00.000Z"),
                            end: new Date("2014-06-14T00:00:00.000Z"),
                            completionRatio: 0.64
                        }
                    ]
                },
                {
                    id: 13,
                    title: "Implementation",
                    start: new Date("2014-06-11T00:00:00.000Z"),
                    end: new Date("2014-07-02T00:00:00.000Z"),
                    completionRatio: 0.77,
                    children: [
                        {
                            id: 24,
                            title: "Prototype",
                            start: new Date("2014-06-11T00:00:00.000Z"),
                            end: new Date("2014-06-17T00:00:00.000Z"),
                            completionRatio: 0.77
                        },
                        {
                            id: 26,
                            title: "Architecture",
                            start: new Date("2014-06-17T00:00:00.000Z"),
                            end: new Date("2014-06-18T00:00:00.000Z"),
                            completionRatio: 0.82
                        },
                        {
                            id: 27,
                            title: "Data Layer",
                            start: new Date("2014-06-18T00:00:00.000Z"),
                            end: new Date("2014-06-24T00:00:00.000Z"),
                            completionRatio: 0.5
                        },
                        {
                            id: 28,
                            title: "Unit Tests",
                            start: new Date("2014-06-18T00:00:00.000Z"),
                            end: new Date("2014-06-27T00:00:00.000Z"),
                            completionRatio: 0.68
                        },
                        {
                            id: 29,
                            title: "UI and Interaction",
                            start: new Date("2014-06-27T00:00:00.000Z"),
                            end: new Date("2014-07-02T00:00:00.000Z"),
                            completionRatio: 0.6
                        }
                    ]
                },
                {
                    id: 14,
                    title: "Testing",
                    start: new Date("2014-06-30T00:00:00.000Z"),
                    end: new Date("2014-07-05T00:00:00.000Z"),
                    completionRatio: 0.52,
                    children: [
                        {
                            id: 32,
                            title: "Integration Testing",
                            start: new Date("2014-06-30T00:00:00.000Z"),
                            end: new Date("2014-07-05T00:00:00.000Z"),
                            completionRatio: 0.94
                        },
                        {
                            id: 33,
                            title: "Load Testing",
                            start: new Date("2014-06-30T00:00:00.000Z"),
                            end: new Date("2014-07-05T00:00:00.000Z"),
                            completionRatio: 0.1
                        }
                    ]
                },
                {
                    id: 17,
                    title: "Release",
                    start: new Date("2014-07-12T00:00:00.000Z"),
                    end: new Date("2014-07-12T00:00:00.000Z"),
                    completionRatio: 0
                },
                {
                    id: 18,
                    title: "Project Kickoff",
                    start: new Date("2014-06-02T00:00:00.000Z"),
                    end: new Date("2014-06-02T00:00:00.000Z"),
                    completionRatio: 0.23
                },
                {
                    id: 30,
                    title: "Documentation",
                    start: new Date("2014-06-23T00:00:00.000Z"),
                    end: new Date("2014-07-05T00:00:00.000Z"),
                    completionRatio: 0.14,
                    children: [
                        {
                            id: 34,
                            title: "Structure",
                            start: new Date("2014-06-23T00:00:00.000Z"),
                            end: new Date("2014-06-26T00:00:00.000Z"),
                            completionRatio: 0.28
                        },
                        {
                            id: 35,
                            title: "Articles",
                            start: new Date("2014-06-26T00:00:00.000Z"),
                            end: new Date("2014-07-05T00:00:00.000Z"),
                            completionRatio: 0
                        }
                    ]
                },
                {
                    id: 31,
                    title: "Demos",
                    start: new Date("2014-06-30T00:00:00.000Z"),
                    end: new Date("2014-07-12T00:00:00.000Z"),
                    completionRatio: 0.82,
                    children: [
                        {
                            id: 36,
                            title: "Structure",
                            start: new Date("2014-06-30T00:00:00.000Z"),
                            end: new Date("2014-07-02T00:00:00.000Z"),
                            completionRatio: 0.94
                        },
                        {
                            id: 37,
                            title: "Design",
                            start: new Date("2014-07-02T00:00:00.000Z"),
                            end: new Date("2014-07-05T00:00:00.000Z"),
                            completionRatio: 0.8
                        },
                        {
                            id: 38,
                            title: "Demos",
                            start: new Date("2014-07-03T00:00:00.000Z"),
                            end: new Date("2014-07-12T00:00:00.000Z"),
                            completionRatio: 0.72
                        }
                    ]
                }
            ]
        }
    ];
};
