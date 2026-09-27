import logoAsset from "../assets/nes-logo.png";

export const site = {
  name: "NES Automation",
  tagline: "Innovation. Redefined.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/9993098845",
  email: "hello@nesautomation.com",
  address: "Radhika Palace Colony, Vijay Nagar, Indore, Madhya Pradesh, India, 452010.",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  logo: logoAsset,
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/brands", label: "Brands" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
