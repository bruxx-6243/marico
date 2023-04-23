import Logo from "../assets/images/Company_logo.png";
import { texts } from "../assets/text";
import { team } from "../assets";
import arrow from "../assets/images/icons/Arrow.png";

const about = () => {
  return (
    <main className="w-full mt-32 px-[20px]">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Logo Company" />
        <span className="inline-block step my-6">OUR MISSION</span>

        <h2 className="heading text-center max-w-[900px]">
          We exist to help creators own their audience.
        </h2>
        <p className="about__para text-center">
          We believe that social platforms are taking advantage of creators.We
          want to change that and help creators fight back.
        </p>
      </div>

      <div className="flex flex-col gap-y-4 mt-[80px] max-w-[750px] mx-auto">
        {texts.map((content, index) => (
          <p key={index} className="about__para">
            {content}
          </p>
        ))}
        <p className="text-[14px] sm:text-[16px] my-[36px]">
          - The Team Marico (Olivia, William, and Noah)
        </p>
      </div>

      <div className="block mx-auto bg-gray h-[2px] max-w-[750px]" />

      <div className="mt-[80px] text-center">
        <span className="step">OUR TEAM</span>
        <h2 className="heading">We love creators</h2>
        <div className="flex justify-center">
          <div className="team__carousel flex snap-x gap-6 overflow-auto mt-[36px]">
            {team.map((person) => (
              <div
                key={person.id}
                className="shrink-0 snap-start flex flex-col items-center"
              >
                <img src={person.profile} alt={person.name} />
                <h3 className="text-[25px] text-bold">{person.name}</h3>
                <p className="text-[19px] text-gray mb-2">
                  {person.profession}
                </p>
                <a
                  href={`https://twitter.com/${person.twitter}`}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Twitter <img src={arrow} width={15.44} height={15.75} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default about;
