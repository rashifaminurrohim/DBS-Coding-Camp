import Utils from '../utils.js';
import Clubs from '../data/local/clubs.js';

const home = () => {
  const searchFormElement = document.querySelector('#searchForm');

  const clubListContainerElement = document.querySelector('#clubListContainer');
  const clubLoadingElement = clubListContainerElement.querySelector('.search-loading');
  const clubListElement = clubListContainerElement.querySelector('club-list');

  const showSportClub = (query) => {
    showLoading();

    const result = Clubs.searchClub(query);
    displayResult(result);

    showClubList();
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    const query = event.target.elements.name.value;
    showSportClub(query);
  }

  const displayResult = (clubs) => {
    const clubItemElements = clubs.map((club) => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club;

      return clubItemElement;
    });

    Utils.emptyElement(clubListElement);
    clubListElement.append(...clubItemElements);
  };

  const showLoading = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubLoadingElement);
  };

  const showClubList = () => {
    Array.from(clubListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(clubListElement);
  };

  searchFormElement.addEventListener('submit', onSearchHandler);
};

export default home;
