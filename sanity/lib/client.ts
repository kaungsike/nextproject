import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "previewDrafts",
  token: process.env.SANITY_API_READ_TOKEN, // Make sure this env var is set with a token that has Viewer or higher role
  withCredentials: true, // also add this line to enable cookies-based auth if you want
});
