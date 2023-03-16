import React, { memo, useState } from "react";
import {
  DeleteOutlined,
  DiffOutlined,
  EditOutlined,
  FolderAddOutlined,
  FolderFilled,
} from "@ant-design/icons";
import { v4 } from "uuid";

function FolderChild({ onDeleteFolderChild, id, folderName, child, folderList, setFolder }) {
  const [isInputNewFolder, setIsInputNewFolter] = useState(false);
  const [newFolderChild, setNewFolderChild] = useState("");
  const [isInputEditFolder, setIsInputEditFolter] = useState(false);
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

  const handleEditFolderChild = (id, folderName) => {
    if (folderName === "") return;
    const folderEdit = folderList.map(item => {
      const childEdit = item.child.map(child => {
        if (child.id === id) {
          return {
            ...child,
            folderName
          };
        }
        return child;
      })
      return {
        ...item,
        child: childEdit
      };
    });
    setFolder(folderEdit);
    setIsInputEditFolter(false);
  };

  return (
    <>
      <div className="new__folder"  style={{ marginLeft: 20 }}>
        <span className="folder__icon">
          <FolderFilled />
        </span>
        <input
          className="folder"
          type="text"
          value={folderName}
          // onChange={}
        />
        <button onClick={() => setIsInputNewFolter(!isInputNewFolder)}>
          <DiffOutlined />
        </button>
        <button onClick={() => setIsInputEditFolter(!isInputEditFolder)}>
          <EditOutlined />
        </button>
        <button onClick={() => onDeleteFolderChild(id)}>
          <DeleteOutlined />
        </button>
        {isInputNewFolder && <div className="add__new--folder" style={{ marginLeft: 100 }}>
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
            <button onClick={() => handleEditFolderChild(id, editFolderChild)}>
              <EditOutlined />
            </button>
          </div>}
      </div>
    </>
  );
}

export default memo(FolderChild);
