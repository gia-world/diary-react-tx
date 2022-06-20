import React, { FC } from "react";
import type { ListType } from "./types";

interface Params {
  item: ListType;
  onRemove: (targetId: number) => void
}
const DiaryItem: FC<Params> = ({ item,onRemove }) =>  {
  const { id, author, content, emotion, created_date } = item;

  const handleRemove=()=>{
    // console.log(id)
    if(window.confirm(`Are you sure to delete the diary no.${id+1}?`)){
      onRemove(id)
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <p>{author}</p>
        <p>{emotion}</p>
        <p className="date">{new Date(created_date).toLocaleString('en-KR')}</p>
      </div>
      <div className="content">{content}</div>
      {/* <button>Edit</button> */}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default DiaryItem;
