import {
  useGetMembersQuery,
  useGetLinkSkillsLazyQuery,
} from '../graphql/generated/graphql';
import { useSelect } from '../hooks/useSelect';

import { Heading01 } from '../components/atoms/Heading01';
import { Heading02 } from '../components/atoms/Heading02';
import { Select } from '../components/atoms/Select';
import { Button } from '../components/atoms/Button';
import { ErrorMessage } from '../components/atoms/ErrorMessage'

const SKILLS = [
  {
    id: 'comedy',
    value: 'コメディ',
  },
  {
    id: 'action',
    value: 'アクション',
  },
  {
    id: 'serious',
    value: 'シリアス',
  },
];
const Home = () => {
  const selectMember = useSelect('');
  const selectSkill = useSelect('');

  const { data: getMemberData, loading: getMemberDataLoading } =
    useGetMembersQuery();
  const [
    getLinkSkills,
    { data: getLinkSkillsData, loading: getLinkSkillsLoading },
  ] = useGetLinkSkillsLazyQuery();

  if (getMemberDataLoading) {
    return null;
  }
  const formattedMembersData = getMemberData.members.map((member) => ({
    id: member.id.toString(),
    value: member.name,
  }));

  const findMatchSkills = () => {
    const { selectedValue: selectedMemberId } = selectMember;
    const { selectedValue: selectedSkill } = selectSkill;
    if (!selectedMemberId || !selectedSkill.length) {
      return;
    }
    getLinkSkills({
      variables: {
        memberId: Number(selectedMemberId),
        skill: selectedSkill,
      },
    });
  };
  const dispatchMemberClass = (memberId: number) =>
    `member${memberId < 10 ? '0' : ''}${memberId}`;
  return (
    <div className="w-3/5 mx-auto">
      <Heading01 text="Dispatch unit" />
      <div className="border rounded mt-4 p-4">
        <div className="space-y-2">
          <Heading02 text="Choose a member!" />
          <Select
            items={formattedMembersData}
            defaultValue="メンバーを選択"
            onChange={selectMember.onChange}
          />
          <ErrorMessage message="※メンバーを選択してください" />
        </div>
        <div className="mt-4 space-y-2">
          <Heading02 text="Choose a skill!" />
          <Select
            items={SKILLS}
            defaultValue="スキルを選択"
            onChange={selectSkill.onChange}
          />
          <ErrorMessage message="※スキルを選択してください" />
        </div>
        <div className="w-1/2 mt-4 mx-auto">
          <Button label="Dispatch!" onClick={findMatchSkills} />
        </div>
      </div>
      {getLinkSkillsLoading && <p>loading...</p>}
      {getLinkSkillsData && getLinkSkillsData.linkSkills &&
      <>
      {!getLinkSkillsData.linkSkills.length ? (<p>データなし</p>) :
        (
          <>
            {getLinkSkillsData.linkSkills.map((item, index) => (
              <div key={index}>
                <Heading02 text={item.skill_name} />
                {item.is_act2 && <p>Act2</p>}
                <dl>
                  <dt>category</dt>
                  <dd>{item.category_name}%</dd>
                  <dt>effect</dt>
                  <dd>{item.effect}%</dd>
                </dl>
                <ul>
                  {item.members.map((member) => (
                    <li
                      key={member.id}
                      className={`text-${dispatchMemberClass(member.id)}`}
                    >
                      {member.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )
      }
      </>
      }
    </div>
  );
};

export default Home;
