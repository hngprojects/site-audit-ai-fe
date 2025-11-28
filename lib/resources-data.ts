export interface ResourcePost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  fullContent: {
    subtitle: string;
    intro: string;
    sections: Array<{
      heading: string;
      content: string | string[];
    }>;
  };
}

export const resourcePosts: ResourcePost[] = [];
