/** Copy + option data for the Book-a-Demo wizard (from Figma DemoFlow frames). */

export const demoSteps = [
  { key: "company", label: "Company information" },
  { key: "operational", label: "Operational information" },
  { key: "schedule", label: "Schedule a call" },
] as const;

export const companyStep = {
  icon: "Building2",
  title: "Company information",
  subtitle: "Tell us a little about you so we can tailor the call.",
  fields: [
    { name: "company", label: "Company name", placeholder: "Acme Logistics" },
    { name: "contact", label: "Contact name", placeholder: "Jane Doe" },
    { name: "email", label: "Business email", placeholder: "jane@company.com", type: "email" },
    { name: "phone", label: "Phone Number", placeholder: "+971 *** *** ***", type: "tel" },
  ],
} as const;

export const operationalStep = {
  title: "Operational information",
  subtitle: "Help us understand your operation so the demo is relevant to you.",
  warehousesLabel: "How many warehouses do you operate?",
  warehouses: ["1-2", "3-5", "6-10", "10+"],
  challengesLabel: "What is your primary operational challenge?",
  challengesHint: "Select all that apply",
  challenges: [
    "Inventory visibility",
    "Reporting",
    "Warehouse operations",
    "Procurement tracking",
    "Supply chain monitoring",
    "Multiple disconnected systems",
  ],
  systemLabel: "Which system do you currently use?",
  systems: ["SAP", "Oracle", "Microsoft Dynamics"],
} as const;

export const scheduleStep = {
  title: "Schedule a call",
  subtitle: "Choose a 30-minute slot that works for you.",
  times: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
} as const;

export const confirmationStep = {
  eyebrow: "Confirmation",
  title: "Call scheduled!",
  body: "A confirmation was sent to your inbox.",
  addToCalendar: "Add to calendar",
  managerNote: "Account manager confirms in 2h",
  checklistTitle: "Preparation checklist",
  checklist: [
    "Have your warehouse list ready",
    "Invite key operations stakeholders",
    "Note your top 3 pain points",
  ],
  disclaimer: "Note: the call showcases the platform using sample / non-production data.",
  cta: "View demo results",
} as const;

export const resultsStep = {
  eyebrow: "Demo results",
  title: "Your demo results",
  subtitle: "Here's what NEXTAIQ can do for your operation, based on what you described.",
  metrics: [
    { icon: "TrendingUp", value: "+32%", label: "Projected inventory accuracy" },
    { icon: "Clock", value: "-18h", label: "Manual reporting saved / week" },
    { icon: "LayoutGrid", value: "1", label: "Unified platform" },
  ],
  focusTitle: "Focus areas we'll address",
  focus: [
    { title: "Warehouse operations", description: "Live warehouse activity & throughput monitoring" },
    { title: "Inventory visibility", description: "Real-time stock levels across every location" },
  ],
  cta: "Go to onboarding",
} as const;
