type Props = {
  items: {
    id: string;
    value: string;
  }[];
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<Props> = ({ items, defaultValue, onChange }) => (
  <select onChange={onChange}>
    {!!defaultValue.length && <option value="">{defaultValue}</option>}
    {items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.value}
      </option>
    ))}
  </select>
);
