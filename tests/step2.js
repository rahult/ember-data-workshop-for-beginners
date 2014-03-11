/**
  TODO: Add projects html to the index handlebars template. Use the markup below

  <div class="large-4 medium-4 columns project-block">
    <h3>Discourse</h3>
    <p>
      Discourse is the 100% open source, next-generation discussion platform built for the next decade of the Internet
    </p>
    <a href="#" class="tiny button round project-link"}}More</a>
  </div>

  <div class="large-4 medium-4 columns project-block">
    <h3>Travis CI</h3>
    <p>
      Travis CI is a hosted continuous integration service for the open source community. It is integrated with GitHub
    </p>
    <a href="#" class="tiny button round project-link"}}More</a>
  </div>

  <div class="large-4 medium-4 columns project-block">
    <h3>Todo MVC</h3>
    <p>
      TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today
    </p>
    <a href="#" class="tiny button round project-link"}}More</a>
  </div>

**/

step("2", "Outlets");

test("Outletting index view within application template", function() {
  visit("/");

  andThen(function() {
    ok(find(".project-block").length >= 3, "There should be atleast 3 initial ember.js projects");

    ['Discourse', 'Travis CI', 'Todo MVC'].forEach(function(name) {
      shouldHaveElement('.project-block h3', name, 'There should be a project whose project name is ' + name);
    });
  });
});
