
export default {

  COORDINATE_CHANGE(state, message) {
    const jsonString = JSON.stringify(message);
    const hash = window.encodeURIComponent(jsonString);
    history.pushState({}, '', `#${hash}`);
    state.coordinates = message;
  },

  MAP_LOADED(state, message) {
    state.mapLoaded = true;
  },

};
