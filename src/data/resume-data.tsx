import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

import { CoinbaseLogo } from "@/images/logos";

type ResumeDataType = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about?: string;
  summary: string;
  avatarUrl?: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.ComponentType<{ className: string }>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges?: string[];
    title: string;
    logo?: string;
    start?: string;
    end?: string;
    description?: string;
    roles?: {
      title: string;
      description?: string | string[];
      start?: string;
      end?: string;
    }[];
  }[];
  skills: string[];
  focusAreas: string[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
    link: {
      href: string;
      text: string;
    };
  }[];
};

export const RESUME_DATA: ResumeDataType = {
  name: "Michael Bushoy",
  initials: "MB",
  location: "Brooklyn, NY",
  locationLink: "https://www.google.com/maps/place/Brooklyn",
  summary:
    "Software engineer & tech lead specializing in developing web applications with the user in mind",
  avatarUrl: "https://avatars.githubusercontent.com/u/12397314?v=4",
  personalWebsiteUrl: "https://michael.bushoy.com",
  contact: {
    email: "mbushoy@gmail.com",
    tel: "+16178693800",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mb389",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaelbushoy",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/mb389",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Cornell University",
      degree: "Bachelor's Degree in Industrial and Labor Relations",
      start: "2004",
      end: "2007",
    },
  ],
  work: [
    {
      company: "Coinbase",
      link: "https://www.coinbase.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: CoinbaseLogo,
      start: "2019",
      end: "2024",
      roles: [
        {
          title: "Developer Platform (fka Cloud), UI Lead",
          description: [
            "Led team of frontend engineers on creation of Coinbase`s external developer platform and onboarding of initial products, shipping support for recurring billing, organization & project management, API key management, and more.",
          ],
        },
        {
          title: "Protocols, UI Lead",
          description: [
            "First frontend hire on a new team making Coinbase`s first foray into building crypto protocols. Led work across Coinbase web & mobile apps as well as greenfield initiatives. Shut down Aug 2022 as part of company-wide cost cutting initiatives.",
          ],
        },
        {
          title: "Advanced Trading, Web Lead",
          description: [
            "Led the build-out of the Advanced Trading product, the successor to Coinbase Pro, to a successful public launch. It is now responsible for processing most of Coinbase`s $100bn+ annual consumer trading volume. ",
            "Acted as lead engineer, project manager, primary liaison with product/design/backend, and mentor to junior engineers.",
            "Made & documented key architectural decisions around data layer implementation, charting approach, and general library/stack selection and presented to org-wide engineering review.",
            "Built key pages/components such as the Price Chart, Order Form, and Orders Page.",
          ],
        },
        {
          title: "Coinbase Pro",
          description: [
            "Contributed to Pro web and mobile app development. Projects included adding multi-portfolio support, re-writing the transfer flow, and leading a dedicated sprint to optimize React Native mobile app performance.",
          ],
        },
      ],
    },
    {
      company: "Fundera (acq. by NerdWallet)",
      link: "https://www.fundera.com",
      badges: ["New York, NY"],
      title: "Software Engineer",
      start: "2018",
      end: "2019",
      description:
        "As part of Fundera`s Conversion team, focused on enhancing user onboarding & registration, improving lender-partner API integrations, and maintaining Treehouse, the internal admin & CRM platform.",
    },
    {
      company: "Domio",
      link: "https://www.crunchbase.com/organization/domio-inc",
      badges: ["New York, NY"],
      title: "Software Engineer",
      start: "2017",
      end: "2018",
      description:
        "Built out Domio`s Booking Platform, a web application that allowed users to search properties, create & manage reservations, and make payments. Integrated with Airbnb, Guesty, and Stripe.",
    },
    {
      company: "IrisVR (acq. by Autodesk)",
      link: "https://www.irisvr.com",
      badges: ["New York, NY"],
      title: "Software Engineer",
      start: "2016",
      end: "2017",
      description:
        "Maintained and enhanced IrisVR`s web application and related services, with a focus on the Scope Library, a tool allowing users to upload, manage, & preview panoramic images. Led development of account settings section, payment flow, & multi-format support for panoramic image uploading.      ",
    },
    {
      company: "JPMorgan",
      link: "https://www.jpmorgan.com",
      badges: ["New York, NY"],
      title: "Vice President",
      roles: [
        {
          title: "Market Risk Management",
          start: "2009",
          end: "2015",
        },
        {
          title: "Rotational Analyst, Internal Consulting Services",
          start: "2007",
          end: "2009",
        },
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Webpack",
    "Node.js",
    "GraphQL",
    "Relay",
    "Ruby",
    "Go",
    "Python",
    "Datadog",
  ],
  focusAreas: [
    "UI development",
    "frontend architecture",
    "performance optimization",
    "data layer & state management design",
    "real-time data & interaction",
    "PWAs (progressive web apps)",
  ],
  projects: [],
} as const;
