import { StepContent } from "./StepContent";
import { StepHeader } from "./StepHeader";
import { Button } from "./Button";
import charlieScreen from "../assets/images/charlie.png";

export const StepOne = () => {
  return (
    <section className="container__section mt-[75px] md:mt-[100px]">
      <StepHeader num={1} title="Connect Your Content">
        Bring all of your content together and get a Homepage that automatically
        updates whenever you create anywhere online.
      </StepHeader>
      <div className="flex justify-center  mb-16">
        <Button bgColor="inherit" color="gray" border={true}>
          View Avaliable Sources
        </Button>
      </div>
      <StepContent
        category="Your Homepage"
        contentOne="Bring all of your content together into one homepage."
        contentTwo="Your page automatically updates whenever you create."
        picture={charlieScreen}
      >
        Your Content. <br className="hidden lg:block" />
        All in <span className="text-blue">One Spot</span>
      </StepContent>
    </section>
  );
};
