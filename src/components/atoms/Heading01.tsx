type Props = {
  text: string;
};

export const Heading01: React.FC<Props> = ({ text }) => <h1 className="text-4xl">{text}</h1>;
