// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iSkill } from '../shared/interfaces';

// Define a service using a base URL and expected endpoints
export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/api/collections/',
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<any, void>({
      query: () => `skills/records`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSkillsQuery } = skillsApi;
