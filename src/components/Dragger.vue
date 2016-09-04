<template>
  <img
  class="map"
  :class="{ 'has-loaded': mapLoaded }"
  v-bind:data-coordinates-top="coordinates.top"
  v-bind:data-coordinates-left="coordinates.left"
  draggable="false"
  src="../assets/map.jpg">
</template>

<script>
import store from '../vuex/store';
import { mapGetters } from 'vuex';

import $ from "jquery";
import pep from "jquery.pep";

export default {
  created: onCreate,
  computed: mapGetters(['coordinates', 'mapLoaded']),
};

const boundaryCalculator = (map, viewport) => {
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

    $map.on('load', () => {
      const $viewport = $(window);
      const constrainTo = boundaryCalculator($map, $viewport);

      console.log(constrainTo);

      $map
      .pep({ constrainTo, rest, initiate })
      .css(store.state.coordinates); // eg. { top: -867, left: -140 }

      store.dispatch('setMapLoaded');
    });
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

.map.has-loaded {
  opacity: 1;
}

.map.no-transition {
  transition: none;
}
</style>
