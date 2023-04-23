import jacob from "./images/jacob.png";
import daniel from "./images/daniel.png";
import ryan from "./images/ryan.png";

interface TeamProps {
  id: number;
  name: string;
  profession: string;
  profile: string;
  twitter: string;
}

export interface PlanProps {
  id: number;
  format: string;
  description: string;
  amount?: number;
  per_month?: number;
  sub_month: number;
  content_format: string;
  features: string[];
  index?: number;
}

export const team: TeamProps[] = [
  {
    id: 1,
    name: "Jacob Mark",
    profession: "CEO & Design",
    profile: jacob,
    twitter: "bryan_6243",
  },
  {
    id: 2,
    name: "Daniel",
    profession: "CTO & Development",
    profile: daniel,
    twitter: "bryan_6243",
  },
  {
    id: 3,
    name: "Ryan Trump",
    profession: "COO & Sales",
    profile: ryan,
    twitter: "bryan_6243",
  },
];

export const plans: PlanProps[] = [
  {
    id: 1,
    format: "Starter",
    description: "Perfect for tying out Wavium",
    sub_month: 500,
    content_format: "Key features",
    features: ["Automatic updating home page", "Unlimited sources + posts"],
  },

  {
    id: 2,
    format: "Basic",
    description: "Build your online home",
    amount: 14,
    per_month: 19,
    sub_month: 2_000,
    content_format: "Everything in starter, plus",
    features: ["Remove Wavium branding", "Embed Wavium on your own domain"],
  },
  {
    id: 3,
    format: "Complete",
    description: "Enhanced engagement",
    amount: 29,
    per_month: 34,
    sub_month: 10_000,
    content_format: "Everything in basic, plus ",
    features: [
      "Collect text massage subscribers",
      "Share posts over text massage",
    ],
  },
];
