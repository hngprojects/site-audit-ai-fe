export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Why Your Website Isn't Working the Way You Want — And How AI Can Fix It",
    excerpt:
      "Running a website shouldn't feel like guesswork. But for most people, it does. Maybe the site looks fine on your phone, but search engines ignore it...",
    image: "/assets/images/blogs/blog1.png",
    date: "Nov 21",
    readTime: "5 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Smarter Website Audits for Everyday Business Owners",
      intro:
        "Running a website shouldn't feel like guesswork. But for most people, it does. Maybe the site looks fine on your phone, but search engines ignore it. Maybe the images feel off, or the text doesn't sound right. And the moment you try to fix one thing, something else breaks.",
      sections: [
        {
          heading:
            "Why your website isn't working the way you want — And how AI can fix it",
          content:
            "Running a website shouldn't feel like guesswork. But for most people, it does. Maybe the site looks fine on your phone, but search engines ignore it. Maybe visitors don't stay long. Maybe the images feel off, or the text doesn't sound right. And the moment you try to fix one thing, something else breaks.\n\nHere's the thing. You shouldn't need to be a developer or a designer to understand what's holding your site back. That's exactly why we built this app.",
        },
        {
          heading: "A Website Audit That Actually Makes Sense",
          content: [
            "You open the app",
            "You enter your link",
            "AI scans your website in seconds and shows you where things can improve",
          ],
        },
        {
          heading: "Just clear insights on things like:",
          content: [
            "How readable your text is",
            "Whether your layout makes sense",
            "Where accessibility gaps might hurt visitor experience",
            "How your typography feels to real users",
          ],
        },
        {
          heading:
            "And If You Want Extra Help, You Can Request Expert Help Right Inside the App",
          content:
            "Not everyone wants to fix things themselves. If the audit tells you a designer, developer, or SEO specialist could help, you'll see recommended experts right on your results page.",
        },
        {
          heading: "Why This Matters",
          content:
            "Most small business owners and creators don't have the time or technical background to figure out why their website isn't performing. The app removes that barrier. You get clarity, not confusion.\nIt empowers you to understand what's happening behind the scenes and take the right next step — with or without help.",
        },
        {
          heading: "Give Your Website the Attention It Deserves",
          content:
            "The truth is, you've already put in the effort to build your site. Now you just need clear direction on how to make it perform at its best. This app gives you that clarity in the simplest way possible.\n\nReady to see what your site can really do?\nPaste your link, tap run, and let AI show you what's next.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "What Makes Visitors Trust a Website Instantly",
    excerpt:
      "Trust isn't something people think about consciously when they open a website. It's a feeling they get in the first three to five seconds. If the site looks off, loads slowly, or just feels confusing...",
    image: "/assets/images/blogs/blog2.png",
    date: "Nov 15",
    readTime: "4 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Building Trust in the First Few Seconds",
      intro:
        "Trust isn't something people think about consciously when they open a website. It's a feeling they get in the first three to five seconds.",
      sections: [
        {
          heading: "The First Impression",
          content:
            "If the site looks off, loads slowly, or just feels confusing, visitors leave. No second chances.",
        },
        {
          heading: "What Builds Trust",
          content: [
            "Professional design that matches your industry",
            "Fast loading times",
            "Clear, honest messaging",
            "Easy navigation",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "How a Strong Website Drives Sales for Small Businesses",
    excerpt:
      "If you're running a small business, your website is more than a digital brochure. It's the place people go to decide if they should trust you...",
    image: "/assets/images/blogs/blog3.png",
    date: "Nov 9",
    readTime: "6 mins read",
    category: "News",
    fullContent: {
      subtitle: "Your Website is Your Best Sales Tool",
      intro:
        "If you're running a small business, your website is more than a digital brochure. It's the place people go to decide if they should trust you.",
      sections: [
        {
          heading: "More Than Marketing",
          content: "Your website is where trust is built and lost in seconds.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Why Website Maintenance is a Long-Term Investment",
    excerpt:
      "Most people think of a website as something you build once and then forget. You launch it, check that the buttons work, post a few updates, and move on. But here's the thing...",
    image: "/assets/images/blogs/blog4.png",
    date: "Nov 1",
    readTime: "5 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Keep Your Site Fresh and Running Strong",
      intro:
        "Most people think of a website as something you build once and then forget. You launch it, check that the buttons work, post a few updates, and move on. But here's the thing...",
      sections: [
        {
          heading: "Why Maintenance Matters",
          content:
            "Regular updates keep your site secure, fast, and working for your visitors.",
        },
      ],
    },
  },
];
