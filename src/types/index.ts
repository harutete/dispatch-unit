export interface Members {
  id: number;
  name: string;
}
export interface LinkSkills {
  __typename?: string;
  category: string;
  category_name: string;
  effect: number;
  skill_name: string;
  is_act2: boolean;
  members: Members[];
}
