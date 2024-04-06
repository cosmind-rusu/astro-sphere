import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "PROXIMORP 🌴",
  DESCRIPTION: "Bienvenido a PROXIMORP🌴",
  AUTHOR: "Cosmind-rusu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Nosotros",
  DESCRIPTION: "Conocenos y unete a nosotros.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Updates",
  DESCRIPTION: "Aqui se publicaran todos los cambios nuevos del servidor!",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Normativas",
  DESCRIPTION: "Todas las normativas de PROXIMORP estaran aqui.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Filtra y busca lo que necesitas!",
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
    TEXT: "Updates", 
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
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "cosmind-rusu",
    HREF: "https://github.com/cosmind-rusu"
  },
]

