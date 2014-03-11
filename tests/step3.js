/*
  TODO: Add projects dynamically to the index template using fixtures
*/

step("3", "Router and Routes");

test("Providing project data to index template using index route's model method", function() {
  visit("/");

  andThen(function() {
    equal(find(".project-block").length, 6, "There should be 6 initial ember.js projects");

    ['Discourse', 'Travis CI', 'Todo MVC', 'Dashboard', 'Bustle', 'Zendesk'].forEach(function(name) {
      shouldHaveElement('.project-block h3', name, 'There should be a project whose project name is ' + name);
    });
  });
});
