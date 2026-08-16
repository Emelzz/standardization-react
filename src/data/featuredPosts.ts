export interface FeaturedPost {
  id: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
}

export const featuredPosts: FeaturedPost[] = [
  {
    id: "post-1",
    image: "https://loremflickr.com/900/620/bedroom,interior,dark",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    // Nada
  },
  {
    id: "post-2",
    image: "https://loremflickr.com/900/620/kitchen,interior",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: "post-3",
    image: "https://loremflickr.com/900/620/bedroom,cozy,plant",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];
