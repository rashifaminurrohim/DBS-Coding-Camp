import CONFIG from '../config';
import { getAccessToken } from '../utils/auth';

const ENDPOINTS = {
  STORY: `${CONFIG.BASE_URL}/stories`,
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
};
const accessToken = getAccessToken();

export async function getAllStories({ location = 0 }) {
  const url = new URL(ENDPOINTS.STORY);
  
  url.searchParams.set('location', location);
  const fetchResponse = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}`}
  });
  return await fetchResponse.json();
}

export async function postNewStory({description, photo, lat, lon}) {
  const formData = new FormData();
  formData.set('description', description);
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

export async function getRegister({name, email, password}) {

  const fetchResponse = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({name, email, password}),
  });

  return await fetchResponse.json();
}

export async function getLogin({email, password}) {

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({email, password}),
  });

  return await fetchResponse.json();
}