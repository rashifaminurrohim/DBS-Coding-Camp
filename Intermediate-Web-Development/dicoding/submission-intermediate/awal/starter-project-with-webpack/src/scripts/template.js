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
      <img src="${photoUrl}" alt="${name}'s story" class="story-image" />
      <div class="story-content">
        <h3>${name}</h3>
        <p>${description}</p>
        <small>${new Date(createdAt).toLocaleString()}</small>
      </div>
    </div>
  `;
}