import Map from '../utils/map';

export async function storyMapper(story) {
  return {
    ...story,
    coordinate: {
      lat: story.lat,
      lon: story.lon,
      placeName: await Map.getPlaceNameByCoordinate(story.lat, story.lon)|| 'Unknown location',
    },
  };
}