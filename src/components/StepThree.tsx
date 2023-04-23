import { StepHeader } from "./StepHeader";
import { StepContent } from "./StepContent";
import BlackPink from "../assets/images/blackpink.png";

export const StepThree = () => {
  return (
    <section className="container__section mt-[75px] md:mt-[100px]">
      <StepHeader num={3} title="Send Emails & Text Messages">
        No more going through a social platform. Reach and engage your audience
        directly over email and text massage.
      </StepHeader>
      <StepContent
        category="Create & Share"
        contentOne="Embed content or create something new to share."
        contentTwo="Share content over email, text message or your homepage."
        picture={BlackPink}
      >
        Reach Your <br className="hidden lg:block" />
        Audience<span className="text-blue">Directly.</span>
      </StepContent>
    </section>
  );
};
