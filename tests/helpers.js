// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

function step(number, description) {
  module("Step " + number + ": " + description, {
    setup: function() {
      // before each test, ensure the application is ready to run.
      App.reset();
      Ember.run(App, App.advanceReadiness);
    },

    teardown: function() {
      // reset the application state between each test
    }
  });
}

function _shouldHaveElement(selector, content, message, root) {
  var generatedMessage;

  if (typeof content === 'string') {
    generatedMessage = selector + " containing '" + content + "'";
    selector += ':contains("' + content + '")';
  } else if (typeof content === 'object') {
    generatedMessage = selector + " with attribute ";
    var attrs = [];
    for (var prop in content) {
      selector += '[' + prop + '="' + content[prop] + '"]';
      attrs.push(prop + " = " + content[prop]);
    }

    generatedMessage += attrs.join(", ");
  } else {
    generatedMessage = selector;
  }

  generatedMessage = "Should have element " + generatedMessage;

  var element;
  if (root) {
    element = Ember.$(selector, root);
  } else {
    element = Ember.$(selector);
  }

  return [element, message || generatedMessage];
}

function shouldHaveElement(selector, content, message) {
  var ret = _shouldHaveElement(selector, content, message);

  QUnit.push(ret[0].length === 1, null, null, ret[1]);
  removeExpectedFromResult();
}

function removeExpectedFromResult() {
  // I cried the tears of my liiiiife
  var assertions = QUnit.config.current.assertions,
      lastAssertion = assertions[assertions.length - 1];

  lastAssertion.message = lastAssertion.message.replace(/<tr class='test-expected'>.*?<\/tr>/, '');
}
