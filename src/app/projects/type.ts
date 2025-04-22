export type Project = {
    url: string;
    color: string;
    title: string;
    category:string;
    thumbnail: {
      id: number;
      path: string;
      alt: string;
      width: number;
      height: number;
    };
    tags: {
      id: number;
      name: string;
      slug: string;
    }[];
  };
  
export type Category = {
    id: number;
    name: string;
    slug: string;
    color: string;
};