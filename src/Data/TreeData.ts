
export interface FileData {
    path: string;
    isFolder: Boolean;
    title: string;
}

export interface TreeData {
    items: FileData[];
    title: string;
}

export function getRandomFilesOrDirectories(randNumber: number) : FileData[] {
const items = [];
for(var i=0;i<randNumber;i++) {
    
    items.push( 
        {
            path: "/" + makeid(4),
            isFolder: Math.random() < 0.5,
            title: makeid(10)
        }  as FileData
    )
}

    return items;
}


function makeid(length: number) {
var result           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}
