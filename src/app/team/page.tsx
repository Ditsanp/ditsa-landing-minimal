import SectionHeader from "@/components/reusables/section-header";
import SectionWrapper from "@/components/wrappers/section-wrapper";
import { SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "lucide-react";

const people = [
  {
    name: "Manish Pyakurel",
    role: "Project Manager",
    imageUrl: "/images/members/manish.JPG",
    instagram: "https://www.instagram.com/_manishpy",
    linkedin: "https://www.linkedin.com/in/manish-pyakurel-a59a741b8",
  },
  {
    name: "Sabin Giri",
    role: "Digital Marketing Manager",
    imageUrl: "/images/members/sabin.jpeg",
    instagram: "#",
    linkedin:
      "https://www.linkedin.com/in/sabin-giri-a695b7208?trk=contact-info",
  },
  {
    name: "Sandesh Pyakurel",
    role: "Backend Developer",
    imageUrl: "/images/members/sandesh.JPG",
    instagram: "#",
    linkedin:
      "https://www.linkedin.com/in/sandesh-pyakurel-714394154?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    name: "Sulav Baral",
    role: "Frontend Developer",
    imageUrl: "/images/members/sulav.jpg",
    instagram: "https://www.instagram.com/mr.ialboe/",
    linkedin: "https://www.linkedin.com/in/sulav-baral/",
  },
  {
    name: "Sarjyant Shrestha",
    role: "Graphics Designer ,UI/UX",
    imageUrl: "/images/members/sarjyant.JPG",
    instagram: "https://www.instagram.com/sarjyantshrestha/",
    linkedin: "https://www.linkedin.com/in/sarjyantshrestha/",
  },
  {
    name: "Rodit Nepal",
    role: "Business Development Manager",
    imageUrl: "/images/members/rodit.JPG",
    instagram: "https://www.instagram.com/_rodit_/",
    linkedin: "#",
  },

  {
    name: "Bishesh Pokhrel",
    role: "Social Media Manager / SEO Head",
    imageUrl: "/images/members/bishesh.jpg",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.linkedin.com/in/bishesh-pokharel-041481204/",
  },
  {
    name: "Subashish Shrestha",
    role: "Content Writer",
    imageUrl: "/images/members/subhashish.jpg",
    instagram: "https://www.instagram.com/shubhashish.__/",
    linkedin: "#",
  },
  {
    name: "Amrit GC",
    role: "Video Content Creator",
    imageUrl: "/images/members/amrit.webp",
    instagram: "https://www.instagram.com/amrit_chhetri_03/",
    linkedin: "#",
  },
  // More people...
];

export default function Page() {
  return (
    <SectionWrapper>
      <SectionHeader title="Meet our team" />
      <div className="mx-auto grid gap-x-8 gap-y-20">
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Meet the people behind DITSA. We are a team of passionate
            individuals who are dedicated to making a difference in the world of
            digital transformation. Our team is made up of experts in various
            fields, including software development, design, marketing, and
            business development. We are committed to helping our clients
            succeed by providing them with innovative solutions and advanced
            technology. Get to know our team below.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pb-20"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg leading-7 tracking-tight text-gray-900 dark:text-gray-400 font-bold">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-ditsa-cyan dark:text-ditsa-lightestcyan">
                    {person.role}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {person.linkedin !== "#" && (
                      <a
                        href={person.linkedin}
                        //open in new tab
                        target="_blank"
                      >
                        <SiLinkedin className="h-4 w-4" />
                      </a>
                    )}
                    {person.instagram !== "#" && (
                      <a
                        href={person.instagram}
                        //open in new tab
                        target="_blank"
                      >
                        <SiInstagram className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
