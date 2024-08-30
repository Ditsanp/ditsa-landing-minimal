import { useTheme } from "next-themes";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import ThemeSwitcher from "../atoms/theme-switcher";
import BurgerMenu from "../molecules/burger-menu";
import Link from "next/link";
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
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <BurgerMenu />
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  );
}
