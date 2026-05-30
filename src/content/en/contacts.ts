import type { ContactsModel } from "../types";

export const contacts: ContactsModel = {
  title: "Get in touch",
  description:
    "Feel free to contact me for frontend engineering roles, mentoring, collaboration, or professional opportunities.",
  items: [
    {
      type: "email",
      label: "Email",
      value: "no1dor.job@gmail.com",
      href: "mailto:no1dor.job@gmail.com",
      visible: true,
      external: false,
      ariaLabel: "Send email to Yuri Semenenko",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/yuri-semenenko",
      href: "https://www.linkedin.com/in/yuri-semenenko/",
      visible: true,
      external: true,
      ariaLabel: "Open Yuri Semenenko LinkedIn profile",
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/yuri-semenenko",
      href: "https://github.com/yuri-semenenko",
      visible: true,
      external: true,
      ariaLabel: "Open Yuri Semenenko GitHub profile",
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "@frontdev85",
      href: "https://t.me/frontdev85",
      visible: true,
      external: true,
      ariaLabel: "Contact Yuri Semenenko on Telegram",
    },
    {
      type: "location",
      label: "Location",
      value: "Krakow, Poland",
      visible: true,
      external: false,
      ariaLabel: "Yuri Semenenko location",
    },
  ],
};
