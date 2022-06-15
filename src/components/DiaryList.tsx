import React, { FC } from "react";
import { ListType } from "../App";
import DiaryItem from "./DiaryItem";

// 두개 차이점
// const DiaryList = (diaryist:Array<ListType>) => {
const DiaryList = (diarylist: ListType[]) => {
  console.log(diarylist); // Object
  console.log(diarylist.length); //undefined
  console.log(Object.keys(diarylist).length); //3

  return (
    <div className="DiaryList">
      <h2>Diary History</h2>
      <h4>{Object.keys(diarylist).length} of diaries exists.</h4>
      <div>
        {diarylist.map(
          (item)=>(
            <DiaryItem {...item} key={item.id}/>
          )
          // ()=>(return 값)
        )}
        {/*  Array<ListType>.map<void>(callbackfn: (value: ListType, index: number, array: ListType[]) => void, thisArg?: any): void[] */}
      </div>
    </div>
  );
};

export default DiaryList;
