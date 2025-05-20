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
    <a href="#/stories/${id}" class="story-card">
      <img src="${photoUrl}" alt="${name}'s story photo" class="story-image" />
      <div class="story-content">
        <h2>${name}</h2>
        <p>${description}</p>
        <span><p>${lat} , ${lon} <small>${new Date(createdAt).toLocaleString()}</small></span>
      </div>
    </a>
  `;
}

export function generateLoaderAbsoluteTemplate() {
  return `
    <div class="loader loader-absolute"></div>
  `;
}

export function generateDetailStoryTemplate({
  name,
  description,
  photoUrl,
  createdAt,
  lat,
  lon,
}) {
  return `
  <div class="story-detail__header">
    <h1 class="story-detail__title">
      ${name} at ${lat}, ${lon}
    </h1>
    <div class="story-detail__meta">
      <i class="fas fa-calendar-alt"></i> ${new Date(createdAt).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </div>
  </div>

  <div class="container">
    <img class="story-detail__image" src="${photoUrl}" alt="Photo of ${name}" />
  </div>

  <div class="container">
    <div class="story-detail__description__container">
      <h2 class="story-detail__description__title">Deskripsi</h2>
      <p>${description}</p>
    </div>

    <div class="story-detail__map__container">
      <h2 class="story-detail__map__title">Peta Lokasi</h2>
      <div class="story-detail__map__container">
        <div id="map" class="story-detail__map"></div>
        <div id="map-loading-container"></div>
      </div>
    </div>

    <hr />

    <div class="story-detail__actions__container">
      <h2>Aksi</h2>
      <div id="save-actions-container"></div>
      <div id="notify-me-actions-container">
        <button class="btn">
          Try Notify Me <i class="far fa-bell"></i>
        </button>
      </div>
    </div>
  </div>
  `;
}

export function generateSaveStoryButtonTemplate() {
  return `
    <button id="story-detail-save" class="btn">
      Bookmark <i class="far fa-bookmark"></i>
    </button>
  `;
}

export function generateRemoveStoryButtonTemplate() {
  return `
    <button id="story-detail-remove" class="btn">
      Remove <i class="far fa-bookmark"></i>
    </button>
  `;
}





export function generateMainNavigationListTemplate() {
  return `
    <li><a id="story-list-button" class="story-list-button" href="#/">Beranda</a></li>
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Cerita Tersimpan</a></li>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `;
}

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-report-button" class="btn new-report-button" href="#/post-story">Buat Laporan <i class="fas fa-plus"></i></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
  `;
}

