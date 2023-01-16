export interface Blog {
  title: string;
  image: string;
  brief: string;
  multipleContents: boolean;
  content: Content[];
  conclusion: string;
  authorName: string;
  authorEmail: string;
}

export interface Content {
  title: string;
  description: string;
}