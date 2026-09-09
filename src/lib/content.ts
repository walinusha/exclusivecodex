export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/process", label: "Process" },
  { href: "/industries", label: "Industries" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

export const positioning = {
  kicker: "AI-powered software & automation",
  statement:
    "We build intelligent business systems, SaaS platforms, AI agents, web and mobile applications, APIs, and software products.",
  flagship:
    "AI-powered business management software is the flagship. Custom cloud and web systems keep delivery moving. One core architecture, many vertical products.",
};

export const divisions = [
  {
    no: "01",
    title: "SaaS Products",
    href: "/services/saas-applications",
    summary: "Subscription products that solve one business problem and charge monthly or yearly.",
    points: [
      "BusinessOS — CRM, HRM, projects, sales, inventory, support, appointments",
      "MarketingOS — content, campaigns, SEO / AEO / GEO, analytics",
      "TravelOS — hotels, tours, safari, transport, DMC, guest CRM",
    ],
  },
  {
    no: "02",
    title: "AI & Automation",
    href: "/services/ai-agents",
    summary: "Agents and workflows that run sales, support, marketing, and operations — not a chatbot glued on.",
    points: [
      "Sales agent — enquire, qualify, quote, follow up, update CRM",
      "Support agent — web, WhatsApp, email, knowledge, handover",
      "Marketing and operations agents — content, documents, tasks, reports",
    ],
  },
  {
    no: "03",
    title: "Cloud Applications",
    href: "/services/cloud-applications",
    summary: "Custom platforms when a company needs a system: portals, booking, dashboards, B2B, internal ops.",
    points: [
      "Customer, employee, and partner portals",
      "Booking, logistics, education, and membership systems",
      "Shipped on a reusable core, not a blank repo every time",
    ],
  },
  {
    no: "04",
    title: "Web & Mobile",
    href: "/services/web-applications",
    summary: "Web, Android, iOS, and desktop as one platform — an extension of the cloud system, not a standalone app.",
    points: [
      "SaaS ↔ web app ↔ iOS ↔ Android ↔ admin",
      "Complete platforms instead of one-off apps",
      "Desktop where the work still lives on a machine",
    ],
  },
  {
    no: "05",
    title: "Plugins & Integrations",
    href: "/services/plugins-extensions",
    summary: "Small products that do one job well — and APIs other businesses can subscribe to.",
    points: [
      "WordPress, WooCommerce, Shopify, Chrome",
      "Booking, WhatsApp, payments, SEO, reviews, CRM",
      "AI, travel, booking, notification, and document APIs",
    ],
  },
] as const;

export const productPortfolio = [
  {
    name: "BusinessOS",
    line: "CRM / HR / projects / sales / operations",
    href: "/services/internal-systems",
  },
  {
    name: "MarketingOS",
    line: "SEO / AEO / GEO / content / social / ads",
    href: "/services/ai-applications",
  },
  {
    name: "TravelOS",
    line: "Hotels / tours / safaris / transport / DMC",
    href: "/industries/travel",
  },
  {
    name: "AI Workforce",
    line: "AI employees, agents, and automation",
    href: "/services/ai-agents",
  },
  {
    name: "Developer Platform",
    line: "APIs, plugins, and SDKs",
    href: "/services/developer-tools",
  },
  {
    name: "Custom Solutions",
    line: "Web / mobile / desktop / cloud",
    href: "/services",
  },
] as const;

export const businessLayers = [
  {
    no: "01",
    title: "Services",
    body: "Custom software, web and mobile, AI automation, and integrations — the work that funds the studio.",
  },
  {
    no: "02",
    title: "Reusable technology",
    body: "Every engagement feeds a shared core: auth, CRM, booking, payments, reporting, agents, notifications, workflows, analytics.",
  },
  {
    no: "03",
    title: "SaaS products",
    body: "Those modules become products sold again and again. One development effort. Many customers.",
  },
] as const;

export const platformCore = [
  "Authentication",
  "Organizations",
  "Users & roles",
  "Permissions",
  "Dashboard",
  "Notifications",
  "Payments",
  "Reports",
  "Audit logs",
  "API",
  "AI layer",
];

export const travelOsPlus = {
  title: "TravelOS, including Safari Management",
  body: "Hotels, safari companies, and DMCs subscribe and run bookings, vehicles, drivers, guides, guests, payments, pickups, safaris, reviews, and reports — a product, not a one-off website.",
};

export const groupsMeta = [
  { id: "products", title: "Products we ship", kicker: "Build" },
  { id: "intelligence", title: "Intelligence layer", kicker: "Think" },
  { id: "platforms", title: "Platforms & products", kicker: "Multiply" },
  { id: "partnership", title: "Operate with us", kicker: "Beyond" },
] as const;

export type Service = {
  slug: string;
  name: string;
  groupId: (typeof groupsMeta)[number]["id"];
  fit: number;
  summary: string;
  overview: string;
  whoFor: string[];
  deliverables: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "saas-applications",
    name: "SaaS Applications",
    groupId: "products",
    fit: 5,
    summary: "Subscription products with billing, tenancy, and room to grow.",
    overview:
      "We design and ship multi-tenant SaaS from the first paying customer to a product other teams can run. That means tenancy, roles, billing, usage metering, admin tooling, and an upgrade path that does not require a rewrite when you add the second region or the hundredth account.",
    whoFor: [
      "Founders packaging an internal workflow as a product",
      "Companies replacing spreadsheets with a billed platform",
      "Teams launching a new line of business on subscription",
    ],
    deliverables: [
      "Product architecture and tenancy model",
      "Web app, admin console, and customer onboarding",
      "Subscriptions, plans, invoicing, and usage limits",
      "Roles, audit trails, and workspace settings",
    ],
    outcomes: [
      "A product you can sell, not a prototype you babysit",
      "Clear upgrade paths as customers and regions grow",
      "Operations that run without a developer in every ticket",
    ],
  },
  {
    slug: "cloud-applications",
    name: "Cloud Applications",
    groupId: "products",
    fit: 5,
    summary: "Always-on systems hosted for speed, security, and scale.",
    overview:
      "Cloud applications at ExclusiveCodeX are systems that stay available, observable, and boring in production. We host, isolate, and scale the workload so your team works on the product, not on servers that only one person understands.",
    whoFor: [
      "Businesses moving off on-prem or fragile shared hosting",
      "Products that must stay up during peak booking or payroll",
      "Teams that need environments for staging, demo, and live",
    ],
    deliverables: [
      "Cloud architecture and environment strategy",
      "Secure hosting, identity, and secrets handling",
      "Autoscaling, backups, and health monitoring",
      "CI/CD so releases are repeatable",
    ],
    outcomes: [
      "Uptime you can explain to a customer",
      "A path from staging to production without heroics",
      "Cost that tracks usage instead of guesswork",
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    groupId: "products",
    fit: 5,
    summary: "Portals, dashboards, and booking experiences people actually use.",
    overview:
      "Custom web applications are the operational surface of a company: client portals, staff dashboards, booking, reporting, and the workflows in between. We build them fast, accessible, and specific to how your people already work — then layer AI where it removes real steps.",
    whoFor: [
      "Operators drowning in email and spreadsheet handoffs",
      "Businesses that need a branded portal for clients or partners",
      "Teams replacing a tangle of no-code tools",
    ],
    deliverables: [
      "UX flows for staff, customers, or both",
      "Responsive web app with roles and permissions",
      "Dashboards, booking, forms, and document flows",
      "Integrations to the systems you already pay for",
    ],
    outcomes: [
      "Fewer tools, fewer copy-paste errors",
      "A surface your team opens every morning",
      "A foundation you can extend without starting over",
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    groupId: "products",
    fit: 4,
    summary: "Android and iOS apps for business operations and consumer products.",
    overview:
      "We build mobile apps when the work happens away from a desk: field staff, guests, drivers, students, shoppers. Android and iOS can share a product brain in the cloud while the app stays native enough to feel instant, reliable, and worthy of a home-screen icon.",
    whoFor: [
      "Businesses with staff or customers on the move",
      "Consumer products that need a durable mobile presence",
      "SaaS teams adding a companion app to the web product",
    ],
    deliverables: [
      "iOS and Android apps on a shared backend",
      "Auth, notifications, offline-tolerant flows",
      "Store listing support and release cadence",
      "Admin tools to manage users and content",
    ],
    outcomes: [
      "A mobile channel that does more than display a website",
      "Push and on-the-go workflows that actually complete",
      "One product model across phone and web",
    ],
  },
  {
    slug: "apple-apps",
    name: "Apple Apps",
    groupId: "products",
    fit: 3,
    summary: "Native iPhone, iPad, and macOS software with craft in the details.",
    overview:
      "When the audience lives in Apple’s world, we build for it properly: iPhone, iPad, and macOS with attention to layout, keyboard, trackpad, and the way those devices share data. This is a focused offering — we take it when native Apple quality is part of the product promise.",
    whoFor: [
      "Brands whose customers are primarily on iPhone and Mac",
      "Internal tools for teams standardized on Apple hardware",
      "Products that need iPad or macOS as a first-class surface",
    ],
    deliverables: [
      "Native iOS, iPadOS, or macOS application",
      "Human Interface-aware layout and navigation",
      "iCloud, Keychain, and device-capability use where it helps",
      "App Store and TestFlight delivery",
    ],
    outcomes: [
      "Software that feels at home on Apple devices",
      "Fewer compromises than a lowest-common-denominator app",
      "A polished store presence when you need one",
    ],
  },
  {
    slug: "desktop-apps",
    name: "Desktop Apps",
    groupId: "products",
    fit: 3,
    summary: "Windows and macOS tools for teams that live on the desktop.",
    overview:
      "Some work still belongs on a desktop: dense data, devices, printers, long sessions, offline sites. We build Windows and macOS applications for operators who will not do that job in a browser tab — with installers, updates, and a backend when the desktop needs the cloud.",
    whoFor: [
      "Operations teams on factory, clinic, or back-office PCs",
      "Products that talk to local hardware or files",
      "Companies that need Windows and Mac from one codebase where it fits",
    ],
    deliverables: [
      "Windows and/or macOS application",
      "Auto-update, packaging, and signing",
      "Local data plus optional cloud sync",
      "Role-based features for desk-bound workflows",
    ],
    outcomes: [
      "Software that survives a flaky network",
      "Faster paths through dense, all-day work",
      "A supported install instead of a fragile exe on a share",
    ],
  },
  {
    slug: "ai-applications",
    name: "AI Applications",
    groupId: "intelligence",
    fit: 5,
    summary: "Assistants, document intelligence, and model-powered products.",
    overview:
      "AI applications are products where models do the work: reading documents, drafting, classifying, answering, extracting. We design the interface, the retrieval, the guardrails, and the human override so the model is useful on Tuesday afternoon — not only in a demo.",
    whoFor: [
      "Teams buried in PDFs, tickets, or unstructured files",
      "Products that should feel intelligent, not like a chatbot glued on",
      "Operators who need an assistant trained on their own material",
    ],
    deliverables: [
      "Use-case design and evaluation criteria",
      "RAG / document pipelines and prompt systems",
      "Chat, extract, or generate surfaces in your product",
      "Logging, feedback, and safe fallbacks",
    ],
    outcomes: [
      "Hours back from reading and rewriting",
      "Answers grounded in your documents, not generic web text",
      "A product you can improve as models change",
    ],
  },
  {
    slug: "ai-agents",
    name: "AI Agents / Automation",
    groupId: "intelligence",
    fit: 5,
    summary: "Sales, support, marketing, and ops agents that run the work.",
    overview:
      "Agents are not chat windows. They are workers: they watch a queue, call tools, update a CRM, draft a reply, book a slot, escalate when unsure. We build sales, support, marketing, and operations agents with permissions, audit, and a human in the loop where money or reputation is on the line.",
    whoFor: [
      "Support and sales teams repeating the same motions",
      "Marketing ops stitching campaigns across tools",
      "Founders who want leverage without a 40-person ops floor",
    ],
    deliverables: [
      "Agent roles, tools, and permission boundaries",
      "Workflows across email, chat, CRM, and internal APIs",
      "Escalation, transcripts, and approval steps",
      "Dashboards for what the agents did and missed",
    ],
    outcomes: [
      "Work that moves while people sleep",
      "Consistent handling of routine demand",
      "A trail you can audit when something looks wrong",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    groupId: "intelligence",
    fit: 4,
    summary: "BI dashboards, reporting, and forecasting you can act on.",
    overview:
      "We turn operational data into pictures and numbers leaders will actually use: pipelines, definitions, dashboards, and forecasts tied to the decisions you make weekly. The goal is not another unused BI login. It is a trusted view of bookings, revenue, utilization, or funnel health.",
    whoFor: [
      "Operators flying without a single source of truth",
      "Product and finance teams arguing over different exports",
      "Companies ready to forecast instead of only looking back",
    ],
    deliverables: [
      "Metric definitions and data model",
      "Pipelines from your apps and third-party tools",
      "Dashboards and scheduled reports",
      "Forecasting where the data can support it",
    ],
    outcomes: [
      "One number for the thing that matters",
      "Less time assembling decks from CSV files",
      "Earlier warning when a KPI turns",
    ],
  },
  {
    slug: "plugins-extensions",
    name: "Plugins & Extensions",
    groupId: "platforms",
    fit: 5,
    summary: "WordPress, WooCommerce, Shopify, Chrome, and the tools around them.",
    overview:
      "A great deal of commerce and publishing already lives in WordPress, WooCommerce, Shopify, and the browser. We build plugins, themes, and extensions that add the missing capability — payments, AI, booking, inventory, CRM — without forcing a full platform migration.",
    whoFor: [
      "Stores and publishers invested in WordPress or Shopify",
      "SaaS products that need a Chrome or CMS footprint",
      "Agencies that want a branded plugin their clients can install",
    ],
    deliverables: [
      "WordPress / WooCommerce / Shopify plugins or apps",
      "Chrome extensions where the workflow is in the browser",
      "Settings, licensing, and update channels",
      "Documentation for installers and end users",
    ],
    outcomes: [
      "New capability inside the tools people already open",
      "A distributable product, not a one-off theme hack",
      "A path to list, license, and support the extension",
    ],
  },
  {
    slug: "api-integrations",
    name: "API & Integration Products",
    groupId: "platforms",
    fit: 5,
    summary: "Payments, CRM, booking, WhatsApp, accounting, and AI connected cleanly.",
    overview:
      "Most companies already own a stack: payments, CRM, accounting, WhatsApp, booking, email. We build the integration layer — and sometimes the product around it — so those systems agree. Events flow, retries happen, and a human is not the API between Stripe and the spreadsheet.",
    whoFor: [
      "Teams reconciling the same order in three systems",
      "Products that must speak to WhatsApp, payment, or accounting APIs",
      "Companies packaging an integration as its own SKU",
    ],
    deliverables: [
      "Integration architecture and mapping",
      "Connectors for payments, CRM, chat, books, and AI",
      "Webhooks, queues, and failure handling",
      "Admin visibility when a sync stalls",
    ],
    outcomes: [
      "One workflow instead of five logins",
      "Fewer silent failures at month-end",
      "A reusable integration you can sell or white-label",
    ],
  },
  {
    slug: "white-label",
    name: "White-label Software",
    groupId: "platforms",
    fit: 5,
    summary: "Products other businesses can brand, resell, and own in market.",
    overview:
      "White-label is a product designed to wear someone else’s name: agencies, franchises, regional partners. We build multi-brand theming, tenant isolation, partner admin, and the commercial model so you can sell the same engine many times without cloning the codebase.",
    whoFor: [
      "Agencies that want a platform under their own brand",
      "SaaS companies opening a partner or reseller channel",
      "Operators with many locations that should not share a login wall",
    ],
    deliverables: [
      "Multi-brand theming and domain mapping",
      "Partner, tenant, and end-customer roles",
      "Packaging, pricing hooks, and onboarding",
      "Isolation so one client never sees another",
    ],
    outcomes: [
      "Revenue that compounds through other people’s sales teams",
      "One product to maintain, many faces in market",
      "Contracts that match how partners actually sell",
    ],
  },
  {
    slug: "vertical-software",
    name: "Vertical Software",
    groupId: "platforms",
    fit: 5,
    summary: "Purpose-built systems for hotel, travel, education, agency, and restaurant.",
    overview:
      "Vertical software beats generic tools because the nouns are right: rooms, rates, itineraries, cohorts, retainers, covers. We build and white-label systems for hospitality, travel, education, agencies, and restaurants — including the AI and integrations those industries now expect.",
    whoFor: [
      "Hotel, travel, school, agency, or restaurant groups",
      "Founders targeting one of those industries with a product",
      "Operators tired of bending a generic CRM until it snaps",
    ],
    deliverables: [
      "Domain model for the industry, not a generic CRM",
      "Booking, inventory, staff, and customer flows",
      "Industry integrations (PMS, POS, LMS, and similar)",
      "Optional white-label for networks and franchises",
    ],
    outcomes: [
      "Software that speaks the language of the floor",
      "Less training, fewer workarounds",
      "A product you can take to the next property or campus",
    ],
  },
  {
    slug: "internal-systems",
    name: "Internal Business Systems",
    groupId: "partnership",
    fit: 5,
    summary: "ERP, CRM, HRM, projects, and reporting shaped to how you work.",
    overview:
      "Internal systems are the company itself: CRM, HR, projects, inventory, reporting. We replace the patchwork with a coherent system — or a thin layer over what you keep — so operations, finance, and leadership share the same objects. AI sits on top for search, drafting, and exception handling.",
    whoFor: [
      "Growing companies outgrowing Excel and chat as the ERP",
      "Leadership that cannot see project, people, and money together",
      "Ops teams paying for five tools that do not talk",
    ],
    deliverables: [
      "Process mapping and system design",
      "CRM, HRM, project, or ERP-style modules you actually need",
      "Permissions, approvals, and audit",
      "Reporting that matches how the business is run",
    ],
    outcomes: [
      "One operational backbone",
      "Handoffs that do not vanish in inboxes",
      "A system staff will use because it matches the job",
    ],
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    groupId: "partnership",
    fit: 4,
    summary: "APIs, SDKs, components, and templates for teams that ship.",
    overview:
      "When your customers are developers, the product is the interface: APIs, SDKs, UI kits, CLI, docs, and examples. We build those surfaces so other teams can embed ExclusiveCodeX-grade capability — or your own — without reading the source.",
    whoFor: [
      "Platform teams exposing an API as the product",
      "Companies shipping a component library or template pack",
      "Studios that want a reusable kit across client work",
    ],
    deliverables: [
      "API design, auth, and versioning",
      "SDKs, code samples, and changelog practice",
      "Component libraries and starters",
      "Developer docs that stay true to the code",
    ],
    outcomes: [
      "Adoption without a training call on every integrate",
      "A surface other engineers trust",
      "Less one-off work for every new consumer",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity Tools",
    groupId: "partnership",
    fit: 3,
    summary: "Monitoring, audit, and access management with a clear trail.",
    overview:
      "Security here is practical: who can get in, what they did, and whether something looks wrong. We build access management, audit logs, and monitoring into products — and focused tools when you need a clearer trail than a shared password spreadsheet. This is a supporting line, not a SOC-as-a-service pitch.",
    whoFor: [
      "Product teams that need audit and access done properly",
      "Internal systems with sensitive HR or finance data",
      "Companies preparing for customer security questionnaires",
    ],
    deliverables: [
      "Role-based access and SSO-ready identity",
      "Audit logs and admin review screens",
      "Monitoring and alerting for critical events",
      "Hardening of the app and cloud baseline",
    ],
    outcomes: [
      "A defensible answer to “who changed that?”",
      "Fewer shared logins",
      "Security that ships with the product, not as a sequel",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud / DevOps Services",
    groupId: "partnership",
    fit: 3,
    summary: "Hosting, deployment, and monitoring that stay quietly reliable.",
    overview:
      "DevOps at ExclusiveCodeX is the practice of making delivery dull: pipelines, environments, observability, and a production path your team can run on a Tuesday. We set it up around the product we build — or around a codebase you already have — and keep the surface area small.",
    whoFor: [
      "Teams still deploying from a laptop",
      "Products that need staging that resembles production",
      "Companies that want monitoring without a platform circus",
    ],
    deliverables: [
      "Environment and infrastructure layout",
      "CI/CD pipelines and release checks",
      "Logging, metrics, and uptime alerts",
      "Runbooks for the failures that matter",
    ],
    outcomes: [
      "Releases that are not a ritual",
      "Faster diagnosis when something breaks",
      "Hosting cost and risk you can see",
    ],
  },
  {
    slug: "it-consultancy",
    name: "IT Consultancy",
    groupId: "partnership",
    fit: 4,
    summary: "Technology strategy and implementation without the theatre.",
    overview:
      "Consultancy here means we sit with the problem, choose a stack, and then implement. Strategy without a build is a slide deck. We help you decide what to buy, what to build, where AI belongs, and how to sequence it — then we stay for the work.",
    whoFor: [
      "Leaders choosing between build, buy, and white-label",
      "Companies planning an AI or platform bet",
      "Teams that need an architecture review before the next hire wave",
    ],
    deliverables: [
      "Current-state and target architecture",
      "Build vs buy vs partner recommendations",
      "Roadmap, risks, and sequencing",
      "Hands-on implementation when you want the same team to ship",
    ],
    outcomes: [
      "A decision you can fund",
      "Less tool sprawl",
      "A path from advice to software in production",
    ],
  },
];

export const serviceGroups = groupsMeta.map((group) => ({
  ...group,
  items: services.filter((item) => item.groupId === group.id),
}));

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getGroup(id: string) {
  return groupsMeta.find((group) => group.id === id);
}

export const processSteps = [
  {
    key: "Think",
    title: "Map the advantage",
    body: "We start with the business problem, the data, and the AI opportunity — then lock architecture before a line of product code is wasted.",
    details: [
      "Discovery with operators, not only sponsors",
      "Process, data, and integration map",
      "AI opportunity and “do not automate this” list",
      "Architecture, tenancy, and risk notes",
      "A build sequence you can fund in slices",
    ],
  },
  {
    key: "Build",
    title: "Ship the product",
    body: "Design, engineering, integrations, and automation in one studio. SaaS, cloud, web, mobile, and internal systems — delivered as software that lasts.",
    details: [
      "Interface and domain model together",
      "Product slices in production-shaped environments",
      "Integrations with retries and visibility",
      "AI features with evaluation and override",
      "Handover docs your team can actually use",
    ],
  },
  {
    key: "Beyond",
    title: "Scale what works",
    body: "White-label, verticalize, automate operations, and keep evolving. The product should outgrow the brief, not the team that built it.",
    details: [
      "Instrumentation and the first real usage review",
      "Agent and automation coverage on proven flows",
      "White-label or multi-brand if the channel is there",
      "Performance, tenancy, and regional growth",
      "A retainer or roadmap for the next year, not a vanishing act",
    ],
  },
] as const;

export type Industry = {
  slug: string;
  name: string;
  detail: string;
  overview: string;
  systems: string[];
  ai: string[];
};

export const industries: Industry[] = [
  {
    slug: "hotel-hospitality",
    name: "Hotel & hospitality",
    detail: "Booking, operations, guest experience.",
    overview:
      "Hospitality software has to respect the desk and the room: rates, availability, groups, housekeeping, and a guest who will not wait. We build booking, operations, and guest-experience systems — including white-label for groups — with AI for inquiry, upsell, and shift briefing.",
    systems: [
      "Booking engines and channel-aware inventory",
      "Front-office and housekeeping operations",
      "Guest portals and stay communications",
      "Group / multi-property reporting",
    ],
    ai: [
      "Inquiry and reservation assistants",
      "Review and message drafting",
      "Demand and occupancy briefing",
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    detail: "Itineraries, inventory, partner networks.",
    overview:
      "Travel products stitch inventory, partners, payments, and itineraries that change mid-trip. We build the booking spine, partner portals, and operations consoles, then add agents for quoting, exception handling, and traveler updates.",
    systems: [
      "Itinerary and package builders",
      "Supplier and agent portals",
      "Payments, deposits, and amendments",
      "Operations for disruptions and rebooking",
    ],
    ai: [
      "Quote and itinerary drafting",
      "Policy-aware support replies",
      "Document and voucher extraction",
    ],
  },
  {
    slug: "education",
    name: "Education",
    detail: "Learning platforms, admin, and AI tutors.",
    overview:
      "Schools and training businesses need admin that matches terms, cohorts, and fees — and learning surfaces that students will open. We build LMS-adjacent platforms, admissions, and staff tools, with tutors and document assistants that stay inside your content.",
    systems: [
      "Admissions, cohorts, and timetables",
      "Learning content and progress",
      "Fees, parent or employer portals",
      "Staff reporting and compliance records",
    ],
    ai: [
      "Tutors grounded in your materials",
      "Marking and feedback drafts",
      "Admin Q&A over policies and handbooks",
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    detail: "Client portals, delivery, and white-label stacks.",
    overview:
      "Agencies sell delivery. The software should make retainers, assets, approvals, and white-label products look as considered as the work. We build client portals, resellable platforms, and the ops layer behind a studio that wants to productize.",
    systems: [
      "Client portals and approval flows",
      "Project, retainer, and resource tracking",
      "White-label products under the agency brand",
      "Reporting clients will forward internally",
    ],
    ai: [
      "Brief intake and scope drafts",
      "Status and recap writing",
      "Knowledge assistants over past work",
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    detail: "Ordering, inventory, and floor operations.",
    overview:
      "Restaurant systems live at the speed of service: orders, floor, inventory, and the group that owns more than one door. We build ordering, back-of-house, and multi-site reporting, with automation for stock, prep, and guest messaging where it helps rather than clutters the pass.",
    systems: [
      "Ordering and floor operations",
      "Inventory, prep, and supplier flows",
      "Loyalty and guest messaging",
      "Multi-site kitchen and sales views",
    ],
    ai: [
      "Demand and prep suggestions",
      "Review and guest-message drafts",
      "Shift notes from the day’s tickets",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    detail: "CRM, reporting, and workflow automation.",
    overview:
      "Firms run on pipeline, engagements, people, and billable truth. We build CRM-to-delivery systems for consultancies and practices: intake, matters or projects, time, and reporting — with agents on the repetitive communication and document grind.",
    systems: [
      "CRM and intake",
      "Engagement / matter workspaces",
      "Time, billing, and utilization",
      "Partner-level reporting",
    ],
    ai: [
      "Proposal and follow-up drafts",
      "Document Q&A",
      "Pipeline hygiene and next-best actions",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export const studioPoints = [
  {
    title: "AI-native, not bolted on",
    body: "Agents, assistants, and automation are designed into the product — not sprinkled on after launch.",
  },
  {
    title: "One studio, full stack",
    body: "From SaaS and cloud to plugins, APIs, and internal systems. Fewer vendors. Cleaner ownership.",
  },
  {
    title: "One core, many products",
    body: "A shared architecture so vertical SaaS — travel, business, marketing — can launch from the same technology.",
  },
  {
    title: "Ready to resell",
    body: "White-label and vertical products built so other businesses can put their name on them.",
  },
] as const;

export const studioStory = {
  kicker: "The studio",
  title: "An AI-powered software and automation company.",
  lead: "ExclusiveCodeX builds intelligent business systems, SaaS platforms, AI agents, web and mobile applications, APIs, and products other businesses can subscribe to or white-label.",
  body: [
    "The flagship direction is AI-powered business management software, with custom cloud and web systems as the delivery engine. Fit scores stay honest: we lead with SaaS, cloud, web, AI, integrations, white-label, and vertical systems.",
    "Think. Build. Beyond. is the loop. We map the advantage, ship the product, then compound it through agents, partners, and new surfaces — including a shared core that can launch many vertical products.",
  ],
};

export const marquee = [
  "BusinessOS",
  "MarketingOS",
  "TravelOS",
  "AI Workforce",
  "SaaS",
  "AI Agents",
  "Cloud Apps",
  "Web & Mobile",
  "Plugins",
  "APIs",
  "White-label",
  "Automation",
];
