import {
  useGetMembersQuery,
  useGetLinkSkillsLazyQuery,
} from '../graphql/generated/graphql';
import { useSelect } from '../hooks/useSelect';

import { Heading01 } from '../components/atoms/Heading01';
import { Heading02 } from '../components/atoms/Heading02';
import { Select } from '../components/atoms/Select';
import { Button } from '../components/atoms/Button';

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
    const { selectedValue: selectedMember } = selectMember;
    const { selectedValue: selectedSkill } = selectSkill;
    if (!selectedMember.length || !selectedSkill.length) {
      return;
    }
    getLinkSkills({
      variables: {
        member: selectedMember,
        skill: selectedSkill,
      },
    });
  };
  return (
    <div>
      <Heading01 text="Dispatch unit" />
      <Heading02 text="Choose a member!" />
      <Select
        items={formattedMembersData}
        defaultValue="メンバーを選択"
        onChange={selectMember.onChange}
      />
      <Heading02 text="Choose a skill!" />
      <Select
        items={SKILLS}
        defaultValue="スキルを選択"
        onChange={selectSkill.onChange}
      />
      <Button label="Dispatch!" onClick={findMatchSkills} />
      {getLinkSkillsLoading && <p>loading...</p>}
      {getLinkSkillsData && getLinkSkillsData.linkSkills && (
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
                  <li key={member.id}>{member.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
