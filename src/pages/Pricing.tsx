import { plans } from "../assets";
import { Card } from "../components/Card";

const Pricing = () => {
  return (
    <section className="container__section w-full mt-32">
      <h2 className="heading text-center mb-[120px]">
        Choose the plan that's right for you.
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {plans.map((plan, index) => (
          <Card key={plan.id} {...plan} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
