interface Props {
  num: number;
  title: string;
  children: string;
}

export const StepHeader: React.FC<Props> = ({
  num,
  title,
  children,
  ...props
}) => {
  return (
    <div {...props} className="flex flex-col items-center text-center">
      <span className="step">STEP {num}</span>
      <h2 className="heading">{title}</h2>
      <p className="paragraph mb-6 text-gray">{children}</p>
    </div>
  );
};
