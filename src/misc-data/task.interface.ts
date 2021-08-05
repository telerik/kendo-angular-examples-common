export interface Task {
    title: string;
    id: number;
    start: Date;
    end: Date;
    completionRatio?: number;
    children?: Task[];
}

