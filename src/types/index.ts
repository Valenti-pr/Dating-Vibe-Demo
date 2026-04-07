export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  initials: string;
  interests: string[];
  match: number;
  photo?: {
    src: string;
    alt: string;
    creditName: string;
    creditUrl: string;
  };
}

export interface Section {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
}

export type Theme = "dark" | "light";

export type Device = "desktop" | "tablet" | "mobile";

export interface Tag {
  id: string;
  label: string;
  emoji?: string;
}

