import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export async function getConcerts() {
  // Init Sanity client
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  // Return all concert data
  return client.fetch(
    groq`*[_type == 'concert']{
      _id,
      date,
      headliner,
      openers,
      venue,
      city,
      state,
      "image": image.asset -> url,
      "altText": image.altText
    }`
  );
}
