import CONFIG from '../config';
import { getAccessToken } from '../utils/auth';

const ENDPOINTS = {
  // Auth
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,

  // Story
  STORY: `${CONFIG.BASE_URL}/stories`,
  STORY_DETAIL: (id) => `${CONFIG.BASE_URL}/stories/${id}`,

  // Push Notification
  NOTIFICATIONS: `${CONFIG.BASE_URL}/notifications/subscribe`,
};

export async function getAllStories({ location = 0 }) {
  const accessToken = getAccessToken();
  const url = new URL(ENDPOINTS.STORY);
  
  url.searchParams.set('location', location);
  const fetchResponse = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}`}
  });
  return await fetchResponse.json();
}

export async function postNewStory({description, photo, lat, lon}) {
  const accessToken = getAccessToken();
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

export async function getStoryById(id) {
  const accessToken = getAccessToken();
  const fetchResponse = await fetch(ENDPOINTS.STORY_DETAIL(id), {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return await fetchResponse.json();
}

export async function subscribePushNotification({ endpoint, keys: { p256dh, auth }}) {
  const accessToken = getAccessToken();
  const data = JSON.stringify({
    endpoint,
    keys: { p256dh, auth },
  });

  const fetchResponse = await fetch(ENDPOINTS.NOTIFICATIONS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  });
  return await fetchResponse.json();
}

export async function unsubscribePushNotification({ endpoint }) {
  const accessToken = getAccessToken();
  const data = JSON.stringify({ endpoint });

  const fetchResponse = await fetch(ENDPOINTS.NOTIFICATIONS, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  });
  return await fetchResponse.json();
}