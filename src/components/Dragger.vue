<template>
  <img
    draggable="false"
    src="../assets/map.jpg"
    class="map">
</template>

<script>
import $ from 'jquery';
import pep from 'jquery.pep';

export default {
  created: onCreate
}

function boundaryCalculator(map, viewport) {
  const top = viewport.height() - map.height();
  const left = viewport.width() - map.width();
  return [top, 0, 0, left];
};

function onCreate() {
  $(document).ready(() => {
    const $map = $('.map');
    const $viewport = $(window);
    const constrainTo = boundaryCalculator($map, $viewport);

    $map.on('load', () => {
      $map.pep({ constrainTo });
    })
  });
}
</script>

<style>
.map {
  cursor: move;
  perspective: 1000px;
  backface-visibility: hidden;
}
</style>
