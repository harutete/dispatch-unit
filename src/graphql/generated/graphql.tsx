import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LinkSkill = {
  __typename?: 'LinkSkill';
  category?: Maybe<Scalars['String']>;
  category_name?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['Int']>;
  skill_name?: Maybe<Scalars['String']>;
  is_act2?: Maybe<Scalars['Boolean']>;
  members?: Maybe<Array<Maybe<Member>>>;
};

export type Member = {
  __typename?: 'Member';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  members?: Maybe<Array<Maybe<Member>>>;
  linkSkills?: Maybe<Array<Maybe<LinkSkill>>>;
};


export type QueryLinkSkillsArgs = {
  memberId?: Maybe<Scalars['Int']>;
  skill?: Maybe<Scalars['String']>;
};

export type GetLinkSkillsQueryVariables = Exact<{
  memberId: Scalars['Int'];
  skill: Scalars['String'];
}>;


export type GetLinkSkillsQuery = { __typename?: 'Query', linkSkills?: Maybe<Array<Maybe<{ __typename?: 'LinkSkill', category?: Maybe<string>, category_name?: Maybe<string>, effect?: Maybe<number>, skill_name?: Maybe<string>, is_act2?: Maybe<boolean>, members?: Maybe<Array<Maybe<{ __typename?: 'Member', id?: Maybe<number>, name?: Maybe<string> }>>> }>>> };

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = { __typename?: 'Query', members?: Maybe<Array<Maybe<{ __typename?: 'Member', id?: Maybe<number>, name?: Maybe<string> }>>> };


export const GetLinkSkillsDocument = gql`
    query getLinkSkills($memberId: Int!, $skill: String!) {
  linkSkills(memberId: $memberId, skill: $skill) {
    category
    category_name
    effect
    skill_name
    is_act2
    members {
      id
      name
    }
  }
}
    `;

/**
 * __useGetLinkSkillsQuery__
 *
 * To run a query within a React component, call `useGetLinkSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkSkillsQuery({
 *   variables: {
 *      memberId: // value for 'memberId'
 *      skill: // value for 'skill'
 *   },
 * });
 */
export function useGetLinkSkillsQuery(baseOptions: Apollo.QueryHookOptions<GetLinkSkillsQuery, GetLinkSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkSkillsQuery, GetLinkSkillsQueryVariables>(GetLinkSkillsDocument, options);
      }
export function useGetLinkSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkSkillsQuery, GetLinkSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkSkillsQuery, GetLinkSkillsQueryVariables>(GetLinkSkillsDocument, options);
        }
export type GetLinkSkillsQueryHookResult = ReturnType<typeof useGetLinkSkillsQuery>;
export type GetLinkSkillsLazyQueryHookResult = ReturnType<typeof useGetLinkSkillsLazyQuery>;
export type GetLinkSkillsQueryResult = Apollo.QueryResult<GetLinkSkillsQuery, GetLinkSkillsQueryVariables>;
export const GetMembersDocument = gql`
    query getMembers {
  members {
    id
    name
  }
}
    `;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
      }
export function useGetMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;