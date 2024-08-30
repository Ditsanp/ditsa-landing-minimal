import SectionHeader from "@/components/reusables/section-header";
import SectionWrapper from "@/components/wrappers/section-wrapper";
import { SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "lucide-react";

const people = [
  {
    name: "Manish Pyakurel",
    role: "Project Manager",
    imageUrl: "/images/members/manish.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Sabin Giri",
    role: "Digital Marketing Manager",
    imageUrl: "/images/members/bishesh.jpg",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Sandesh Pyakurel",
    role: "Backend Developer",
    imageUrl: "/images/members/sandesh.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },

  {
    name: "Sulav Baral",
    role: "Frontend Developer",
    imageUrl: "/images/members/manish.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Sarjyant Shrestha",
    role: "Graphics Designer ,UI/UX",
    imageUrl: "/images/members/sarjyant.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Rodit Nepal",
    role: "Business Development Manager",
    imageUrl: "/images/members/rodit.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },

  {
    name: "Bishesh Pokhrel",
    role: "Social Media Manager / SEO Head",
    imageUrl: "/images/members/bishesh.jpg",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Subashish Shrestha",
    role: "Content Writer",
    imageUrl: "/images/members/subhashish.jpg",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  {
    name: "Amrit GC",
    role: "Video Content Creator",
    imageUrl: "/images/members/manish.JPG",
    instagram: "https://www.instagram.com/bishesh._p/",
    linkedin: "https://www.instagram.com/bishesh._p/",
  },
  // More people...
];

export default function Page() {
  return (
    <SectionWrapper>
      <SectionHeader title="Meet our team" />
      <div className="mx-auto grid gap-x-8 gap-y-20">
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {person.linkedin && (
                      <>
                        <SiLinkedin className="h-4 w-4" />
                      </>
                    )}
                    {person.instagram && (
                      <>
                        <SiInstagram className="h-4 w-4" />
                      </>
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
