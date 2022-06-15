import React from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

export interface ListType {
  id: number;
  author: string;
  content: string;
  emotion: number;
  created_date: number;
};

const dummyList :ListType[] = [
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
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList {...dummyList} />
      {/* 
      diaryList={dummyList} 변수명을 인식하지 못해서? 비구조화 할당 문법으로?
      https://kth990303.tistory.com/253?category=837200
      */}
    </div>
  );
}

export default App;
