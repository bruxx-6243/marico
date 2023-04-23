import { Button } from "./Button";

interface Props {
  children: React.ReactNode;
  category: string;
  contentOne: string;
  contentTwo: string;
  picture: string;
}

export const StepContent: React.FC<Props> = ({
  children,
  category,
  contentOne,
  contentTwo,
  picture,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
      <div className="px-[20px] flex-grow">
        <p className="paragraph mb-9">{category}</p>
        <div>
          <h4 className="heading">{children}</h4>
        </div>
        <ol className="mb-10">
          <li className="flex gap-2">
            <span className="marker">1</span>
            <p>{contentOne}</p>
          </li>
          <li className="flex gap-2 mt-2">
            <span className="marker">2</span>
            <p>{contentTwo}</p>
          </li>
        </ol>
        <div className="flex justify-center sm:justify-start gap-2">
          <Button bgColor="blue" color="white">
            Get Started Now
          </Button>
          <Button bgColor="inherit" color="gray" border={true}>
            View A Demo
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={picture} alt={category} />
      </div>
    </div>
  );
};
