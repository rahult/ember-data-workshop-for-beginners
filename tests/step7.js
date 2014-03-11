/**
  TODO: Add project's website link to the project template within the .project-info-block
        Use the html markup below

  <a href="" class="tiny button round project-website-link">Website</a>

**/

step("7", "Bind Attributes");

test("A project should have a link to archive that project", function() {
  visit("/project/1");

  andThen(function() {
    shouldHaveElement('.project-block-info .project-website-link', { href: 'http://www.discourse.org/' });
  });
});
