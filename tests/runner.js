if (window.location.search.indexOf("?test") !== -1) {
  document.write(
    '<div id="qunit"></div>' +
    '<div id="qunit-fixture"></div>' +
    '<div id="ember-testing-container">' +
    '  <div id="ember-testing"></div>' +
    '</div>' +
    '<link rel="stylesheet" href="tests/runner.css">' +
    '<link rel="stylesheet" href="tests/vendor/qunit-1.12.0.css">' +
    '<script src="tests/vendor/qunit-1.12.0.js"></script>' +
    '<script src="tests/helpers.js"></script>' +
    '<script src="tests/step1.js"></script>' +
    '<script src="tests/step2.js"></script>' +
    '<script src="tests/step3.js"></script>' +
    '<script src="tests/step4.js"></script>' +
    '<script src="tests/step5.js"></script>' +
    '<script src="tests/step6.js"></script>' +
    '<script src="tests/step7.js"></script>'
  )
}
