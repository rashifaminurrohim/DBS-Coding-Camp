export function storyCardItem({
  id,
  name,
  description,
  photoUrl,
  createdAt,
  coordinate,
}) {
  return `
    <div class="story-card">
      <div class="story-photo">
        <img src="${photoUrl}" alt="${name}'s story photo" class="story-image" />
      </div>
      <div class="story-content">
        <div class="story-content-top">
          <div class="story-title">
            <h2>${name}</h2>
            <small>at ${coordinate.placeName}</small>
          </div>
          <p>${description}</p>
        </div>
        <div class="story-content-bottom">
        <div class="story-datetime">
          <div class="story-datetime-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f6a925" d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18zm-2 16H5V9h14z"/></svg>
            <p>${new Date(createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </p>
          </div>
          <div class="story-datetime-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f6a925" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"/></svg>
            <p>${new Date(createdAt).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
            </p>
          </div>  
        </div>
        <div class="story-location">
          <div class="story-location-item">     
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="#c12f64" fill-rule="evenodd" d="M12.5 6a4.47 4.47 0 0 1-.883 2.677L8 13.5L4.383 8.677A4.5 4.5 0 1 1 12.5 6M14 6c0 1.34-.439 2.576-1.18 3.574L8.937 14.75L8 16l-.938-1.25L3.18 9.574A6 6 0 1 1 14 6M8 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>    
            ${coordinate.lat.toFixed(5)} , ${coordinate.lon.toFixed(5)}
          </div>
          <button class="btn"><a href="#/stories/${id}">Details</a></button>
        </div>
        </div>  
      </div>
    </div>
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
    <li><a id="story-list-button" class="story-list-button" href="#/"><h1>HOME</h1></a></li>
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark"><h1>BOOKMARK</h1></a></li>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `;
}

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <li><a id="new-report-button" href="#/post-story"><h1>POST</h1></a></li>
    <div>
      <li id="push-notification-tools" class="push-notification-tools"></li>
      <li>
        <a id="logout-button" href="#/logout" class="btn logout-button">
          Logout <i class="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </div>
  `;
}

export function generateSubscribeButtonTemplate() {
  return `
    <button id="subscribe-button" class="btn subscribe-button">
      Subscribe <i class="fas fa-bell"></i>
    </button>
  `;
}

export function generateUnsubscribeButtonTemplate() {
  return `
    <button id="unsubscribe-button" class="btn unsubscribe-button">
      Unsubscribe <i class="fas fa-bell-slash"></i>
    </button>
  `;
}


