export const approach = [
  {
    title: "Understand the operation",
    text: "Start with the business challenge: who does the work, what information they need, where hand-offs happen, and which constraints matter.",
  },
  {
    title: "Structure the system",
    text: "Map requirements, responsibilities, data, and approvals before choosing an interface or proposing automation.",
  },
  {
    title: "Explore a practical solution",
    text: "Connect software, workflow design, and commercial research. Validate assumptions before presenting a concept as a working product.",
  },
];
export const skillApplications: Record<string, string> = {
  HTML: "Structure web pages with meaningful headings, content sections, links, and forms.",
  CSS: "Shape readable layouts, responsive interfaces, and consistent visual presentation.",
  Bootstrap:
    "Use reusable layout and interface patterns to organise web pages across screen sizes.",
  JavaScript:
    "Add browser-side interactions, form behaviour, and dynamic page updates.",
  PHP: "Support server-side web logic and database-connected application workflows.",
  Python: "Explore scripting, data handling, and repeatable programming tasks.",
  "Visual Basic":
    "Work with application logic and structured programming for business-oriented tasks.",
  "Android Programming":
    "Apply mobile programming foundations to Android application experiences.",
  "WordPress Development":
    "Build and maintain content-oriented websites using the WordPress ecosystem.",
  MySQL:
    "Organise relational records and query information for software and business systems.",
  "Database Management":
    "Maintain organised records, relationships, and access to operational information.",
  "Database Analysis":
    "Examine data structures and relationships in the context of business information needs.",
  "Data Enumeration":
    "Collect and organise field or administrative records in a structured format.",
  "Network Management":
    "Support the organisation and day-to-day maintenance of network connectivity.",
  "Network Sharing":
    "Configure shared access to network resources for routine workplace use.",
  Nmap: "A documented network-discovery tool; its listing does not establish advanced security-testing expertise.",
  "Kali Linux":
    "A documented security-tool environment, not evidence of professional penetration-testing engagements.",
  "OSINT Information Gathering":
    "Explore publicly available information responsibly; no private-data access or security clearance is implied.",
  "Network Security":
    "A documented area of study and skill, alongside the listed CNSS credential; no current certification validity is asserted.",
  "Computer Maintenance":
    "Support routine computer upkeep and diagnosis of hardware or software issues.",
  "Software Installation":
    "Install and configure software to support everyday computer use.",
  "Web Maintenance":
    "Maintain website content and functionality as part of ongoing technical support.",
  "IT Consultation":
    "Consider technical requirements and practical options for business IT needs.",
  "Technical Troubleshooting":
    "Investigate technical problems systematically and identify appropriate next steps.",
  "Business Analysis":
    "Translate operational challenges into clearer requirements, information needs, and process definitions.",
  "Business Process Automation":
    "Examine manual tasks and explore structured digital workflows, with responsibilities and exceptions made explicit.",
  "Strategy Development":
    "Consider business goals, operational constraints, and opportunities when defining a course of action.",
  "Project Management":
    "Organise scope, activities, responsibilities, and follow-up; supported by the credential details supplied in the brief.",
  "Digital Marketing":
    "Connect campaign planning and digital communication with lead and customer follow-up workflows.",
  "Customer Intelligence":
    "Project exploration of customer and company information that may inform qualification and outreach.",
  "Workflow Design":
    "Project exploration of steps, approvals, information hand-offs, and exception handling.",
  "Agro-Commercial Strategy":
    "Research-oriented exploration of agricultural supplier discovery and Saudi–West Africa trade opportunities.",
  Canva:
    "A practical creative tool for visual materials; not an AI engineering credential.",
  Gemini:
    "A practical AI-assisted work tool; its use does not establish machine-learning engineering experience.",
  "AI-Assisted Content Workflows":
    "Explore structured production prompts, scene continuity, and source-sensitive editorial review.",
  "Digital Content Planning":
    "Organise educational concepts, visual direction, and publishing materials into repeatable creative workflows.",
};
export const experienceInsights: Record<
  string,
  { focus: string; connection: string }
> = {
  "Mamtech Nigerian Limited": {
    focus:
      "Practical computer support combining maintenance, software setup, and shared network resources.",
    connection:
      "A technical-support foundation for understanding the systems people depend on in everyday work.",
  },
  "Securities and Exchange Commission, Kano Zonal Office": {
    focus:
      "Administrative support alongside computer maintenance and network management in the Kano Zonal Office.",
    connection:
      "Connects administrative information needs with the technical environment supporting office operations.",
  },
  "Husseydelta Enterprises": {
    focus:
      "Responsibilities across digital marketing, software development, and business analysis.",
    connection:
      "Brings customer-facing communication, technical development, and business requirements into the same professional context.",
  },
  "ELAB NIG Solution Provider": {
    focus:
      "A broad technical remit covering data enumeration, network analysis, web maintenance, software development, and IT consultation.",
    connection:
      "Links information collection and ongoing support with software and website work.",
  },
  "Pluck Agro Allied Limited": {
    focus:
      "Responsibilities spanning software development, strategy planning, automation of manual systems, and finance and audit-related work.",
    connection:
      "Connects technical implementation with process structure and agricultural-business operations. Specific systems and measured outcomes are not documented.",
  },
};
export type ProjectInsight = {
  problem: string;
  solution: string;
  workflow: { title: string; detail: string }[];
  validation: string[];
};
export const projectInsights: Record<string, ProjectInsight> = {
  "01": {
    problem:
      "Cross-border discovery involves more than finding a name. Supplier capabilities, buyer requirements, qualification information, and commercial follow-up need a consistent structure. The initiative explores how to organise that information without assuming a completed trade network.",
    solution:
      "Explore a trade-intelligence workspace connecting commodity interests, supplier and buyer profiles, qualification notes, and relationship follow-up. Commercial assumptions require validation with participants before any transaction capability is claimed.",
    workflow: [
      {
        title: "Discover",
        detail:
          "Research potential suppliers, exporters, buyers, and commodity interests.",
      },
      {
        title: "Qualify",
        detail:
          "Structure company information and record questions requiring confirmation.",
      },
      {
        title: "Coordinate",
        detail: "Organise outreach, opportunity notes, and next actions.",
      },
      {
        title: "Follow up",
        detail:
          "Track relationship context and unresolved commercial requirements.",
      },
    ],
    validation: [
      "Confirm supplier and buyer requirements through direct research.",
      "Document qualification criteria and information sources.",
      "Establish evidence before claiming contracts, exports, or transactions.",
    ],
  },
  "02": {
    problem:
      "The concept addresses the disconnect that can occur between campaign activity, incoming leads, and subsequent customer follow-up. It explores a coordinated operating model rather than asserting established agency operations.",
    solution:
      "Combine service processes with software concepts so campaign context, lead ownership, follow-up tasks, and reporting can be considered together.",
    workflow: [
      {
        title: "Plan",
        detail: "Define campaign objectives and the proposed service scope.",
      },
      {
        title: "Capture",
        detail: "Organise lead information and campaign context.",
      },
      {
        title: "Follow up",
        detail: "Explore ownership, next actions, and customer tracking.",
      },
      {
        title: "Review",
        detail:
          "Consider reporting requirements without invented conversion figures.",
      },
    ],
    validation: [
      "Validate the proposed Saudi-market service model.",
      "Confirm customer tracking and reporting requirements.",
      "Separate proposed campaign measures from observed results.",
    ],
  },
  "03": {
    problem:
      "A financial-service concept must consider customer access alongside agent responsibilities, liquidity, ledger integrity, permissions, and operational oversight. These are architecture questions, not proof of a regulated service.",
    solution:
      "Explore role-based experiences and transaction lifecycle concepts that make responsibilities, records, and operational checks explicit. No implementation, licensing, or transaction processing is asserted.",
    workflow: [
      {
        title: "Initiate",
        detail: "Consider customer and agent entry points and role boundaries.",
      },
      {
        title: "Record",
        detail: "Explore ledger concepts and transaction-state records.",
      },
      {
        title: "Coordinate",
        detail: "Map proposed liquidity and settlement responsibilities.",
      },
      {
        title: "Monitor",
        detail:
          "Consider administrative controls and operational exception visibility.",
      },
    ],
    validation: [
      "Confirm product scope and jurisdiction-specific requirements with qualified advisers.",
      "Review ledger and settlement assumptions before implementation.",
      "Require evidence before any live, licensed, or transaction-volume claim.",
    ],
  },
  "04": {
    problem:
      "Multi-trade operations can involve several responsibilities and approval paths. The concept explores how to make commercial processes, permissions, and decision histories easier to structure.",
    solution:
      "Define an ERP-oriented requirements model with connected workflows, access boundaries, approvals, audit trails, and operational reporting.",
    workflow: [
      {
        title: "Define",
        detail: "Identify commercial activities and information requirements.",
      },
      {
        title: "Assign",
        detail: "Map roles and proposed permission boundaries.",
      },
      {
        title: "Approve",
        detail: "Explore review steps and approval responsibilities.",
      },
      {
        title: "Trace",
        detail: "Consider audit records and operational reporting needs.",
      },
    ],
    validation: [
      "Confirm workflow requirements with intended users.",
      "Review permissions and approval exceptions.",
      "Document implementation evidence before claiming deployment.",
    ],
  },
  "05": {
    problem:
      "Customer relationships, property operations, digital services, and business development can require different processes while sharing information needs. The workstreams explore these connections without implying an approved client relationship.",
    solution:
      "Map customer lifecycle and business-service workflows to clarify what information should move between activities, who handles it, and where digitisation may be useful.",
    workflow: [
      {
        title: "Discover",
        detail: "Clarify the business activity and customer information needs.",
      },
      {
        title: "Organise",
        detail: "Explore lifecycle stages and service responsibilities.",
      },
      {
        title: "Coordinate",
        detail: "Consider property and digital-service process hand-offs.",
      },
      {
        title: "Review",
        detail: "Identify operational questions for further planning.",
      },
    ],
    validation: [
      "Confirm the scope and ownership of each workstream.",
      "Validate customer lifecycle and property-operation requirements.",
      "Obtain approval before publishing client branding or delivery claims.",
    ],
  },
  "06": {
    problem:
      "Legal operations involve a lifecycle of onboarding, identity-related procedures, matter administration, and financial processes. The concept explores process structure; it does not establish legal or regulatory compliance.",
    solution:
      "Research a proposed operating model linking client onboarding, KYC/AML workflow concepts, matter administration, and VAT-related collection steps, subject to specialist review.",
    workflow: [
      {
        title: "Onboard",
        detail: "Explore intake requirements and client information structure.",
      },
      {
        title: "Review",
        detail: "Map proposed KYC/AML responsibilities for expert review.",
      },
      {
        title: "Administer",
        detail: "Consider matter records and operational hand-offs.",
      },
      {
        title: "Coordinate collection",
        detail: "Research VAT-related collection workflow requirements.",
      },
    ],
    validation: [
      "Obtain jurisdiction-specific legal, tax, and compliance guidance.",
      "Validate the intended users and matter-administration scope.",
      "Do not represent a workflow concept as compliance assurance.",
    ],
  },
  "07": {
    problem:
      "Educational media concepts need continuity across scenes, prompts, visual identity, and publishing materials. AI-assisted output also requires source-sensitive review rather than being treated as automatically reliable.",
    solution:
      "Explore repeatable creative planning that links an educational concept to production prompts, continuity requirements, visual guidance, and publishing preparation.",
    workflow: [
      {
        title: "Plan",
        detail: "Define the educational concept and source-review needs.",
      },
      {
        title: "Specify",
        detail: "Structure scene prompts and visual identity requirements.",
      },
      {
        title: "Review",
        detail: "Check continuity and source-sensitive educational content.",
      },
      {
        title: "Prepare",
        detail: "Organise proposed publishing materials and formats.",
      },
    ],
    validation: [
      "Approve examples and branding before public display.",
      "Review educational source material and generated content.",
      "Document completed outputs before claiming publishing results.",
    ],
  },
};
export const collaborationGuide = [
  {
    title: "The challenge",
    text: "What process, product idea, or commercial opportunity would you like to explore?",
  },
  {
    title: "The context",
    text: "Who is involved, what happens today, and which constraints or requirements are already known?",
  },
  {
    title: "The next step",
    text: "Share the scope and intended outcome so the conversation can focus on a practical way forward.",
  },
];
