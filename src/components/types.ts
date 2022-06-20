export type emotionNum = 1 | 2 | 3 | 4 | 5;

export interface Contents {
  author: string;
  content: string;
  emotion: emotionNum;
}

export interface ListType {
  id: number;
  author: string;
  content: string;
  emotion: emotionNum;
  created_date: number;
}


export type OnCreateType = (author: string, content: string, emotion: emotionNum) => void;