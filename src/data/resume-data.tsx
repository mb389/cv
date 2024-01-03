import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

import { CoinbaseLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Michael Bushoy",
  initials: "MB",
  location: "Brooklyn, NY",
  locationLink: "https://www.google.com/maps/place/Brooklyn",
  about:
    "Software engineer & tech lead specializing in developing web applications with the user in mind",
  summary: "As a ...",
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
      description: "...",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "GraphQL", "Relay"],
  projects: [],
} as const;
