/**
  TODO:
  1. Initiate an ember application
  2. Use the html below within your application handlebars template

  <div class="row">
    <div class="large-12 columns">
      <h1>Welcome to Ember.js Project Directory</h1>
    </div>
  </div>

  <div class="row">
    <div class="large-12 columns">
      <!-- Projects listing goes in here -->
    </div>
  </div>
**/

step("1", "Initiate ember.js application");

test("Initiating an ember application", function() {
  visit("/");

  andThen(function() {
    equal(find("h1").text(), "Welcome to Ember.js Project Directory", "Initiate the ember.js application");
  });
});
