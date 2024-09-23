import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/wrappers/section-wrapper";
import { CheckCircle, Users, Rocket, Award, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <SectionWrapper>
      <header className="bg-accent-red/70 text-primary-foreground dark:text-white py-12">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Ditsa</h1>
          <p className="text-xl">
            Empowering businesses through innovative technology solutions
          </p>
        </div>
      </header>

      <div className="mx-auto py-12 space-y-16">
        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Company&apos;s Journey
          </h2>
          <p className="text-sm md:text-lg">
            Ditsa was born from a simple yet profound realization: technology
            has the power to solve complex problems and improve the day-to-day
            lives of individuals and organizations alike. Founded in [Insert
            Year], we began our journey as a small team of tech enthusiasts
            committed to making a difference through innovation. Over the years,
            we have evolved into a full-fledged information technology company,
            empowering businesses to harness the power of digital solutions.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Purpose and Goals
          </h2>
          <p className="text-sm md:text-lg mb-4">
            At Ditsa, our mission is to leverage technology for social good. We
            believe that innovation shouldn&apos;t just be about profitability;
            it should also enrich lives and create positive social change.
          </p>
          <p className="text-sm md:text-lg">
            Our goals are simple yet impactful: to develop cutting-edge digital
            solutions that simplify everyday activities for businesses while
            enhancing user experiences. We strive to be at the forefront of
            technological advancements that benefit humanity, ensuring our
            services not only meet client needs but also contribute positively
            to the world at large.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">Our Team</h2>
          <Card>
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <p className="text-sm md:text-lg">
                Our team is our greatest asset. At Ditsa, we have assembled a
                diverse group of passionate professionals, each bringing their
                unique expertise to the table. From web designers and developers
                to digital marketers and software engineers, our team is united
                by a common vision: to bring innovative solutions to life.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Our Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Marketing",
                icon: <Rocket className="w-12 h-12" />,
              },
              {
                title: "Web Design and Development",
                icon: <CheckCircle className="w-12 h-12" />,
              },
              {
                title: "App Design and Development",
                icon: <Rocket className="w-12 h-12" />,
              },
              {
                title: "Software Solutions for Enterprises",
                icon: <CheckCircle className="w-12 h-12" />,
              },
            ].map((offering, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start space-x-4">
                  {offering.icon}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground">
                      We provide comprehensive {offering.title.toLowerCase()}{" "}
                      services tailored to meet the needs of modern businesses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Customer Opinions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "[Customer Name]",
                company: "[Company]",
                text: "Ditsa transformed our online presence! Their innovative strategies in digital marketing helped us reach a wider audience than we ever imagined.",
              },
              {
                name: "[Customer Name]",
                company: "[Company]",
                text: "Working with Ditsa has been a game-changer for our business. Their attention to detail in web design created a website that truly reflects our brand.",
              },
              {
                name: "[Customer Name]",
                company: "[Company]",
                text: "The team at Ditsa goes above and beyond to deliver outstanding software solutions. Their dedication and expertise helped us reduce operational costs significantly.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <MessageSquare className="w-8 h-8 text-primary mb-4" />
                  <p className="italic mb-4">{testimonial.text}</p>
                  <p className="font-semibold">
                    {testimonial.name}, {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Achievements
          </h2>
          <ul className="space-y-4 list-disc list-inside text-sm md:text-lg">
            <li>
              Launching [insert number] successful digital marketing campaigns
              that increased client visibility and engagement.
            </li>
            <li>
              Designing and developing over [insert number] websites that span
              various industries, each tailored to meet specific client needs.
            </li>
            <li>
              Receiving the [insert industry award or recognition] for
              excellence in technology solutions in [insert year], acknowledging
              our dedication to quality and impact.
            </li>
          </ul>
        </section>

        <section className="bg-muted p-8 rounded-lg">
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sm md:text-lg mb-6">
            Join us on this exciting journey towards innovation and positive
            change. Whether you&apos;re looking to enhance your digital
            marketing strategy, design a stunning website, or develop custom
            software solutions, Ditsa is here to help.
          </p>
          <Button asChild className="bg-ditsa-cyan font-extrabold" size="lg">
            <Link href={"/work-with-us"}>Contact Us Today</Link>
          </Button>
        </section>
      </div>
    </SectionWrapper>
  );
}
