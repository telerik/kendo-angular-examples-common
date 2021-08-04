export const tasks = [
    {
        id: 1,
        title: "Milestone",
        start: new Date("2014-06-02T00:00:00.000Z"),
        end: new Date("2014-06-02T00:00:00.000Z")
    },
    {
        id: 7,
        title: "Software validation, research and implementation",
        orderId: 0,
        start: new Date("2014-06-02T00:00:00.000Z"),
        end: new Date("2014-07-12T00:00:00.000Z"),
        completionRatio: 0.45708333333333334,
        isExpanded: true,
        children: [
            {
                id: 11,
                title: "Research",
                orderId: 1,
                start: new Date("2014-06-02T00:00:00.000Z"),
                end: new Date("2014-06-07T00:00:00.000Z"),
                completionRatio: 0.5766666666666667,
                isExpanded: true,
                children: [
                    {
                        id: 19,
                        title: "Validation with Customers",
                        orderId: 0,
                        start: new Date("2014-06-02T00:00:00.000Z"),
                        end: new Date("2014-06-04T00:00:00.000Z"),
                        completionRatio: 0.25,
                        isExpanded: true
                    },
                    {
                        id: 20,
                        title: "Market Research",
                        orderId: 1,
                        start: new Date("2014-06-02T00:00:00.000Z"),
                        end: new Date("2014-06-03T02:00:00.000Z"),
                        completionRatio: 0.82,
                        isExpanded: true
                    },
                    {
                        id: 39,
                        title: "Functional and Technical Specification",
                        orderId: 2,
                        start: new Date("2014-06-04T00:00:00.000Z"),
                        end: new Date("2014-06-07T00:00:00.000Z"),
                        completionRatio: 0.66,
                        isExpanded: true
                    }
                ]
            },
            {
                id: 12,
                title: "Design",
                orderId: 2,
                start: new Date("2014-06-09T00:00:00.000Z"),
                end: new Date("2014-06-14T00:00:00.000Z"),
                completionRatio: 0.6,
                isExpanded: true,
                children: [
                    {
                        id: 22,
                        title: "UI Design",
                        orderId: 0,
                        start: new Date("2014-06-09T00:00:00.000Z"),
                        end: new Date("2014-06-11T00:00:00.000Z"),
                        completionRatio: 0.56,
                        isExpanded: true
                    },
                    {
                        id: 23,
                        title: "HTML Prototype",
                        orderId: 1,
                        start: new Date("2014-06-11T00:00:00.000Z"),
                        end: new Date("2014-06-14T00:00:00.000Z"),
                        completionRatio: 0.64,
                        isExpanded: true
                    }
                ]
            },
            {
                id: 13,
                title: "Implementation",
                orderId: 3,
                start: new Date("2014-06-11T00:00:00.000Z"),
                end: new Date("2014-07-02T00:00:00.000Z"),
                completionRatio: 0.77,
                isExpanded: true,
                children: [
                    {
                        id: 24,
                        title: "Prototype",
                        orderId: 0,
                        start: new Date("2014-06-11T00:00:00.000Z"),
                        end: new Date("2014-06-17T00:00:00.000Z"),
                        completionRatio: 0.77,
                        isExpanded: true
                    },
                    {
                        id: 26,
                        title: "Architecture",
                        orderId: 1,
                        start: new Date("2014-06-17T00:00:00.000Z"),
                        end: new Date("2014-06-18T00:00:00.000Z"),
                        completionRatio: 0.82,
                        isExpanded: true
                    },
                    {
                        id: 27,
                        title: "Data Layer",
                        orderId: 2,
                        start: new Date("2014-06-18T00:00:00.000Z"),
                        end: new Date("2014-06-24T00:00:00.000Z"),
                        completionRatio: 0.5,
                        isExpanded: true
                    },
                    {
                        id: 28,
                        title: "Unit Tests",
                        orderId: 4,
                        start: new Date("2014-06-18T00:00:00.000Z"),
                        end: new Date("2014-06-27T00:00:00.000Z"),
                        completionRatio: 0.68,
                        isExpanded: true
                    },
                    {
                        id: 29,
                        title: "UI and Interaction",
                        orderId: 3,
                        start: new Date("2014-06-27T00:00:00.000Z"),
                        end: new Date("2014-07-02T00:00:00.000Z"),
                        completionRatio: 0.6,
                        isExpanded: true
                    }
                ]
            },
            {
                id: 14,
                title: "Testing",
                orderId: 4,
                start: new Date("2014-06-30T00:00:00.000Z"),
                end: new Date("2014-07-05T00:00:00.000Z"),
                completionRatio: 0.52,
                isExpanded: true,
                children: [
                    {
                        id: 32,
                        title: "Integration Testing",
                        orderId: 0,
                        start: new Date("2014-06-30T00:00:00.000Z"),
                        end: new Date("2014-07-05T00:00:00.000Z"),
                        completionRatio: 0.94,
                        isExpanded: true
                    },
                    {
                        id: 33,
                        title: "Load Testing",
                        orderId: 1,
                        start: new Date("2014-06-30T00:00:00.000Z"),
                        end: new Date("2014-07-05T00:00:00.000Z"),
                        completionRatio: 0.1,
                        isExpanded: true
                    }
                ]
            },
            {
                id: 17,
                title: "Release",
                orderId: 7,
                start: new Date("2014-07-12T00:00:00.000Z"),
                end: new Date("2014-07-12T00:00:00.000Z"),
                completionRatio: 0,
                isExpanded: true
            },
            {
                id: 18,
                title: "Project Kickoff",
                orderId: 0,
                start: new Date("2014-06-02T00:00:00.000Z"),
                end: new Date("2014-06-02T00:00:00.000Z"),
                completionRatio: 0.23,
                isExpanded: true
            },
            {
                id: 30,
                title: "Documentation",
                orderId: 5,
                start: new Date("2014-06-23T00:00:00.000Z"),
                end: new Date("2014-07-05T00:00:00.000Z"),
                completionRatio: 0.14,
                isExpanded: true,
                children: [
                    {
                        id: 34,
                        title: "Structure",
                        orderId: 0,
                        start: new Date("2014-06-23T00:00:00.000Z"),
                        end: new Date("2014-06-26T00:00:00.000Z"),
                        completionRatio: 0.28,
                        isExpanded: true
                    },
                    {
                        id: 35,
                        title: "Articles",
                        orderId: 1,
                        start: new Date("2014-06-26T00:00:00.000Z"),
                        end: new Date("2014-07-05T00:00:00.000Z"),
                        completionRatio: 0,
                        isExpanded: true
                    }
                ]
            },
            {
                id: 31,
                title: "Demos",
                orderId: 6,
                start: new Date("2014-06-30T00:00:00.000Z"),
                end: new Date("2014-07-12T00:00:00.000Z"),
                completionRatio: 0.82,
                isExpanded: false,
                children: [
                    {
                        id: 36,
                        title: "Structure",
                        orderId: 0,
                        start: new Date("2014-06-30T00:00:00.000Z"),
                        end: new Date("2014-07-02T00:00:00.000Z"),
                        completionRatio: 0.94,
                        isExpanded: true
                    },
                    {
                        id: 37,
                        title: "Design",
                        orderId: 1,
                        start: new Date("2014-07-02T00:00:00.000Z"),
                        end: new Date("2014-07-05T00:00:00.000Z"),
                        completionRatio: 0.8,
                        isExpanded: true
                    },
                    {
                        id: 38,
                        title: "Demos",
                        orderId: 2,
                        start: new Date("2014-07-03T00:00:00.000Z"),
                        end: new Date("2014-07-12T00:00:00.000Z"),
                        completionRatio: 0.72,
                        isExpanded: true
                    }
                ]
            }
        ]
    }
];

