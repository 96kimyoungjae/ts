// 1. Record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// 2. Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

// 3. Pick
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Pick<Todo2, "title" | "completed">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};

// 4. Exclude
type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T2 = Exclude<string | number | (() => void), () => void>;

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "circle" }>;

// 5. enum
enum TimeDealCatergoryIds {
  All = -1,
  Fashion = 0,
  Beauty = 1,
  Food = 3,
  Life = 5,
  Health = 6,
  Appliance = 8,
  Living = 9,
}

export const CATEGORY_LIST: { [key in TimeDealCatergoryIds]: string } = {
  [TimeDealCatergoryIds.All]: "전체",
  [TimeDealCatergoryIds.Fashion]: "패션",
  [TimeDealCatergoryIds.Beauty]: "뷰티",
  [TimeDealCatergoryIds.Food]: "식품",
  [TimeDealCatergoryIds.Life]: "생활",
  [TimeDealCatergoryIds.Health]: "건강",
  [TimeDealCatergoryIds.Appliance]: "가전",
  [TimeDealCatergoryIds.Living]: "리빙",
};
