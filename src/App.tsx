import React, { useRef, useState } from "react";
import "./App.css";
import { ListType, OnCreateType } from "./components/types";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

// const dummyList: ListType[] = [
//   {
//     id: 1,
//     author: "Gia1",
//     content: "Hello world 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "Gia2",
//     content: "Hello world 2",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "Gia3",
//     content: "Hello world 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState<ListType[]>([]);
  const dataId = useRef<number>(0);

  const onCreate: OnCreateType = (author, content, emotion) => {
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

  const onRemove = (targetId: number) => {
    alert(`Diary no. ${targetId+1} is deleted.`);
    const newList = data.filter((it) => it.id !== targetId);
    setData(newList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diarylist={data} />
    </div>
  );
}

export default App;
