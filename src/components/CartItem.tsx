import { DataProps } from "../assets/data";

export const CartItem: React.FC<DataProps> = (props) => {
  return (
    <div className="shrink-0 border border-gray rounded-2xl p-[30px] hover:bg-[#1E1E1E] transition duration-200">
      <img src={props.icon} alt={props.title} width={40} height={40} />
      <h4 className="my-[17px] text-[14px] sm:text-[18px] font-semibold">
        {props.title}
      </h4>
      <p>{props.description}</p>
    </div>
  );
};
