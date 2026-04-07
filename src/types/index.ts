export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  initials: string;
  interests: string[];
  match: number;
}

export interface Section {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
}

export type Theme = "dark" | "light";

export interface Tag {
  id: string;
  label: string;
}

