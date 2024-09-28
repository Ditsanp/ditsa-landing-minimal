import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative dark:bg-transparent py-8 w-full flex flex-col  justify-center overflow-hidden h-full">
      <div className="area h-full">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <MaxWidthWrapper>
        <Section2 />
        <Section1 />
      </MaxWidthWrapper>
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-10">
        <p className="text-center px-5 text-sm md:text-lg text-white">
          Copyright &copy; 2024 DITSA. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-center mb-20">
      <h1 className="text-[14vw] averta-bold leading-[0.8] mt-10 text-white">
        <span className="dark:text-gradient bebas-font">DITSA</span>
        <span className="text-accent-red">.</span>
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <div className="text-lg md:text-xl flex flex-row items-center justify-center w-full gap-5 md:gap-10 text-white">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="work-with-us">Contact</a>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-5 md:gap-10 mt-10">
        <a href=" https://www.facebook.com/profile.php?id=100086586747707">
          <SiFacebook size={18} className="text-white" />
        </a>
        <a href="https://www.instagram.com/ditsa_marketing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <SiInstagram size={18} className="text-white" />
        </a>
      </div>
    </div>
  );
};
