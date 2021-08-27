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
  <button type={type} onClick={onClick}>
    {label}
  </button>
);
