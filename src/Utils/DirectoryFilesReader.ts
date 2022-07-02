import { FileData } from "../Data/TreeData";


export async function readFiles(path: string): Promise<FileData[]> {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(1000);
    return getRandomFilesOrDirectories(5);

}

export function getRandomFilesOrDirectories(randNumber: number): FileData[] {
    const items = [];
    for (var i = 0; i < randNumber; i++) {

        items.push(
            {
                path: "/" + makeid(4),
                isFolder: Math.random() < 0.5,
                title: makeid(10)
            } as FileData
        )
    }

    return items;
}


function makeid(length: number) {
    var result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
