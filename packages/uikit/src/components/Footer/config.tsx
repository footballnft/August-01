import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://contact-form3.vercel.app/",
        isHighlighted: true,
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "—",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/amehswap",
  },
  {
    label: "",
    items: [
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
      {
        label: "",
        href: "",
      },
    ],
  },
  {
    label: "",
    href: "",
  },
  {
    label: "",
    href: "",
  },
  {
    label: "",
    href: "",
  },
  {
    label: "",
    href: "",
  },
  {
    label: "",
    href: "",
  },
    ]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
