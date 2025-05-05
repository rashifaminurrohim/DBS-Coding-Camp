import CONFIG from '../config';

const ENDPOINTS = {
  STORY: `${CONFIG.BASE_URL}/stories`,
};
const accessToken = CONFIG.ACCESS_TOKEN_KEY;

export async function getAllStories({ location = 0 }) {
  const url = new URL(ENDPOINTS.STORY);
  
  url.searchParams.set('location', location);
  const fetchResponse = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}`}
  });
  return await fetchResponse.json();
}

export async function postNewStory({desc, photo, lat, lon}) {
  const formData = new FormData()
  formData.set('description', desc);
  formData.set('photo', photo);
  formData.set('lat', lat);
  formData.set('lon', lon);

  const fetchResponse = await fetch(ENDPOINTS.STORY, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });

  return await fetchResponse.json();
}