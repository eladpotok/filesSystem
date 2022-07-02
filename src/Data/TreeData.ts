
export interface FileData {
    path: string;
    isFolder: Boolean;
    title: string;
}

export interface TreeData {
    items: FileData[];
    title: string;
}

