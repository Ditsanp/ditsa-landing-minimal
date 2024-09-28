import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import ThemeSwitcher from "../atoms/theme-switcher";
import BurgerMenu from "../molecules/burger-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    href: "/#services",
  },
  {
    title: "Ditsa-AI",
    href: "/ditsa-ai",
  },
  {
    title: "Contact Us",
    href: "#contact",
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
                      <DropdownMenu key={index}>
                        <DropdownMenuTrigger asChild>
                          <div className="flex gap-2 items-center cursor-pointer">
                            <p>Company</p> <ChevronDown className="h-4 w-4" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>Our Company</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {item.children?.map((subItem, idx: number) => (
                            <DropdownMenuItem asChild key={idx}>
                              <Link href={subItem.href}>{subItem.title}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
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
