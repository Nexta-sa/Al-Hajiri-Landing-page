/**
 * Single source of truth for all landing-page copy, extracted verbatim from the
 * Figma design (Nexta AI Logistics Landing Page). Keeping copy here keeps the
 * section components presentational and DRY.
 */

export const brand = {
  name: "NEXTAIQ",
  tagline: "AI-powered logistics platform",
} as const;

export const nav = {
  links: [
    { label: "Home", href: "#home" },
    { label: "Challenges", href: "#challenges" },
    { label: "AI", href: "#ai" },
  ],
  cta: { label: "Book Demo", href: "#demo" },
} as const;

export const hero = {
  badge: "Nexta Logistics Intelligence",
  titleLead: "Gain Full Visibility Across Your ",
  titleAccent: "Logistics Operations.",
  subtitle:
    "Nexta Logistics Intelligence connects operational data from multiple systems into one platform giving you better visibility across inventory, warehouse activities, procurement, fulfilment, and supply chain performance.",
  primaryCta: "Book a Free Demo",
  secondaryCta: "Explore the platform",
  checks: ["One unified platform", "Real-time visibility", "AI-powered insights"],
} as const;

export const dashboard = {
  nav: ["Overview", "Inventory", "Warehouses", "Procurement", "Fulfilment"],
  stats: [
    { value: "99.2%", label: "Inventory accuracy" },
    { value: "96%", label: "On-time fulfilment" },
    { value: "2.4k", label: "Active shipments" },
  ],
  badge: "↑ 34% efficiency",
  chartCaption: "Route optimized",
  // Relative bar heights (%) for the mock analytics chart
  bars: [42, 58, 47, 65, 55, 72, 63, 80, 70, 88, 76, 94],
} as const;

export const logoStrip = {
  heading: "Powering the world's fastest growing companies",
  logos: ["Figma", "Stripe", "Linear", "Notion", "Dropbox", "Square", "Mailchimp", "HubSpot"],
} as const;

export const challenges = {
  eyebrow: "Operational Challenges",
  titleLead: "Are You Facing Any of ",
  titleAccent: "These Challenges?",
  subtitle:
    "Logistics teams lose hours and visibility when operations are fragmented across disconnected systems.",
  items: [
    { icon: "EyeOff", title: "Limited visibility across warehouses" },
    { icon: "Network", title: "Operational data spread across multiple systems" },
    { icon: "FileClock", title: "Time-consuming manual reporting" },
    { icon: "PackageX", title: "Inventory shortages identified too late" },
    { icon: "GaugeCircle", title: "Difficulty monitoring KPIs" },
    { icon: "Hourglass", title: "Delayed operational decision-making" },
  ],
} as const;

export const aiCapabilities = {
  eyebrow: "AI & Automation",
  titleLead: "AI Powered ",
  titleAccent: "Operational Intelligence",
  subtitle:
    "AI works quietly in the background to strengthen visibility — supporting your team, not replacing it.",
  items: [
    {
      icon: "ScanSearch",
      title: "Detect operational anomalies",
      description: "Surface unusual patterns in your operations the moment they appear.",
    },
    {
      icon: "TriangleAlert",
      title: "Monitor shortage risks",
      description: "Get early warnings on inventory shortages before they impact fulfilment.",
    },
    {
      icon: "FileBarChart",
      title: "Generate reports automatically",
      description: "Replace manual reporting with reports that build themselves on schedule.",
    },
    {
      icon: "Lightbulb",
      title: "Support decision-making",
      description: "Turn operational data into clear, actionable recommendations.",
    },
    {
      icon: "TrendingUp",
      title: "Identify operational trends",
      description: "Spot emerging trends across inventory, fulfilment, and procurement.",
    },
    {
      icon: "Gauge",
      title: "Improve reporting efficiency",
      description: "Cut hours of manual analysis and keep your team focused on operations.",
    },
  ],
} as const;

export const promo = {
  eyebrow: "Winter Deal Days",
  titleLead: "Unlock Exclusive Savings on ",
  titleAccent: "AI Growing Solutions",
  subtitle:
    "All-in-one platform that simplifies operations, expense tracking, and financial intelligence for modern teams.",
  cta: "Get Started",
} as const;

export const newsletter = {
  title: "Stay connected with us",
  subtitle: "Get product updates, customer stories, and AI insights.",
  placeholder: "Enter your email",
  cta: "Subscribe",
} as const;

export const footer = {
  description:
    "AI-powered logistics platform that helps modern teams scale operations with confidence.",
  columns: [
    {
      title: "Product",
      links: ["Platform", "Integrations", "Changelog", "Roadmap"],
    },
    {
      title: "Company",
      links: ["About", "Customers", "Careers", "Blog", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Case Studies", "API Reference", "Status"],
    },
  ],
  legal: ["Terms of Service", "Privacy Policy", "Cookies"],
  copyright: "© 2026 NEXTAIQ. All Rights Reserved.",
  socials: ["Twitter", "Linkedin", "Github", "Youtube"],
} as const;
