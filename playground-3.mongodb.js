// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('tst');

db.getCollection('experience').insertMany([
  {
    role: "Senior Frontend Engineer",
    company: "AstraZeneca",
    location: "",
    fromDate: new Date("2024-02-01"),
    toDate: new Date("2025-03-01"),
    description: `Developed and maintained an internal management tool for decision-makers, enabling analysis of asset combinations using Monte Carlo algorithms. Spearheaded migration from Webpack/Jest to Vite/Vitest and Styled-Components to Tailwind CSS, aligning the tech stack across teams.
    
Actively contributed to the FE Working Group, standardizing frontend best practices within the Connected Insights group. Led the integration of a common design system to ensure consistency across applications, working closely with UX teams to refine user experiences. Expanded responsibilities beyond frontend development, integrating with other teams, driving agile processes, improving working practices, and enhancing testing strategies.
`,
    skills: [
      { order: 1, name: "JavaScript" },
      { order: 2, name: "TypeScript" },
      { order: 3, name: "React" },
      { order: 4, name: "Styled-Components" },
      { order: 5, name: "Tailwind" },
      { order: 6, name: "React-Query" },
      { order: 7, name: "Zustand" },
      { order: 8, name: "VITE/VITest" },
      { order: 9, name: "JEST" },
      { order: 10, name: "Playwright" },
      { order: 11, name: "OpenAPI" },
      { order: 12, name: "JSDoc" },
      { order: 13, name: "Agile" },
      { order: 14, name: "Kanban" },
      { order: 15, name: "Jira" }
    ]
  },
  {
    role: "Senior Frontend UI Engineer",
    company: "Santander Auto",
    location: "London, UK",
    fromDate: new Date("2023-07-01"),
    toDate: new Date("2023-11-01"),
    description: `As a key member of the Customer team, I played a pivotal role in developing customer-centric features and resolving reported issues. Spearheaded the creation of an innovative customer operations feature, utilizing React, React Query, TypeScript, React Hook Forms, and Tailwind. This feature empowered the service team to rectify data validation errors from our in-house validation system, OCS.

- Developed customer-oriented features.
- Gathered project requirements, collaborated with stakeholders, and ensured alignment with the product owner's expectations.
- Participated in Kanban and Agile-related ceremonies and coordinated back-end and front-end teams.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "TypeScript" },
      { order: 3, name: "VITE" },
      { order: 4, name: "VITest" },
      { order: 5, name: "React Query" },
      { order: 6, name: "React-Hook-Forms" },
      { order: 7, name: "REST" },
      { order: 8, name: "Tailwind" },
      { order: 9, name: "Yarn" },
      { order: 10, name: "Agile" }
    ]
  },
  {
    role: "Lead Frontend UI Engineer",
    company: "Coyote Software",
    location: "London, UK",
    fromDate: new Date("2022-06-01"),
    toDate: new Date("2023-07-10"),
    description: `As the Lead Frontend UI Engineer at Coyote Software, I led the team and successfully migrated the platform from AngularJS to ReactJS. Managed daily stand-ups, communicated project status, and developed a standalone component library using ReactJS, TypeScript, and Storybook.

Started developing POC in Next.JS before the company was bought out. Early-stage development focused on technology analysis and project MVP starting with the main property asset page.

- Led the team and managed the migration from AngularJS to ReactJS.
- Conducted daily stand-ups, communicated project status, and planned workstreams.
- Developed a standalone component library using ReactJS, TypeScript, and Storybook.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "TypeScript" },
      { order: 3, name: "Next.JS" },
      { order: 4, name: "Redux" },
      { order: 5, name: "MaterialUI" },
      { order: 6, name: "Styled-Components" },
      { order: 7, name: "Storybook" },
      { order: 8, name: "Jest" },
      { order: 9, name: "NPM" },
      { order: 10, name: "REST" },
      { order: 11, name: "Agile" },
      { order: 12, name: "Mentoring" }
    ]
  },
  {
    role: "Senior Frontend ReactJS Developer",
    company: "MDRxTech, Mishcon de Reya Group",
    location: "",
    fromDate: new Date("2022-01-01"),
    toDate: new Date("2022-06-01"),
    description: `Completed the CSX Carbon Capture project using TypeScript, Redux, AWS, and Postgres.
- Provided consultation on agile processes and architectural decisions.
- Gained experience in AWS technologies like CloudFront, CloudWatch, S3, RDS, API Gateway, and Amplify.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "TypeScript" },
      { order: 3, name: "Redux" },
      { order: 4, name: "MaterialUI" },
      { order: 5, name: "Styled-Components" },
      { order: 6, name: "Storybook" },
      { order: 7, name: "Jest" },
      { order: 8, name: "NPM" },
      { order: 9, name: "REST" },
      { order: 10, name: "Agile" }
    ]
  },
  {
    role: "Frontend ReactJS Developer",
    company: "Office of National Statistics",
    location: "",
    fromDate: new Date("2021-12-01"),
    toDate: new Date("2022-01-01"),
    description: `Developed the search component for the ONS Website using ReactJS, SCSS, and GoLang templates.
- Ensured code compliance with accessibility standards and utilized server-rendered React.
- Participated in Scrum meetings, agile planning, and design meetings.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "GoLang" },
      { order: 3, name: "CSS" },
      { order: 4, name: "Jest" },
      { order: 5, name: "SQL" },
      { order: 6, name: "NPM" },
      { order: 7, name: "REST" },
      { order: 8, name: "Agile" },
      { order: 9, name: "WCAG" }
    ]
  },
  {
    role: "Senior Frontend Software Engineer",
    company: "LexisNexis Risk Solutions",
    location: "",
    fromDate: new Date("2014-08-01"),
    toDate: new Date("2021-11-01"),
    description: `Worked across multiple projects in the LexisNexis group including Telematics and Commercial Real Estate Risk. Developed applications end to end using React, React Hooks, Material UI, TypeScript and various other frontend-based technologies. Worked as part of an agile team through each step of task identification, estimating and planning.

Worked with international teams in the US, Brazil, Spain, and Vietnam.

- Transitioned from C# to frontend development.
- Developed mobile telematics apps using React Native and web-based telematics portals using ReactJS.
- Created a standalone component library using Storybook for future front-end applications.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "React Native" },
      { order: 3, name: "AngularJS" },
      { order: 4, name: "C#" },
      { order: 5, name: "SQL" },
      { order: 6, name: "React-Context" },
      { order: 7, name: "MaterialUI" },
      { order: 8, name: "CSS" },
      { order: 9, name: "SASS" },
      { order: 10, name: "Styled-Components" },
      { order: 11, name: "Storybook" },
      { order: 12, name: "Jest" },
      { order: 13, name: "NPM" },
      { order: 14, name: "REST" },
      { order: 15, name: "Agile" },
      { order: 16, name: "Mentoring" }
    ]
  },
  {
    role: "Software Engineer",
    company: "DBT Ltd",
    location: "",
    fromDate: new Date("2012-04-01"),
    toDate: new Date("2014-09-01"),
    description: `Worked on various technologies, including C#, VB.Net, MVC, and JQuery.
- Led projects, including Windows-based Smart Clients, Dashboards, microsites, and CRM and Asset Management web applications.`,
    skills: [
      { order: 1, name: "React" },
      { order: 2, name: "JQuery" },
      { order: 3, name: "Windows Forms" },
      { order: 4, name: "SQL" },
      { order: 5, name: "C#" },
      { order: 6, name: "CSS" },
      { order: 7, name: "Jest" },
      { order: 8, name: "NPM" },
      { order: 9, name: "REST" }
    ]
  },
  {
    role: "Frontend Developer",
    company: "MAD Productions LTD",
    location: "",
    fromDate: new Date("2011-04-01"),
    toDate: new Date("2012-07-01"),
    description: `Developed E-Commerce web solutions and in-house CMS systems.
- Improved code performance and worked closely with management and clients.`,
    skills: [
      { order: 1, name: "C#" },
      { order: 2, name: "JavaScript" },
      { order: 3, name: "JQuery" },
      { order: 4, name: "SQL" },
      { order: 5, name: "CSS" },
      { order: 6, name: "Jest" },
      { order: 7, name: "NPM" },
      { order: 8, name: "REST" },
      { order: 9, name: "Agile" }
    ]
  },
  {
    role: "Junior Developer",
    company: "Webree Ltd",
    location: "",
    fromDate: new Date("2009-06-01"),
    toDate: new Date("2011-03-01"),
    description: `Developed E-Commerce web solutions and in-house CMS systems.
- Improved code performance and worked closely with management and clients.`,
    skills: [
      { order: 1, name: "C#" },
      { order: 2, name: "JavaScript" },
      { order: 3, name: "JQuery" },
      { order: 4, name: "SQL" },
      { order: 5, name: "CSS" },
      { order: 6, name: "Jest" },
      { order: 7, name: "NPM" },
      { order: 8, name: "REST" },
      { order: 9, name: "Agile" }
    ]
  }
]);