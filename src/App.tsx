import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import VisualTree from './Components/VisualTree';
import { readFiles } from './Utils/DirectoryFilesReader';
import { FileData, TreeData } from './Data/TreeData';

function App() {
  const [data , setData] = useState<TreeData | null>(null);

  useEffect(() => { 
    (async () => { 
      var files = await fetchDataHandler("");
      setData( {  items: files, title: 'Files System' }  );
    })() 
  }, [])


  const fetchDataHandler = async (path: string) => {
    return await readFiles(path);
  };


  return (
    <div className="App">
      <header className="App-header">
        {data && <VisualTree  { ... data  } loadRequest={fetchDataHandler} />}
      </header>
    </div>
  );
}

export default App;
