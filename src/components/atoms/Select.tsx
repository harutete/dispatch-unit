type Props = {
  items: {
    id: string;
    value: string;
  }[];
  defaultValue: string;
};

export const Select: React.FC<Props> = ({ items, defaultValue }) => (
  <select>
    {!!defaultValue.length && <option value="">{defaultValue}</option>}
    {items.map((item) => (
      <option key={item.id} id={item.id} value={item.value}>
        {item.value}
      </option>
    ))}
  </select>
);
