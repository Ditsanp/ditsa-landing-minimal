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
    title: "Work",
    href: "/#work",
  },
  {
    title: "Services",
    href: "/#services",
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
            <Link
              prefetch={false}
              href="/"
              aria-label="DITSA home"
              className="flex items-center"
            >
              <span
                aria-hidden="true"
                className="ditsa-brandmark h-10 w-10 md:h-12 md:w-12"
              />
            </Link>

            <ul className="flex items-center gap-2 md:gap-3">
              <li className="hidden items-center gap-4 text-sm font-medium md:flex lg:mr-2 lg:gap-6 lg:text-base xl:mr-4 xl:gap-8 xl:text-[17px]">
                {navItems.map((item, index) => {
                  if (item.title === "Company") {
                    return (
                      <DropdownMenu key={index}>
                        <DropdownMenuTrigger asChild>
                          <div className="flex cursor-pointer items-center gap-1.5 transition-colors hover:text-ditsa-cyan dark:hover:text-ditsa-lightcyan">
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
                    <Link
                      key={index}
                      href={item.href}
                      className="transition-colors hover:text-ditsa-cyan dark:hover:text-ditsa-lightcyan"
                    >
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
