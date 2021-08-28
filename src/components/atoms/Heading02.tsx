type Props = {
  text: string;
};

export const Heading02: React.FC<Props> = ({ text }) => (
  <h2 className="text-2xl border-b border-gray-500 px-2 pb-2">{text}</h2>
);
