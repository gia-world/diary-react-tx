import React from "react";
import { ListType } from "../App";
import DiaryItem from "./DiaryItem";

interface Params {
  diarylist: ListType[];
}

const DiaryList = ({ diarylist }: Params) => {

  return (
    <div className="DiaryList">
      <h2>Diary History</h2>
      <h3>{diarylist.length} of diaries exists.</h3>
      <div>
        {diarylist.map(
          (item) => (
            <DiaryItem item={item} key={item.id} />
          )
        )}
      </div>
    </div>
  );
};

export default DiaryList;
