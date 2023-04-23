import Logo from "../assets/images/Logo.png";
import LogoCompany from "../assets/images/Company_logo.png";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <footer className="container__section mt-[100px]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo company" className="w-[80px] h-[80px]" />
          <h2 className="heading">Get Started Now</h2>
          <p className="paragraph mb-4">
            Setup is easy and takes under 5 minutes.
          </p>
          <Button color="white" bgColor="blue">
            Get Started Now
          </Button>
          <div className="flex items-center gap-4 mt-2">
            <div className="bg-[rgba(15,198,92,.5)] w-[18px] h-[18px] rounded-full flex items-center justify-center">
              <div className="bg-[rgba(15,198,92,1)] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full" />
            </div>
            <p className="text-[12px] sm:text-[16px] font-normal text-gray">
              <span className="text-white">1000+</span> creators have already
              started
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[20px] mt-[80px]">
        <div className="flex flex-col">
          <img src={LogoCompany} alt="Logo company" className="w-[100px]" />
          <p className="text-gray text-[12px]">info@marico.co</p>
        </div>
        <p className="text-white text-[14px]">
          &#169; BRUXX DEV {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
