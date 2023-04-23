import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { StepOne } from "../components/StepOne";
import { StepThree } from "../components/StepThree";
import { StepTwo } from "../components/StepTwo";
import Twitter from "../assets/images/twitter.png";
import Audience from "../assets/images/Audience.png";

const Home = () => {
  return (
    <main className="w-full mt-12">
      <Hero />
      <Features />
      <StepOne />
      <StepTwo />
      <StepThree />
      <div className="w-full">
        <h2 className="heading text-center my-6">Experts Agree</h2>
        <img src={Twitter} alt="Comment from Twitter" />
      </div>
      <div className="relative mt-[100px] w-full flex justify-center items-center">
        <img src={Audience} alt="Audience" />
        <h2 className="text-[20px] sm:text-[50px] lg:text-[70px] text-center absolute max-w-[1236px] px-[20px]">
          We've helped over 1,000 creators claim control of their audience.
        </h2>
      </div>
    </main>
  );
};

export default Home;
