import React, { createContext, useState } from "react";

const FolderCreate = createContext([]);

function FolderContext({ children }) {
  const [folder, setFolder] = useState([]);

  return (
    <>
      <FolderCreate.Provider value={{ folder, setFolder}}>
        {children}
      </FolderCreate.Provider>
    </>
  );
}

export { FolderCreate, FolderContext };
