type Props = {
  categoryName: string;
  effect: number;
};

export const SkillData: React.FC<Props> = ({ categoryName, effect }) => (
  <dl className="space-y-2">
    <div className="flex space-x-2 mt-2">
      <dt>category</dt>
      <dd>{categoryName}</dd>
    </div>
    <div className="flex space-x-2">
      <dt>effect</dt>
      <dd>{effect}%</dd>
    </div>
  </dl>
);
