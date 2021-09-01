type Props = {
  text: string;
};

export const ResultHeading02: React.FC<Props> = ({ text }) => (
  <h2 className="text-2xl">{text}</h2>
);
