import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "3vu2153a",
  dataset: "production",
  apiVersion: "2023-10-30",
  useCdn: false,
});
