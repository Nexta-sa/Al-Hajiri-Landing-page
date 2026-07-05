/** Content for the Onboarding tracker page (Figma node 26:3672). */

export type StatusTone = "connected" | "received" | "partial" | "pending" | "installed" | "scheduled";

export const onboarding = {
  ref: "APP-2048",
  status: "In progress",
  company: "Acme Logistics",
  meta: "3 warehouses · SAP S/4HANA integration",
  percent: 29,
  stages: [
    { index: 1, title: "Data Collection & Integration", state: "Completed" },
    { index: 2, title: "Device Installation", state: "In progress" },
    { index: 3, title: "Platform Activation", state: "Pending" },
  ],
  stage1: {
    title: "Stage 1 · Data Collection & Integration",
    state: "Completed",
    rows: [
      { label: "ERP access credentials", status: "Connected", tone: "connected" },
      { label: "Database access", status: "Connected", tone: "connected" },
      { label: "API documentation", status: "Received", tone: "received" },
      { label: "Warehouse list", status: "Received", tone: "received" },
      { label: "Product catalog", status: "Received", tone: "received" },
      { label: "Historical inventory data", status: "Partial", tone: "partial" },
      { label: "Technical team contact", status: "Received", tone: "received" },
    ] as { label: string; status: string; tone: StatusTone }[],
  },
  stage2: {
    title: "Stage 2 · Device Installation",
    state: "In progress",
    sites: [
      { name: "Riyadh — Central DC", status: "Installed", tone: "installed", date: null },
      { name: "Jeddah — Port Hub", status: "Scheduled", tone: "scheduled", date: "Jun 22" },
      { name: "Dammam — East DC", status: "Pending", tone: "pending", date: null },
    ] as { name: string; status: string; tone: StatusTone; date: string | null }[],
    checklistTitle: "Site readiness checklist",
    checklist: [
      { label: "Hardware delivery confirmed (Dammam)", done: true },
      { label: "Site access approvals (Dammam)", done: false },
      { label: "IT network access for install team", done: false },
    ],
  },
  stage3: {
    title: "Stage 3 · Platform Activation",
    state: "Pending",
    rows: [
      { label: "User account creation", status: "Not yet issued" },
      { label: "Training session", status: "To be scheduled" },
      { label: "Login credentials delivery", status: "Pending" },
      { label: "Go-live sign-off", status: "Pending" },
    ],
  },
  required: {
    title: "Required from you",
    items: [
      "Approve site access for Dammam — East DC",
      "Grant IT network access for installation team",
      "Upload remaining historical inventory files",
    ],
  },
  upload: {
    title: "Upload center",
    prompt: "Drop required documents",
    hint: "CSV, Excel, PDF — max 50 MB",
    files: ["warehouse-list.xlsx", "product-catalog.csv"],
  },
  manager: {
    title: "Your success manager",
    name: "Sara Khalid",
    role: "Customer Success Manager",
    email: "sara@nextaiq.com",
    phone: "+966 11 234 5678",
    cta: "Message team",
  },
  notifications: {
    title: "Notifications",
    items: [
      { text: "Database connection verified successfully.", time: "2h ago", tone: "success" },
      { text: "Installation scheduled for Jeddah — Port Hub.", time: "1d ago", tone: "info" },
      {
        text: "Historical inventory data partially received — 3 files missing.",
        time: "2d ago",
        tone: "warning",
      },
    ] as { text: string; time: string; tone: "success" | "info" | "warning" }[],
  },
  actions: ["Message team", "Upload required files", "Download checklist"],
} as const;
