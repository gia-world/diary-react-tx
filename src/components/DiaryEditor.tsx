import React, { FC, useRef, useState } from "react";
import { Contents, ListType, OnCreateType } from "./types";

interface Params {
  onCreate: OnCreateType;
  // author?: string;
  // contents?: string;
  // emotion?: emotionNum;
  item?: ListType;
  isEdit?: boolean;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
  onEdit: (targetId: number, editedItem: ListType) => void;
}

const DiaryEditor: FC<Params> = ({
  onCreate,
  item,
  // author,
  // contents,
  // emotion,
  isEdit,
  setIsEdit,
  onEdit,
}) => {
  const authorInput = useRef<HTMLInputElement | null>(null);
  const contentInput = useRef<HTMLTextAreaElement | null>(null);
  const [state, setState] = useState<Contents>({
    author: item?.author || "",
    content: item?.content || "",
    emotion: item?.emotion || 1,
  });
  // console.log(state);
  const handleStateChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // console.log(e);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 2) {
      if (authorInput.current) {
        alert('Please enter more than 2 letters')
        authorInput.current.focus();
        authorInput.current.style.color='red'
      }
      return;
    }
    if (state.content.length < 5) {
      if (contentInput.current) {
        alert('Please enter more than 5 letters')
        contentInput.current.focus();
        contentInput.current.style.color='red'
      }
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("Saved");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor" style={{ borderWidth: isEdit ? 0 : "1px" }}>
      <h2>{isEdit ? "" : "Diary of the day"}</h2>
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
        <button
          onClick={() => {
            if (!isEdit) {
              handleSubmit();
            }
            if (isEdit && setIsEdit && item) {
              setIsEdit(false);
              onEdit(item.id, {
                id: item.id,
                created_date: new Date().getTime(),
                ...state,
              });
            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DiaryEditor;
