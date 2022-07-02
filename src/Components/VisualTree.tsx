import { List } from "@mui/material";
import { FileData } from "../Data/TreeData";
import VisualTreeNode from "./VisualTreeNode";
import ListSubheader from '@mui/material/ListSubheader';

interface VisualTreeProps { 
    items: FileData[],
    title: string,
    loadRequest: (path: string) => Promise<FileData[]> 
}


function VisualTree( { items, title, loadRequest} : VisualTreeProps ) {
    return (
        <List   subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {title}
            </ListSubheader>
          }  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: "black" }}
        component="nav" 
        aria-labelledby="nested-list-subheader">
            {items.map( (element: FileData)=> (
                <VisualTreeNode fileData={element} loadRequest={loadRequest}/>
            ))}

        </List>
    ) 
}

export default VisualTree;