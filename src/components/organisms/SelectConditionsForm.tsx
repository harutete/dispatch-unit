import { Heading02 } from '../atoms/Heading02';
import { Select } from '../atoms/Select';
import { Button } from '../atoms/Button';
import { ErrorMessage } from '../atoms/ErrorMessage';

type SelectItem = {
  id: string;
  value: string;
};
type Props = {
  members: SelectItem[];
  handleMemberChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isMemberError: boolean;
  skills: SelectItem[];
  handleSkillChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isSkillError: boolean;
  handleFindMatchLinkSkill: () => void;
};

export const SelectConditionsForm: React.FC<Props> = ({
  members,
  handleMemberChange,
  isMemberError,
  skills,
  handleSkillChange,
  isSkillError,
  handleFindMatchLinkSkill,
}) => (
  <div className="border rounded mt-4 p-4 space-y-4">
    <div className="space-y-2">
      <Heading02 text="Choose a member!" />
      <Select
        items={members}
        defaultValue="メンバーを選択"
        onChange={handleMemberChange}
      />
      {isMemberError && <ErrorMessage message="※メンバーを選択してください" />}
    </div>
    <div className="space-y-2">
      <Heading02 text="Choose a skill!" />
      <Select
        items={skills}
        defaultValue="スキルを選択"
        onChange={handleSkillChange}
      />
      {isSkillError && <ErrorMessage message="※スキルを選択してください" />}
    </div>
    <div className="w-1/2 mx-auto">
      <Button label="Dispatch!" onClick={handleFindMatchLinkSkill} />
    </div>
  </div>
);
