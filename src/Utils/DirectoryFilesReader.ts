import { FileData, getRandomFilesOrDirectories } from "../Data/TreeData";


export async function readFiles(path: string) : Promise<FileData[]> {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(1000);
    return getRandomFilesOrDirectories(5);
    
}