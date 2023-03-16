import React, { memo, useState } from "react";
import {
  DeleteOutlined,
  DiffOutlined,
  EditOutlined,
  FolderAddOutlined,
  FolderFilled,
} from "@ant-design/icons";
import { v4 } from "uuid";
import FolderChild from "../FolderChild/FolderChild";

function Folder({ onDeleteFolder, folderList, id, folderName, child, setFolder }) {
  const [isInputNewFolder, setIsInputNewFolter] = useState(false);
  const [isInputEditFolder, setIsInputEditFolter] = useState(false);
  const [newFolderChild, setNewFolderChild] = useState("");
  const [editFolderChild, setEditFolderChild] = useState(folderName);

  const handleAddNewFolderChild = (folderName) => {
    if (folderName === "") return;
    let newFolder = {
      id: v4(),
      folderName,
      child: [],
    };
    child.push(newFolder);
    setNewFolderChild("");
    setIsInputNewFolter(false);
  };

  const handleDeleteFolderChild = (id) => {
    const folderId = folderList.map(item => {
      const filder = item.child.filter((e) => e.id !== id);
      return {
        ...item,
        child: filder
      };
    });
    setFolder(folderId);
  };

  const handleEditFolder = (id, folderName) => {
    if (folderName === "") return;
    const folderEdit = folderList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          folderName
        };
      }
      return item;
    });
    setFolder(folderEdit);
    setIsInputEditFolter(false);
  };

  return (
    <>
      <div className="new__folder">
        <span className="folder__icon">
          <FolderFilled />
        </span>
        <input
          className="folder"
          type="text"
          value={folderName}
        />
        <button onClick={() => setIsInputNewFolter(!isInputNewFolder)}>
          <DiffOutlined />
        </button>
        <button onClick={() => setIsInputEditFolter(!isInputEditFolder)}>
          <EditOutlined />
        </button>
        <button onClick={() => onDeleteFolder(id)}>
          <DeleteOutlined />
        </button>
        {isInputNewFolder && <div className="add__new--folder" style={{ float: "right" }}>
          <input
            type="text"
            value={newFolderChild}
            onChange={(e) => setNewFolderChild(e.target.value)}
            placeholder="Thêm folder"
          />
          <button onClick={() => handleAddNewFolderChild(newFolderChild)}>
            <FolderAddOutlined />
          </button>
        </div>}
        {isInputEditFolder && <div className="add__new--folder" style={{ float: "right" }}>
          <input
            type="text"
            value={editFolderChild}
            onChange={(e) => setEditFolderChild(e.target.value)}
          />
          <button onClick={() => handleEditFolder(id, editFolderChild)}>
            <EditOutlined />
          </button>
        </div>}
      </div>
      {child.map((item) => <FolderChild key={item.id} { ...item } folderList={folderList} onDeleteFolderChild={handleDeleteFolderChild} setFolder={setFolder} />)}
    </>
  );
}

export default memo(Folder);
