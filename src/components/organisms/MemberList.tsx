type Props = {
  members: {
    id?: number
    name?: string
  }[]
}

export const MemberList: React.FC<Props> = ({ members }) => {
  const dispatchMemberClass = (memberId: number) =>
  `member-${memberId < 10 ? '0' : ''}${memberId}`;

  return (
    <ul className="flex space-x-2 mt-2">
      {members.map((member) => (
        <li
          key={member.id}
          className={`bg-${dispatchMemberClass(
            member.id
          )} rounded text-white p-1`}
        >
          {member.name}
        </li>
      ))}
    </ul>
  )
}