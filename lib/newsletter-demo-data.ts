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

export const resourcePosts: ResourcePost[] = [
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
  {
    id: 5,
    title: "The Future of AI in Website Auditing",
    excerpt:
      "Artificial intelligence is revolutionizing how we analyze and improve websites. Discover the latest trends and what they mean for your online presence...",
    image: "/assets/images/blogs/blog1.png",
    date: "Oct 28",
    readTime: "7 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "AI-Powered Website Analysis",
      intro:
        "AI is transforming website auditing from a manual process to an automated, intelligent system.",
      sections: [
        {
          heading: "AI-Driven Insights",
          content:
            "Machine learning algorithms can now detect issues that human auditors might miss.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Mobile-First Design: Why It Matters Now More Than Ever",
    excerpt:
      "With mobile traffic surpassing desktop, your website's mobile experience is crucial for success...",
    image: "/assets/images/blogs/blog2.png",
    date: "Oct 25",
    readTime: "4 mins read",
    category: "News",
    fullContent: {
      subtitle: "Mobile Optimization Strategies",
      intro: "Mobile devices now account for over 60% of all web traffic.",
      sections: [
        {
          heading: "Mobile-First Approach",
          content: "Design for mobile first, then enhance for larger screens.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "SEO Best Practices for 2024",
    excerpt:
      "Stay ahead of the curve with these proven SEO strategies that actually work...",
    image: "/assets/images/blogs/blog3.png",
    date: "Oct 20",
    readTime: "6 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Search Engine Optimization Guide",
      intro: "SEO continues to evolve, but some fundamentals remain constant.",
      sections: [
        {
          heading: "Core SEO Principles",
          content: [
            "Quality content creation",
            "Technical optimization",
            "User experience focus",
          ],
        },
      ],
    },
  },
  {
    id: 8,
    title: "The Rise of Voice Search Optimization",
    excerpt:
      "Voice assistants are changing how people search online. Is your website ready?...",
    image: "/assets/images/blogs/blog4.png",
    date: "Oct 15",
    readTime: "5 mins read",
    category: "Ads",
    fullContent: {
      subtitle: "Voice Search Trends",
      intro:
        "Voice search is becoming increasingly popular with smart speakers and mobile assistants.",
      sections: [
        {
          heading: "Optimizing for Voice",
          content:
            "Natural language processing and conversational content are key.",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Website Speed: The Hidden Conversion Killer",
    excerpt:
      "Slow loading times are costing you customers. Here's how to fix it...",
    image: "/assets/images/blogs/blog1.png",
    date: "Oct 10",
    readTime: "4 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Performance Optimization",
      intro:
        "Website speed directly impacts user experience and conversion rates.",
      sections: [
        {
          heading: "Speed Optimization Tips",
          content: ["Optimize images", "Minify code", "Use caching"],
        },
      ],
    },
  },
  {
    id: 10,
    title: "Building an Effective Content Marketing Strategy",
    excerpt:
      "Content is king, but only if it's part of a strategic approach...",
    image: "/assets/images/blogs/blog2.png",
    date: "Oct 5",
    readTime: "8 mins read",
    category: "News",
    fullContent: {
      subtitle: "Content Strategy Fundamentals",
      intro: "Successful content marketing requires planning and consistency.",
      sections: [
        {
          heading: "Content Planning",
          content: "Define your audience, goals, and content pillars.",
        },
      ],
    },
  },
  {
    id: 11,
    title: "The Psychology of Web Design",
    excerpt:
      "Understanding user behavior can dramatically improve your website's effectiveness...",
    image: "/assets/images/blogs/blog3.png",
    date: "Sep 30",
    readTime: "6 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "User Experience Psychology",
      intro:
        "Web design is as much about psychology as it is about aesthetics.",
      sections: [
        {
          heading: "Cognitive Principles",
          content: ["Visual hierarchy", "Cognitive load", "Emotional design"],
        },
      ],
    },
  },
  {
    id: 12,
    title: "E-commerce Website Best Practices",
    excerpt:
      "Convert more visitors into customers with these proven e-commerce strategies...",
    image: "/assets/images/blogs/blog4.png",
    date: "Sep 25",
    readTime: "7 mins read",
    category: "Ads",
    fullContent: {
      subtitle: "Online Store Optimization",
      intro:
        "E-commerce success depends on seamless user experience and trust.",
      sections: [
        {
          heading: "Conversion Optimization",
          content:
            "Streamline the purchase process and build customer confidence.",
        },
      ],
    },
  },
  {
    id: 13,
    title: "The Impact of Social Proof on Website Credibility",
    excerpt:
      "Testimonials, reviews, and social signals can make or break your online presence...",
    image: "/assets/images/blogs/blog1.png",
    date: "Sep 20",
    readTime: "5 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Building Trust Online",
      intro: "Social proof is one of the most powerful psychological triggers.",
      sections: [
        {
          heading: "Types of Social Proof",
          content: [
            "Customer testimonials",
            "Expert endorsements",
            "User-generated content",
          ],
        },
      ],
    },
  },
  {
    id: 14,
    title: "Accessibility: Making Your Website Inclusive",
    excerpt:
      "Web accessibility isn't just good practice—it's becoming a legal requirement...",
    image: "/assets/images/blogs/blog2.png",
    date: "Sep 15",
    readTime: "6 mins read",
    category: "News",
    fullContent: {
      subtitle: "Inclusive Web Design",
      intro:
        "Accessible websites serve everyone, including people with disabilities.",
      sections: [
        {
          heading: "Accessibility Standards",
          content: "WCAG guidelines ensure your site is usable by all.",
        },
      ],
    },
  },
  {
    id: 15,
    title: "The Power of A/B Testing in Web Design",
    excerpt:
      "Data-driven decisions can significantly improve your website's performance...",
    image: "/assets/images/blogs/blog3.png",
    date: "Sep 10",
    readTime: "5 mins read",
    category: "Articles",
    fullContent: {
      subtitle: "Conversion Rate Optimization",
      intro: "A/B testing helps you make informed design decisions.",
      sections: [
        {
          heading: "Testing Methodology",
          content: "Systematically test variations to find what works best.",
        },
      ],
    },
  },
];
