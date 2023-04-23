import smile from "../assets/images/icons/Smile_emoji.png";
import happy from "../assets/images/icons/Happy_emoji.png";
import party from "../assets/images/icons/Party_emoji.png";

const features = [
  {
    title: "Reduced Anxiety",
    description: "Never worry about losing your audience",
    icon: smile,
  },
  {
    title: "Lower Workload",
    description: "Just share one link. We'll handle the rest.",
    icon: happy,
  },
  {
    title: "More Time",
    description: "Spend less time on marketing tools",
    icon: party,
  },
];

export const Features = () => {
  return (
    <section className="container__section mt-[75px] md:mt-[100px]">
      <div className="text-center">
        <h2 className="heading mb-8">Why Creators Love Marico</h2>

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="w-full flex items-center justify-center gap-4 mb-2">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  width={20}
                  height={20}
                />
                <h4 className="text-[18px] sm:text-[24px] font-semibold">
                  {feature.title}
                </h4>
              </div>
              <p className="text-[12px] sm:text-[16px] font-normal text-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
