import { PlanProps } from "../assets";
import check from "../assets/images/icons/Check.png";

export const Card: React.FC<PlanProps> = (props) => {
  return (
    <div
      className={`shrink-0 border border-gray rounded-2xl p-[30px] bg-[#1E1E1E] ${
        props.index == 1 && "bg-blue text-white border-transparent"
      }`}
    >
      <h4 className="text-[25px] font-medium">{props.format}</h4>
      <span
        className={` text-[14px] ${
          props.index == 1 ? "text-white" : "text-[#B4B1B1]"
        }`}
      >
        {props.description}
      </span>
      {props.amount ? (
        <>
          <div className="flex items-center">
            <h2 className="text-[50px] font-bold">${props.amount}</h2>
            <p
              className={`mt-8 ${
                props.index == 1 ? "text-white" : "text-gray"
              }`}
            >
              Per month
            </p>
          </div>
          <p
            className={`text-[14px] ${
              props.index == 1 ? "text-white" : "text-gray"
            } -mt-2 underline decoration-solid`}
          >
            or ${props.per_month}/mo, billed monthly
          </p>
        </>
      ) : (
        <h2 className="text-[50px] font-bold">Free</h2>
      )}

      <div className=" mt-8">
        <p className="text-[16px] font-bold">Collect Unlimited subscribers</p>
        <p className="text-[14px] font-normal">
          ${props.sub_month}{" "}
          {props.sub_month > 500 ? "free monthly emails" : "monthly emails"}
        </p>
        <p
          className={`text-[14px] ${
            props.index == 1 ? "text-white" : "text-gray"
          } my-[40px] text-center`}
        >
          {props.amount
            ? "Purchase more for $0.002 per email"
            : "Upgrade to send more emails"}
        </p>
        <p className="text-[14px] font-bold mb-6">{props.content_format}</p>
        <ul className="mb-6">
          {props.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <img src={check} width={17} height={10.91} />
              <p className="text-[12px] font-normal">{feature}</p>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-[10px] px-[20px] rounded-xl text-[14px] sm:text-[16px] border-[2px]  ${
            props.index == 1
              ? "text-blue border-transparent bg-white"
              : "border-blue text-white"
          }`}
        >
          {props.amount ? "Start Free 14-day Trial" : "Start For Free"}
        </button>
      </div>
    </div>
  );
};
