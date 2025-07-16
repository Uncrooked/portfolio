export type Project = {
    url: string;
    color: string;
    title: string;
    category:string;
    thumbnail: {
      path: string;
      alt: string;
      width: number;
      height: number;
    };
    tags: {
      name: string;
      slug: string;
    }[];
  };
  
export type Category = {
    name: string;
    slug: string;
    color: string;
};