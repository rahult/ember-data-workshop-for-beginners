/**
  TODO:
  1. Create a resource route for `/project/:project_id`
  2. Create a new project handlebars template and use the HTML below

  <div class="large-4 medium-4 columns project-block-info">
    <h3><a href="http://www.discourse.org/">Discourse</a></h3>
    <p>
      Discourse is the 100% open source, next-generation discussion platform built
      for the next decade of the Internet
    </p>
    <a href="#/" class="tiny button round">Back</a>
  </div>

  You will need to make sure that each template has the
  correct model provided by its route.

  Remember that you can use `findBy` to find the project
  with a given `id` (You can see emberjs.com/guides/enumerables
  for more information).
**/

step(4, "Add Resource");

test("When navigating to /project/1, the project with ID of 1 is displayed", function() {
  visit("/project/1");

  andThen(function() {
    shouldHaveElement('.project-block-info');
    shouldHaveElement('.project-block-info h3', 'Discourse', 'There should be a project whose project name is Discourse');
    shouldHaveElement('.project-block-info a', { href: 'http://www.discourse.org/' }, 'There should be a project whose link is "http://www.discourse.org/"');
  });
});
