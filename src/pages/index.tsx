import { useState } from 'react';

import {
  useGetMembersQuery,
  useGetLinkSkillsLazyQuery,
} from '../graphql/generated/graphql';
import { useSelect } from '../hooks/useSelect';
import { sortedLinkSkills } from '../utils';

import { Heading01 } from '../components/atoms/Heading01';
import { Heading02 } from '../components/atoms/Heading02';
import { Select } from '../components/atoms/Select';
import { Button } from '../components/atoms/Button';
import { ErrorMessage } from '../components/atoms/ErrorMessage';
import { ResultHeading02 } from '../components/atoms/ResultHeading02';

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
  const [isMemberNull, setIsMemberNull] = useState(false);
  const [isSkillNull, setIsSkillNull] = useState(false);
  const { data: getMemberData, loading: getMemberDataLoading } =
    useGetMembersQuery();
  const [
    getLinkSkills,
    { data: getLinkSkillsData, loading: getLinkSkillsLoading },
  ] = useGetLinkSkillsLazyQuery();

  const validateSelectedValue = (memberId: string, skill: string) => {
    if (!memberId) {
      setIsMemberNull(true);
    } else {
      setIsMemberNull(false);
    }
    if (!skill) {
      setIsSkillNull(true);
    } else {
      setIsSkillNull(false);
    }
  };
  const findMatchSkills = () => {
    const { selectedValue: selectedMemberId } = selectMember;
    const { selectedValue: selectedSkill } = selectSkill;

    if (!selectedMemberId || !selectedSkill) {
      validateSelectedValue(selectedMemberId, selectedSkill);
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
    `member-${memberId < 10 ? '0' : ''}${memberId}`;

  if (getMemberDataLoading) {
    return null;
  }

  const formattedMembersData = getMemberData.members.map((member) => ({
    id: member.id.toString(),
    value: member.name,
  }));

  return (
    <div className="w-3/5 mx-auto">
      <Heading01 text="Dispatch unit" />
      <div className="border rounded mt-4 p-4 space-y-4">
        <div className="space-y-2">
          <Heading02 text="Choose a member!" />
          <Select
            items={formattedMembersData}
            defaultValue="メンバーを選択"
            onChange={selectMember.onChange}
          />
          {isMemberNull && (
            <ErrorMessage message="※メンバーを選択してください" />
          )}
        </div>
        <div className="space-y-2">
          <Heading02 text="Choose a skill!" />
          <Select
            items={SKILLS}
            defaultValue="スキルを選択"
            onChange={selectSkill.onChange}
          />
          {isSkillNull && <ErrorMessage message="※スキルを選択してください" />}
        </div>
        <div className="w-1/2 mx-auto">
          <Button label="Dispatch!" onClick={findMatchSkills} />
        </div>
      </div>
      {getLinkSkillsLoading && <p>loading...</p>}
      {getLinkSkillsData && getLinkSkillsData.linkSkills && (
        <>
          {!getLinkSkillsData.linkSkills.length ? (
            <p>データなし</p>
          ) : (
            <>
              {sortedLinkSkills(getLinkSkillsData).map((item, index) => (
                <div
                  key={index}
                  className="rounded bg-gray-100 bg-opacity-50 mt-4 p-4"
                >
                  <div className="flex items-center justify-between rounded bg-gray-200 p-2">
                    <ResultHeading02 text={item.skill_name} />
                    {item.is_act2 && (
                      <p className="rounded-full bg-gray-600 text-white py-1 px-4">
                        Act2
                      </p>
                    )}
                  </div>
                  <dl className="space-y-2">
                    <div className="flex space-x-2 mt-2">
                      <dt>category</dt>
                      <dd>{item.category_name}</dd>
                    </div>
                    <div className="flex space-x-2">
                      <dt>effect</dt>
                      <dd>{item.effect}%</dd>
                    </div>
                  </dl>
                  <ul className="flex space-x-2 mt-2">
                    {item.members.map((member) => (
                      <li
                        key={member.id}
                        className={`bg-${dispatchMemberClass(member.id)} rounded text-white py-1 px-2`}
                      >
                        {member.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
