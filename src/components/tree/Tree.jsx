import { FolderAddOutlined } from "@ant-design/icons";
import React, { useContext, useRef, useState } from "react";
import { FolderCreate } from "../../FolderContext/FolderContext";
import { v4 } from "uuid";
import Folder from "./Folder/Folder";

function Tree() {
  const { folder, setFolder } = useContext(FolderCreate);
  const [newFolderInput, setNewFolderInput] = useState("");
  const addFolderInputRef = useRef(null);

  const handleAddNewFolder = (folderName) => {
    if (folderName === "") return;
    let newFolder = {
      id: v4(),
      folderName,
      child: [],
    };
    folder.push(newFolder);
    setNewFolderInput("");
    addFolderInputRef.current.focus();
  };

  const handleDeleteFolder = (id) => {
    const folderId = folder.filter((e) => e.id !== id);
    setFolder(folderId);
  };

  return (
    <>
      <div className="add__new--folder">
        <input
          type="text"
          ref={addFolderInputRef}
          value={newFolderInput}
          onChange={(e) => setNewFolderInput(e.target.value)}
          placeholder="Thêm folder"
        />
        <button onClick={() => handleAddNewFolder(newFolderInput)}>
          <FolderAddOutlined />
        </button>
      </div>
      {folder.map((item, index, array) => <Folder key={index} { ...item } folderList={array} setFolder={setFolder} onDeleteFolder={handleDeleteFolder} />)}
    </>
  );
}

export default Tree;
