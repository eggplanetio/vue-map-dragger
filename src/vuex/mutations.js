
export default {

  COORDINATE_CHANGE(state, message) {
    const jsonString = JSON.stringify(message);
    const uriComponent = window.encodeURIComponent(jsonString);
    history.pushState({}, '', `#${uriComponent}`)
    state.coordinates = message;
  },

  MAP_LOADED(state, message) {
    state.mapLoaded = true;
  }

}
