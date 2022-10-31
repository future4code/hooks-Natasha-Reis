import { POST_TYPES } from "./enum-post";

export type post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
  authorId: string;
};
