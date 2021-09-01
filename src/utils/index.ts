import { GetLinkSkillsQuery } from '../graphql/generated/graphql';

export const sortedLinkSkills = ({
  linkSkills,
}: Pick<GetLinkSkillsQuery, 'linkSkills'>) =>
  [...linkSkills].sort((a, b) => b.effect - a.effect);
