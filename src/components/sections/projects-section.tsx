import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="Services we offer" />
      <div className="grid gap-20 md:gap-40 mt-10" id="services">
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
    name: "Website Development",
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
    images: [
      "/images/services/web/web.png",
      "/images/services/web/web1.png",
      "/images/services/web/web3.png",
    ],
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
    images: [
      "/images/services/digital-marketing/dm2.png",
      "/images/services/digital-marketing/dm1.jpg",
      "/images/services/digital-marketing/dm3.png",
    ],
  },
  {
    name: "App & Software Development",
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
    images: [
      "/images/services/app/app2.jpg",
      "/images/services/app/app1.png",
      "/images/services/app/app3.png",
    ],
  },
  {
    name: "AI & Data Analytics",
    description:
      "We help you turn data into clear, useful insights and apply AI to real business needs. Our services include data collection and processing, business intelligence (BI), dashboards and visual reports, predictive analytics, and data strategy consulting to support informed, data-driven decisions.",
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
    images: [
      "/images/services/data/data1.png",
      "/images/services/data/data3.png",
      "/images/services/data/data2.jpg",
    ],
  },
];
