ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938784, 30.323250],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark([59.938784, 30.323250], {
          hintContent: 'Pogнали'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/map_marker.svg',
          iconImageSize: [41, 41],
          iconImageOffset: [0, 0]
      });
  myMap.geoObjects
      .add(myPlacemark);
});
