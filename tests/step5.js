/**
  TODO: You'll create a link from the projects list to an individual
        project.

  Go to the index template and wrap the `More` link inside a {{#link-to}} helper.
  Make sure to pass a parameter to the helper; this tells
  the helper which model should go into the URL.

  NOTE: Please use these css classes `tiny button round project-link' within your #link-to helper

**/

step(5, "Link-to helper");

test("Each project on the index page should have a link to the project page", function() {
  visit("/");

  andThen(function() {
    [ 1, 2, 3, 4, 5, 6 ].forEach(function(id) {
      shouldHaveElement('.project-block .project-link', { href: '/project/' + id });
    });
  });
});

test("Clicking on a project shows the project template", function() {
  visit("/");
  click('.project-block .project-link:first');

  andThen(function() {
    shouldHaveElement('.project-block-info');
  });
});
