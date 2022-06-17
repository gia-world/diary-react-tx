type emotionNum = 1 | 2 | 3 | 4 | 5;

interface Contents {
  author: string;
  content: string;
  emotion: emotionNum;
}

interface ListType {
  id: number;
  author: string;
  content: string;
  emotion: emotionNum;
  created_date: number;
}

export type { Contents, ListType,emotionNum };
