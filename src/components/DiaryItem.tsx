import React, { FC, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import type { emotionNum, ListType } from "./types";

interface Params {
  item: ListType;
  onRemove: (targetId: number) => void;
  onCreate: (author: string, content: string, emotion: emotionNum) => void;
  onEdit: (targetId: number, editedItem: ListType) => void;
}
const DiaryItem: FC<Params> = ({ item, onRemove, onCreate, onEdit }) => {
  const { id, author, content, emotion, created_date } = item;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleRemove = () => {
    // console.log(id)
    if (window.confirm(`Are you sure to delete the diary no.${id + 1}?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      {!isEdit ? (
        <div>
          <div className="info">
            <p>{author}</p>
            <p>{emotion}</p>
            <p className="date">
              {new Date(created_date).toLocaleString("en-KR")}
            </p>
          </div>
          <div className="content">{content}</div>
          {/* <button>Edit</button> */}
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            edit
          </button>
          <button onClick={handleRemove}>Delete</button>
        </div>
      ) : (
        <div>
          <DiaryEditor
            onCreate={onCreate}
            item={item}
            isEdit={isEdit}
            onEdit={onEdit}
            setIsEdit={setIsEdit}
          />
          {/* <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            save
          </button> */}
          {/* <div>
            <input type="text" name="" id="" />
            <textarea></textarea>
            <select>
              <option value=""></option>
            </select>
          </div>
          <button onClick={() => {}}>edit</button> */}
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
