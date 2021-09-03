import { useState } from 'react';

import {
  useGetMembersQuery,
  useGetLinkSkillsLazyQuery,
} from '../graphql/generated/graphql';
import { useSelect } from '../hooks/useSelect';
import { sortedLinkSkills } from '../utils';

import { Heading01 } from '../components/atoms/Heading01';
import { ErrorMessage } from '../components/atoms/ErrorMessage';

import { SelectConditionsForm } from '../components/organisms/SelectConditionsForm';
import { ResultLinkSkillList } from '../components/organisms/ResultLinkSkillList';

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
      <SelectConditionsForm
        members={formattedMembersData}
        handleMemberChange={selectMember.onChange}
        isMemberError={isMemberNull}
        skills={SKILLS}
        handleSkillChange={selectSkill.onChange}
        isSkillError={isSkillNull}
        handleFindMatchLinkSkill={findMatchSkills}
      />
      {getLinkSkillsLoading && <p>loading...</p>}
      {getLinkSkillsData && getLinkSkillsData.linkSkills && (
        <>
          {!getLinkSkillsData.linkSkills.length ? (
            <div className="mt-4">
              <ErrorMessage message="データなし" />
            </div>
          ) : (
            sortedLinkSkills(getLinkSkillsData).map((item, index) => (
              <ResultLinkSkillList results={item} key={index} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Home;
