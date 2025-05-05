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
    name: "Web Design and Development",
    description:
      "Our web development services focus on creating websites that are not only visually stunning but also highly functional...",
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
      "Our digital marketing services are aimed at driving traffic, increasing engagement, and boosting conversions...",
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
    name: "Apps and Software Development",
    description:
      "We specialize in developing comprehensive digital solutions, including mobile applications and custom software...",
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
    name: "Graphics and Motion Designing",
    description:
      "Our team of creative professionals brings your ideas to life with captivating graphics and animations...",
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
    images: [
      "/images/services/graphic/gd3.png",
      "/images/services/graphic/gd4.png",
      "/images/services/graphic/gd1.png",
    ],
  },
  {
    name: "Data Analytics and Visualization",
    description:
      "We help you harness the power of data to make informed business decisions...",
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
