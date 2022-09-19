export type Post = {
  id: string;
  title: string;
  body?: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
