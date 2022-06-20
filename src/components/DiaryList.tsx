import React from "react";
import type { emotionNum, ListType } from "./types";
import DiaryItem from "./DiaryItem";

interface Params {
  diarylist: ListType[];
  onRemove: (targetId: number) => void;
  onCreate: (author: string, content: string, emotion: emotionNum) => void;
  onEdit: (targetId: number, editedItem: ListType) => void;
}

const DiaryList = ({ diarylist, onRemove, onCreate, onEdit }: Params) => {
  return (
    <div className="DiaryList">
      <h2>Diary History</h2>
      <h3>{diarylist.length} of diaries exists.</h3>
      <div>
        {diarylist.map((item) => (
          <DiaryItem
            item={item}
            key={item.id}
            onRemove={onRemove}
            onCreate={onCreate}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  diarylist: [],
};
export default DiaryList;
