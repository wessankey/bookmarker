export type TTag = {
  id: string;
  value: string;
  color: string;
};

export type TBookmark = {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: any;
  collection?: string;
  tags: TTag[];
};
