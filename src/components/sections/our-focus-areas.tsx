import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "../wrappers/section-wrapper";
import SectionHeader from "../reusables/section-header";

const focusAreas = [
  {
    id: 1,
    title: "Customer Satisfaction and Community Engagement",
    description:
      "We are committed to providing exceptional service and building strong relationships with our clients and the community. Our goal is to exceed customer expectations and create a positive impact on the world around us.",
  },
  {
    id: 2,
    title: "Innovation and Growth",
    description:
      "We are passionate about pushing the boundaries of what is possible and creating innovative solutions that drive growth and success. Our team of experts is dedicated to staying ahead of the curve and delivering cutting-edge technology.",
  },
  {
    id: 3,
    title: "Sustainability and operational excellence",
    description:
      "We hold ourselves to the highest standards of quality and excellence in everything we do. Our team is committed to delivering exceptional results and exceeding customer expectations on every project.",
  },
  {
    id: 4,
    title: "Comprehensive Solutions and Long-Term Partnerships",
    description:
      "We offer a wide range of services to meet the diverse needs of our clients and build long-term partnerships based on trust, transparency, and mutual success. Our goal is to be the leading force in IT innovation and help businesses navigate the complexities of the digital landscape.",
  },
];

export default function OurFocusAreas() {
  return (
    <>
      <SectionWrapper>
        <div>
          <SectionHeader title="Our focus areas" />

          <div className="flex flex-col gap-5 text-black mt-5">
            {focusAreas.map((focusArea) => (
              <Accordion
                type="single"
                collapsible
                defaultValue={focusAreas[0].title}
                key={focusArea.id}
              >
                <AccordionItem value={focusArea.title} className="border-b">
                  <AccordionTrigger className="text-left">
                    <h3
                      className={`flex sub-section-title-typography dark:text-white font-semibold text-left `}
                    >
                      <span className="bebas-font font-light">
                        0{focusArea.id}{" "}
                      </span>
                      <span className="ml-5">{focusArea.title}</span>
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="ml-12 md:text-xl text-gray-700 dark:text-gray-300">
                      {focusArea.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
