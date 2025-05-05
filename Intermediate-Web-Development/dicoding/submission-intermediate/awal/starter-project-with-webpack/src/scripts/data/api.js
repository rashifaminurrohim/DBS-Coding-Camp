import CONFIG from '../config';

const ENDPOINTS = {
  GET_ALL_STORY: `${CONFIG.BASE_URL}/stories`,
};

export async function getAllStories({ location = 0 }) {
  const accessToken = CONFIG.ACCESS_TOKEN_KEY;
  const url = new URL(ENDPOINTS.GET_ALL_STORY);

  url.searchParams.set('location', location);
  const fetchResponse = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}`}
  });
  return await fetchResponse.json();
}