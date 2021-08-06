export interface File {
    name: string;
    id: number;
    type: 'file' | 'directory';
    time: Date;
    size?: number;
    contents?: File[];
}

