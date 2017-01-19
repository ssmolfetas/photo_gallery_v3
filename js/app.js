lightbox.option({
    'imageFadeDuration': 300,
    'alwaysShowNavOnTouchDevices': true,
    'maxHeight': 600
});

$('#search').hideseek({
      list:           '.hideseek-data',
      nodata:         'Sorry, No results found.',
      attribute:      'text',
      highlight:      true,
      ignore:         '',
      navigation:     true,
      ignore_accents: false
});

