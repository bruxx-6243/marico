interface Props {
  children: string;
  color: string;
  bgColor: string;
  border?: boolean;
}
export const Button: React.FC<Props> = ({
  children,
  color,
  bgColor,
  border = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-${bgColor} text-${color} py-[10px] px-[20px] rounded-md text-[14px] sm:text-[16px] ${
        border && "border border-[#707070]"
      }`}
    >
      {children}
    </button>
  );
};
