/**
  TODO: You'll create a link and action to archive a project from the project page.

  1.) Go to the project template and add a link to archive a project. Use the html below

    <button class="tiny round project-archive-button">Archive</button>

  2.) Add an action to the ProjectController to make the isArchive flag of a project to true

  3.) Filter the index template projects list to only show non archived projects
**/

step(6, "Filter Property");

test("A project should have a link to archive that project", function() {
  visit("/project/1");

  andThen(function() {
    shouldHaveElement('.project-block-info .project-archive-button');
  });
});

test("Clicking on a project archive link should archive that project and redirect the user to index template", function() {
  visit("/project/1");
  click('.project-block-info .project-archive-button');

  andThen(function() {
    equal(find(".project-block").length, 5, "There should be 5 ember.js projects left after archiving the first project");

    ['Travis CI', 'Todo MVC', 'Dashboard', 'Bustle', 'Zendesk'].forEach(function(name) {
      shouldHaveElement('.project-block h3', name, 'There should be a project whose project name is ' + name);
    });
  });
});
