import React, { FC } from "react";
import type { ListType } from "./types";

interface Params {
  item: ListType;
}
const DiaryItem: FC<Params> = ({ item }) =>  {
  const { id, author, content, emotion, created_date } = item;
  return (
    <div className="DiaryItem">
      <div className="info">
        <p>{author}</p>
        <p>{emotion}</p>
        <p className="date">{created_date}</p>
      </div>
      <div className="content">{content}</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default DiaryItem;
