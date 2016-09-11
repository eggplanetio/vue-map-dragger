<template>
  <img
    draggable="false"
    src="../assets/map.jpg"
    :class="{ 'has-loaded': mapLoaded }"
    v-bind:data-map-name="mapName"
    v-bind:data-coordinate-left="coordinates.left"
    v-bind:data-coordinate-top="coordinates.top"
    class="map">
</template>

<script>

import store from '../vuex/store';
import { mapGetters } from 'vuex';

import $ from 'jquery';
import pep from 'jquery.pep';

export default {
  created: onCreate,
  computed: mapGetters([ 'coordinates', 'mapName', 'mapLoaded' ]),
}

function boundaryCalculator(map, viewport) {
  const top = viewport.height() - map.height();
  const left = viewport.width() - map.width();
  return [top, 0, 0, left];
};

const rest = (ev, pep) => {
  store.dispatch('updateCoordinates', { pep });
}

const initiate = (ev, pep) => {
  pep.$el.addClass('no-transition');
}

function onCreate() {
  $(document).ready(() => {
    const $map = $('.map');
    const $viewport = $(window);
    const constrainTo = boundaryCalculator($map, $viewport);

    $map.on('load', () => {
      $map.pep({ constrainTo, rest, initiate })
      .css(store.state.coordinates) // eg. { top: 150, left: 200 }

      store.dispatch('setMapLoaded');
    })
  });
}
</script>

<style>
.map {
  cursor: move;
  opacity: 0;
  transition: all 500ms ease;
  perspective: 1000px;
  backface-visibility: hidden;
}

.map.no-transition {
  transition: none;
}

.map.has-loaded {
  opacity: 1;
}
</style>
