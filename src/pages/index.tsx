import { useGetMembersQuery } from '../graphql/generated/graphql';

import { Heading01 } from '../components/atoms/Heading01';
import { Heading02 } from '../components/atoms/Heading02';
import { Select } from '../components/atoms/Select';

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
  const { data, loading } = useGetMembersQuery();
  if (loading) return null;
  const formattedMembersData = data.members.map((member) => ({
    id: member.id.toString(),
    value: member.name,
  }));
  return (
    <div>
      <Heading01 text="Dispatch unit" />
      <Heading02 text="Choose member!" />
      <Select items={formattedMembersData} defaultValue="メンバーを選択" />
      <Heading02 text="Choose skill!" />
      <Select items={SKILLS} defaultValue="スキルを選択" />
      <button type="button">Dispatch!</button>
    </div>
  );
};

export default Home;
