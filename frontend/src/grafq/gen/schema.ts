// @ts-nocheck
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  categorie: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  picpath: Scalars['String']['output'];
  prix: Scalars['Float']['output'];
  tags: Array<Tag>;
  titre: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  deleteAd: Scalars['String']['output'];
  deleteCategory: Scalars['String']['output'];
  updateAd: Ad;
  updateCategory: Category;
};


export type MutationCreateAdArgs = {
  data: NewAd;
};


export type MutationCreateCategoryArgs = {
  data: NewCat;
};


export type MutationDeleteAdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAdArgs = {
  data: UpdateAd;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCat;
  id: Scalars['Int']['input'];
};

export type NewAd = {
  category: ObjectId;
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  picpath: Scalars['String']['input'];
  prix: Scalars['Float']['input'];
  tags?: InputMaybe<Array<ObjectId>>;
  titre: Scalars['String']['input'];
};

export type NewCat = {
  nom: Scalars['String']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  ad: Ad;
  ads: Array<Ad>;
  categories: Array<Category>;
};


export type QueryAdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdsArgs = {
  categorieId?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
};

export type UpdateAd = {
  categorie?: InputMaybe<ObjectId>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  picpath?: InputMaybe<Scalars['String']['input']>;
  prix?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<ObjectId>>;
  titre?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCat = {
  nom?: InputMaybe<Scalars['String']['input']>;
};

export type RecentAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentAdsQuery = { __typename?: 'Query', ads: Array<{ __typename?: 'Ad', id: number, titre: string, prix: number, picpath: string }> };


export const RecentAdsDocument = gql`
    query RecentAds {
  ads {
    id
    titre
    prix
    picpath
  }
}
    `;

/**
 * __useRecentAdsQuery__
 *
 * To run a query within a React component, call `useRecentAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentAdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
      }
export function useRecentAdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
        }
export function useRecentAdsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<RecentAdsQuery, RecentAdsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<RecentAdsQuery, RecentAdsQueryVariables>(RecentAdsDocument, options);
        }
export type RecentAdsQueryHookResult = ReturnType<typeof useRecentAdsQuery>;
export type RecentAdsLazyQueryHookResult = ReturnType<typeof useRecentAdsLazyQuery>;
export type RecentAdsSuspenseQueryHookResult = ReturnType<typeof useRecentAdsSuspenseQuery>;
export type RecentAdsQueryResult = ApolloReactCommon.QueryResult<RecentAdsQuery, RecentAdsQueryVariables>;