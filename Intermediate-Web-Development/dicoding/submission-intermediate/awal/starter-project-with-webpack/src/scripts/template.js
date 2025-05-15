export function storyCardItem({
  id,
  name,
  description,
  photoUrl,
  createdAt,
  lat,
  lon,
}) {
  return `
    <div class="story-card">
      <img src="${photoUrl}" alt="${name}'s story photo" class="story-image" />
      <div class="story-content">
        <h2>${name}</h2>
        <p>${description}</p>
        <span><p>${lat} , ${lon} <small>${new Date(createdAt).toLocaleString()}</small></span>
      </div>
    </div>
  `;
}

export function generateLoaderAbsoluteTemplate() {
  return `
    <div class="loader loader-absolute"></div>
  `;
}
