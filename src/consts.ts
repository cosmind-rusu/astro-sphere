import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "PROXIMORP 🌴",
  DESCRIPTION: "Bienvenido a PROXIMORP🌴",
  AUTHOR: "Cosmind-rusu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Normativas",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Nosotros", 
    HREF: "/work", 
  },
  { 
    TEXT: "Novedades", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Normativas", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contacto@proximorp.com",
    HREF: "mailto:contacto@proximorp.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "cosmind-rusu",
    HREF: "https://github.com/cosmind-rusu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "PROXIMORP",
    HREF: "https://www.linkedin.com/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "PROXIMORP",
    HREF: "https://twitter.com/",
  },
]

