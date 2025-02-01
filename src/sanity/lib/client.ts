import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "your_project_id",
  dataset: "production",
  apiVersion: "2023-10-30",
  useCdn: false,
});
