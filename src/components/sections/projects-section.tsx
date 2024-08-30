// import MinorProjectCards from "../reusables/minor-project-card";
// import ProjectCard from "../reusables/project-card";
// import SectionHeader from "../reusables/section-header";
// import SectionSubHeader from "../reusables/section-sub-header";
// import SectionWrapper from "../wrappers/section-wrapper";
import Web1 from "@/../public/images/services/web/web.png";
import Web2 from "@/../public/images/services/web/web1.png";
import Web3 from "@/../public/images/services/web/web3.png";

import App1 from "@/../public/images/services/app/app1.png";
import App2 from "@/../public/images/services/app/app2.jpg";
import App3 from "@/../public/images/services/app/app3.png";
// import Smatch2 from "@/../public/images/smatch2.jpeg";
// import Smatch1 from "@/../public/images/smatch3.jpeg";
// import BB1 from "@/../public/images/bb.png";
// import BB2 from "@/../public/images/bb1.png";
// import BB3 from "@/../public/images/bb3.png";

import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

// import {
//   SiNextdotjs,
//   SiFlask,
//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiPostgresql,
//   SiPrisma,
//   SiVercel,
//   SiTailwindcss,
//   SiReact,
//   SiShadcnui,
//   SiTypescript,
// } from "@icons-pack/react-simple-icons";
// import GithubContributions from "./github-section";
// // import GithubContributions from "./github-section";

// export default function ProjectSection() {
//   return (
//     <>
//       <SectionWrapper>
//         <SectionHeader title="projects" />
//         <div className="grid gap-40 mb-40">
//           {projects.map((project, idx) => (
//             <ProjectCard
//               key={idx}
//               name={project.name}
//               description={project.description}
//               techs={project.techs}
//               image={project.images}
//               className={project.className}
//             />
//           ))}
//         </div>

//         <SectionSubHeader title="Minor Projects" />

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-5">
//           {minorProjects.map((project, idx) => (
//             <MinorProjectCards
//               key={idx}
//               name={project.name}
//               description={project.description}
//               image={project.images}
//               techs={project.techs}
//             />
//           ))}
//         </div>

//         <GithubContributions />
//       </SectionWrapper>
//     </>
//   );
// }

// const projects = [
//   {
//     name: "Better Bikes",
//     description:
//       "BetterBikes is a full-stack web application that revolutionizes the way bikes are rented and shared. It offers a platform for individuals to rent out their bikes when not in use, as well as for customers to easily find and rent bikes from various locations. The application utilizes modern web technologies including Next.js, Express, Socket.io, and PostgreSQL to create a seamless and efficient user experience. The platform addresses the need for an accessible, digital solution in the bike rental market, providing a user-friendly interface and real-time communication through a chat system",
//     techs: [
//       "NextJS",
//       "ExpressJS",
//       "ShadcnUI",
//       "SocketIO",
//       "PostgreSQL",
//       "Prisma",
//       "TypeScript",
//       "TailwindCSS",
//     ],
//     images: [Image1, Image2, Image1],
//   },
//   {
//     name: "Smatch",
//     description:
//       "Smatch is a webapplication for searching and filtering through job postings. It is a full-stack web application that allows users to search for job postings. With features such as match percentage matching the user's skills with the job requirements, users can easily find the best job for them. The application utilizes modern technologies and also makes use of AI models for the matching algorithm. The platform addresses the need for an accessible, digital solution in the job search market, providing a user-friendly interface with a chatbot for assistance.",
//     techs: [
//       "Nextjs",
//       "NestJS",
//       "LangChain",
//       "Gpt-API",
//       "ShadcnUI",
//       "Python",
//       "FastAPI",
//       "TailwindCSS",
//     ],
//     images: [Smatch, Smatch1, Smatch],
//     className: "order-last",
//   },
//   {
//     name: "BlinkedBids",
//     description:
//       "BlinkedBids is a full-stack e-commerce web application that allows users to buy products from various categories. This includes features such as product filtering, sorting, and a shopping cart. The application utilizes modern web technologies including Django and NextJs. We also have integrated esewa payment gateway for the payment system. The platform addresses the need for an accessible, digital solution in the e-commerce market, with a pleasant user interface and a seamless shopping experience.",
//     techs: [
//       "NextJS",
//       "Django",
//       "Esewa",
//       "PostgreSQL",
//       "NextAuth",
//       "ShadcnUI",
//       "TailwindCSS",
//     ],
//     images: [BB2, BB1, BB3],
//     className: "order-first",
//   },
// ];

// const minorProjects = [
//   {
//     name: "tyz-ui: my personal component library",
//     description:
//       "A collection of TailwindCSS components for my personal use for faster development",
//     techs: [
//       <SiNextdotjs size={18} key={crypto.randomUUID()} />,
//       <SiReact size={18} key={crypto.randomUUID()} />,
//       <SiTypescript size={18} key={crypto.randomUUID()} />,
//       <SiTailwindcss size={18} key={crypto.randomUUID()} />,
//     ],
//     images: "tyz-ui.png",
//   },

//   {
//     name: "Digital Scavenger Hunt",
//     description:
//       "Digital Version of Scavenger Hunt a QR based game which is a fun starter for events",
//     techs: [
//       <SiNextdotjs size={18} key={crypto.randomUUID()} />,
//       <SiTailwindcss size={18} key={crypto.randomUUID()} />,
//       <SiPostgresql size={18} key={crypto.randomUUID()} />,
//       <SiPrisma size={18} key={crypto.randomUUID()} />,
//     ],
//     images: "scanvenger.png",
//   },
//   {
//     name: "Hackaverse Genesis Landing",
//     description:
//       "Official Landing Page for Hackaverse Genesis Event happening soon in 2024",
//     techs: [
//       <SiReact size={18} key={crypto.randomUUID()} />,
//       <SiTypescript size={18} key={crypto.randomUUID()} />,
//       <SiShadcnui size={18} key={crypto.randomUUID()} />,
//       <SiVercel size={18} key={crypto.randomUUID()} />,
//     ],
//     images: "hackaverse.png",
//   },
//   {
//     name: "Old Question Site CSIT ",
//     description:
//       "Collection of old questions for CSIT with some features such as marking questions",
//     techs: [
//       <SiFlask size={18} key={crypto.randomUUID()} />,
//       <SiPython size={18} key={crypto.randomUUID()} />,
//       <SiJavascript size={18} key={crypto.randomUUID()} />,
//       <SiTailwindcss size={18} key={crypto.randomUUID()} />,
//     ],
//     images: "oldqsnsite.png",
//   },
// ];

// import GithubContributions from "./github-section";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="Services we offer" />
      <div className="grid gap-40 mt-10">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            description={project.description}
            techs={project.techs}
            image={project.images}
            className={project.className}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

const projects = [
  {
    name: "Web Design and Development",
    description:
      "Our web development services focus on creating websites that are not only visually stunning but also highly functional. We offer custom website design tailored to reflect your brand identity, responsive design to ensure your website looks great and performs well on all devices, and e-commerce solutions for building secure and scalable online stores. Additionally, we develop websites on content management systems (CMS) like WordPress, Joomla, and Drupal, and provide regular updates and maintenance to keep your site secure and up-to-date. Our goal is to create user-friendly websites that deliver an exceptional user experience and drive business growth.",
    techs: [
      "web development",
      "responsive design",
      "e-commerce solutions",
      "CMS",
      "custom website design",
      "website maintenance",
      "cross-device compatibility",
      "user-friendly websites",
    ],
    images: [Web1, Web2, Web3],
  },
  {
    name: "Digital Marketing",
    description:
      "Our digital marketing services are aimed at driving traffic, increasing engagement, and boosting conversions. We employ a multi-faceted approach to ensure your brand gains the visibility it deserves. Our strategies include search engine optimization (SEO) to improve your website's ranking on search engines, pay-per-click (PPC) advertising for immediate traffic and conversions, and social media marketing to build and engage your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn. Additionally, we offer content marketing to create valuable content that attracts, engages, and converts your target audience, as well as email marketing to develop and manage campaigns that nurture leads and drive sales.",
    techs: [
      "digital marketing",
      "SEO",
      "PPC",
      "social media marketing",
      "content strategy",
      "email marketing",
      "online visibility",
      "audience engagement",
    ],
    className: "order-last",

    images: [],
  },
  {
    name: "Apps and Software Development",
    description:
      "We specialize in developing comprehensive digital solutions, including mobile applications and custom software tailored to your business needs. Our app development services encompass the entire lifecycle, from ideation to deployment, ensuring that we create intuitive and engaging user interfaces through UI/UX design. We build robust native applications for Android and iOS platforms and utilize frameworks like Flutter and React Native for cross-platform development. In software development, we provide bespoke solutions to solve unique business challenges, scalable enterprise applications, and software as a service (SaaS) platform accessible over the internet. Our process includes rigorous testing and quality assurance to guarantee flawless performance and ongoing maintenance and support to keep your solutions updated and running smoothly.",
    techs: [
      "app development",
      "software development",
      "UI/UX design",
      "mobile applications",
      "Android development",
      "iOS development",
      "cross-platform apps",
      "custom software",
      "enterprise solutions",
      "SaaS development",
      "app maintenance",
      "scalable solutions",
      "secure software",
    ],
    images: [App2, App1, App3],
  },
  {
    name: "Graphics and Motion Designing",
    description:
      "Our team of creative professionals brings your ideas to life with captivating graphics and animations. We create memorable logos and brand identities, design brochures, flyers, and other promotional materials, and produce engaging visuals tailored for social media platforms. Our expertise in motion graphics and animation allows us to produce dynamic animations for ads, explainer videos, and more, while our infographics transform data into visually appealing and easily understandable formats.",
    techs: [
      "graphics design",
      "motion design",
      "branding",
      "marketing collateral",
      "social media graphics",
      "animations",
      "infographics",
      "visual storytelling",
    ],
    className: "order-last",

    images: [],
  },
  {
    name: "Data Analytics and Visualization",
    description:
      "We help you harness the power of data to make informed business decisions. Our services include data collection and processing from various sources, implementing business intelligence (BI) tools to analyze data and generate insights, and creating dashboards and visual reports that make data easy to understand. We utilize predictive analytics to forecast future trends and outcomes and offer data strategy consulting to help you develop and implement a data-driven strategy.",
    techs: [
      "data analytics",
      "data visualization",
      "business intelligence",
      "predictive analytics",
      "data strategy",
      "data-driven decisions",
      "BI tools",
      "actionable insights",
    ],
    images: [],
  },
];
