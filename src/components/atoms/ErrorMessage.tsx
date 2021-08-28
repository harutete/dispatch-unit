type Props = {
  message: string;
};

export const ErrorMessage: React.FC<Props> = ({ message }) => (
  <p className="text-red-600 text-sm">{message}</p>
);
