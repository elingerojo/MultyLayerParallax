(function() {
  window.addEventListener('scroll', function(event) {
    var depth, hero, heroYOffset, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    console.log('topDistance = ', topDistance);
    hero = document.querySelector("#hero");
    heroYOffset = hero.getBoundingClientRect().top;
    console.log('heroYOffset = ', heroYOffset);
    console.log('dif = ', heroYOffset - topDistance);
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  })
})()
