import { LinkSkills } from '../types'

export const sortedLinkSkills = (linkSkills: LinkSkills[]) => linkSkills.sort((a: LinkSkills, b: LinkSkills) => b.effect - a.effect)