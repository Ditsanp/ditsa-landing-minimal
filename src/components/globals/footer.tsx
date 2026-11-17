import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

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
  const year = new Date().getFullYear();

  return (
    <div>
      <SocialLinks />
      <div className="mt-10">
        <p className="text-center px-5 text-sm md:text-lg text-white">
          Copyright &copy; {year} Ditsa Technology Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="mb-10 flex flex-col items-center">
      <h1 className="text-[14vw] averta-bold leading-[0.8] mt-10 text-white">
        <span className="bebas-font">DITSA</span>
        <span className="text-accent-red dark:text-ditsa-lightcyan">.</span>
      </h1>
      <div className="mt-6 w-full px-5 text-center text-white">
        <p className="text-base font-semibold md:text-lg">
          Ditsa Technology Pvt. Ltd.
        </p>
        <div className="mx-auto mt-4 grid max-w-4xl gap-3 text-sm md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-semibold text-white/70">Registered Office</p>
            <p className="mt-1">Madhyapur Thimi, Bhaktapur, Nepal</p>
          </div>
          <div>
            <p className="font-semibold text-white/70">Phone</p>
            <a
              className="mt-1 inline-block hover:underline"
              href="tel:+9779867676078"
            >
              +977 9867676078
            </a>
          </div>
          <div>
            <p className="font-semibold text-white/70">Email</p>
            <a
              className="mt-1 inline-block hover:underline"
              href="mailto:info@ditsa.com.np"
            >
              info@ditsa.com.np
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <div className="mt-8 flex w-full items-center justify-center gap-6 md:gap-8">
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/ditsatechnology?rpxt=MXEwNjFlanVkNGxiOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:text-ditsa-lightcyan"
        >
          <SiInstagram size={20} />
        </a>
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/share/1AARPNZCHM/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:text-ditsa-lightcyan"
        >
          <SiFacebook size={20} />
        </a>
        <a
          aria-label="TikTok"
          href="https://www.tiktok.com/@ditsa.technology?_r=1&_t=ZS-9BTO5oDmUHX"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:text-ditsa-lightcyan"
        >
          <SiTiktok size={20} />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/company/ditsa-technology/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:text-ditsa-lightcyan"
        >
          <SiLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};
