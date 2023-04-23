import { StepHeader } from "./StepHeader";
import Mobile from "../assets/images/Mobile.png";

export const StepTwo = () => {
  return (
    <section className="container__section mt-[75px] md:mt-[100px]">
      <StepHeader num={2} title="Share Your Homepage">
        Share your Wavium homepage link with your followers, and we'll handle
        the rest.
      </StepHeader>
      <div className="grid grid-cols-1 gap-[23px] sm:grid-cols-2 w-full mt-[75px] md:mt-[100px]">
        <div className="bg-[#1E1E1E]  pt-[40px] pl-[40px]">
          <span className="inline-block text-[#0FC65C] mb-[24px]">
            One Link
          </span>
          <h4 className="text-[#919191]  step__two-heading">ALL You Create.</h4>
          <h4 className="text-white step__two-heading">One Link</h4>
          <img src={Mobile} alt="One link all you create" />
        </div>

        <div className="bg-[#1E1E1E]  pt-[40px] pl-[40px] w-full">
          <span className="inline-block text-[#0FC65C] mb-[68px]">
            Collect Subscribers
          </span>
          <h4 className="text-[#919191] step__two-heading">
            Emails. <br /> Phone #s.
          </h4>
          <h4 className="text-white step__two-heading">All Yours.</h4>
        </div>
      </div>
    </section>
  );
};
