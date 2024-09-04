import Web1 from "@/../public/images/services/web/web.png";
import Web2 from "@/../public/images/services/web/web1.png";
import Web3 from "@/../public/images/services/web/web3.png";

import App1 from "@/../public/images/services/app/app1.png";
import App2 from "@/../public/images/services/app/app2.jpg";
import App3 from "@/../public/images/services/app/app3.png";

import Data1 from "@/../public/images/services/data/data1.png";
import Data2 from "@/../public/images/services/data/data2.jpg";
import Data3 from "@/../public/images/services/data/data3.png";

import DM1 from "@/../public/images/services/digital-marketing/dm1.jpg";
import DM2 from "@/../public/images/services/digital-marketing/dm2.png";
import DM3 from "@/../public/images/services/digital-marketing/dm3.png";

import GD1 from "@/../public/images/services/graphic/gd1.png";
import GD2 from "@/../public/images/services/graphic/gd3.png";
import GD3 from "@/../public/images/services/graphic/gd4.png";

import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="Services we offer" />
      <div className="grid gap-40 mt-10" id="services">
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

    images: [DM1, DM2, DM3],
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

    images: [GD2, GD3, GD1],
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
    images: [Data1, Data3, Data2],
  },
];
