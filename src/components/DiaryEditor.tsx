import React, { FC, useRef, useState } from "react";
import { Contents,OnCreateType } from "./types";

interface Params{
  onCreate: OnCreateType
}

const DiaryEditor:FC<Params> = ({onCreate}) => {
  const authorInput = useRef<HTMLInputElement | null>(null);
  const contentInput = useRef<HTMLTextAreaElement | null>(null);
  const [state, setState] = useState<Contents>({
    author: "",
    content: "",
    emotion: 1
  });

  const handleStateChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    console.log(e);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 2) {
      if (authorInput.current) {
        authorInput.current.focus();
      }
      return;
    }
    if (state.content.length < 5) {
      if (contentInput.current) {
        contentInput.current.focus();
      }
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("saved");
    setState({
      author: "",
      content: "",
      emotion: 1
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Diary of the day</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          placeholder="Author"
          value={state.author}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          placeholder="Contents"
          value={state.content}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <span>Rate your emotion of the day : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleStateChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
