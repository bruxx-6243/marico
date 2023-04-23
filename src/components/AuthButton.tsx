interface Props {
  icon: string;
  text: string;
  onClick: () => void;
}

export const AuthButton: React.FC<Props> = ({
  icon,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="flex items-center justify-center gap-x-[15px] bg-black text-white py-[10px] px-[20px] rounded-md border border-white text-[14px] sm:text-[16px] w-[300px]"
    >
      <img src={icon} alt="logo" width={25} height={25} />
      <p>{text}</p>
    </button>
  );
};
