import { useTheme } from "next-themes";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import ThemeSwitcher from "../atoms/theme-switcher";
import BurgerMenu from "../molecules/burger-menu";
import Link from "next/link";
import { HoverCardTrigger, HoverCard } from "../ui/hover-card";
import { Button } from "../ui/button";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import { ChevronDown } from "lucide-react";

//todo make the links disappear when the screen is small and add a hover menu

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Company",
    href: "/",
    children: [
      {
        title: "Team",
        href: "/team",
      },
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Work with us",
        href: "/work-with-us",
      },
    ],
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Ditsa-AI",
    href: "/ditsa-ai",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <>
      <header className=" flex items-center sticky top-0 bg-white dark:bg-background z-20  border-b">
        <MaxWidthWrapper>
          <nav className="h-20 max-w-[90%] mx-auto md:h-28 flex justify-between items-center  w-full">
            <Link prefetch={false} href={"/"}>
              <div className="text-4xl md:text-[45px] text-ditsa-cyan dark:text-ditsa-lightcyan bebas-font">
                DITSA
              </div>
            </Link>

            <ul className="flex space-x-4 text-2xl items-center">
              <li className="hidden md:flex items-center text-lg gap-10 mr-10">
                {navItems.map((item, index) => {
                  if (item.title === "Company") {
                    return (
                      <HoverCard key={index}>
                        <HoverCardTrigger asChild>
                          <div className="flex gap-2 items-center cursor-pointer">
                            <p>Company</p> <ChevronDown className="h-4 w-4" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-52 border py-5 bg-gray-50 text-black rounded-2xl px-10">
                          <div className="flex flex-col space-y-2">
                            {item.children?.map((subItem, idx: number) => (
                              <Link href={subItem.href} key={idx}>
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    );
                  }
                  return (
                    <Link key={index} href={item.href}>
                      <p>{item.title}</p>
                    </Link>
                  );
                })}
              </li>
              <li>
                <ThemeSwitcher />
              </li>
              <li className="md:hidden">
                <BurgerMenu />
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
