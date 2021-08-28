type Props = {
  label: string;
  type?: 'button' | 'submit';
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  label,
  type = 'button',
  onClick,
}) => (
  <button type={type} onClick={onClick} className="bg-red-500 rounded font-bold text-white p-2 w-full">
    {label}
  </button>
);
