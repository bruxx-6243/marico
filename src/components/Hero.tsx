import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="container__section">
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-center font-bold text-[24px] sm:text-[30px]  md:text-[40px] lg:text-[60px] xl:text-[100px]">
          Own your audience. <br />
          <span className="hero__gradient">So you don't loose them.</span>
        </h1>

        <div className="my-8 sm:mt-14">
          <p className="text-center font-medium text-[18px] sm:text-[21px] sm:text-[30] md:text-[40px] max-w-[400] md:max-w-[694px]">
            Turn your audience into email and text message subscribers.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button bgColor="blue" color="white">
            Get Started Now
          </Button>
          <Button bgColor="inherit" color="gray" border={true}>
            View A Demo
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="bg-[rgba(15,198,92,.5)] w-[24px] h-[24px] rounded-full flex items-center justify-center">
            <div className="bg-[rgba(15,198,92,1)] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full" />
          </div>
          <p className="text-[12px] sm:text-[16px] font-normal text-gray">
            <span className="text-white">1000+</span> creators have already
            started
          </p>
        </div>
      </div>
    </section>
  );
};
