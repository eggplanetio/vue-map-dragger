
export const updateCoordinates = ({ commit }, payload) => {
  const pep = payload.pep;
  const top = parseInt(pep.$el.css('top')) + pep.cssY;
  const left = parseInt(pep.$el.css('left')) + pep.cssX;
  commit('COORDINATE_CHANGE', { top, left });
};

export const setMapLoaded = ({ commit }, payload) => {
  commit('MAP_LOADED');
};
