import { useState } from "react"
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FileData } from "../Data/TreeData";

interface VisualTreeNodeProps { 
    fileData: FileData, 
    loadRequest: (path: string) => Promise<FileData[]> 
}

function VisualTreeNode({fileData , loadRequest } : VisualTreeNodeProps) {

    const [items, setItems] = useState<FileData[]  | null>(null);
    const [isExpended, setIsExpended] = useState(false) 
   
    const expend = () => { 
      setIsExpended(true) 
      if (!items) { 
        loadRequest(fileData.path) 
          .then((items) => {
            setItems(items) 
          }) 
      } 
    } 
   
    const collapse = () => { 
      setIsExpended(false) 
    } 
   
    return ( 
        <> 
          {fileData.isFolder &&   <ListItemButton onClick={isExpended ? collapse : expend}>
                <ListItemText primary={fileData.title} />
                {isExpended ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> }
          
            {!fileData.isFolder &&   
                <ListItemText primary={fileData.title} />
                
             }

          {isExpended && ( 
            <div> 
              {items 
                ? ( 
                  items.map(item => (
                    <VisualTreeNode fileData={item} loadRequest={loadRequest} /> 
                  )) 
                ) 
                : 'Loading...' 
              } 
            </div> 
          )} 
        </> 
      ) 


}


export default VisualTreeNode;