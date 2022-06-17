import React, { FC, useRef, useState } from "react";
import "./App.css";
import type { ListType, Contents, emotionNum } from "./components/types";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const dummyList: ListType[] = [
  {
    id: 1,
    author: "Gia1",
    content: "Hello world 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "Gia2",
    content: "Hello world 2",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "Gia3",
    content: "Hello world 3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  const [data, setData] = useState<ListType[]>([]);
  const dataId = useRef<number>(0);

  // const onCreate :FC= (author:string, content:string, emotion:emotionNum)=> {
  // const onCreate: FC<Contents> = (author, content, emotion) => {
  const onCreate = (author:string, content:string, emotion:emotionNum) => {
    const created_date = new Date().getTime();
    const newItem: ListType = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diarylist={dummyList} />
    </div>
  );
}

export default App;
