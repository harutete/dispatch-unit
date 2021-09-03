import { ResultHeading02 } from '../atoms/ResultHeading02';
import { MemberList } from './MemberList';
import { SkillData } from './SkillData';


type Props = {
  // TODO 型定義修正
  results: any
}

export const ResultLinkSkillList: React.FC<Props> = ({ results: { skill_name, is_act2, category_name, effect, members } }) => (
  <div
    className="rounded bg-gray-100 bg-opacity-50 mt-4 p-4"
  >
    <div className="flex items-center justify-between rounded bg-gray-200 p-2">
      <ResultHeading02 text={skill_name} />
      {is_act2 && (
        <p className="rounded-full bg-gray-600 text-white py-1 px-4">
          Act2
        </p>
      )}
    </div>
    <SkillData categoryName={category_name} effect={effect} />
    <MemberList members={members} />
  </div>
)