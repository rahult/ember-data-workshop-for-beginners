App.PROJECT_FIXTURES = [{
  id: '1',
  name: "Discourse",
  description: "Discourse is the 100% open source, next-generation discussion platform built for the next decade of the Internet",
  url: "http://www.discourse.org/",
  isArchived: false
  }, {
  id: '2',
  name: "Travis CI",
  description: "Travis CI is a hosted continuous integration service for the open source community. It is integrated with GitHub",
  url: "https://travis-ci.org/",
  isArchived: false
  }, {
  id: '3',
  name: "Todo MVC",
  description: "TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today",
  url: "http://todomvc.com/architecture-examples/emberjs/",
  isArchived: false
  }, {
  id: '4',
  name: "Dashboard",
  description: "Shows the activity of the ember.js community unified at one glance. It aggregates the latest stuff from Twitter, events in the ember.js GitHub repository, latest questions on StackOverflow and stuff from reddit/emberjs",
  url: "http://code418.com/ember.js-dashboard/",
  isArchived: false
  }, {
  id: '5',
  name: "Bustle",
  description: "Bustle is a news, entertainment, lifestyle, and fashion site driven by a diverse and energetic collection of contributors. We are looking to redefine what womens interest looks like.",
  url: "http://www.bustle.com/",
  isArchived: false
  }, {
  id: '6',
  name: "Zendesk",
  description: "Zendesk is web based customer service software used by over 25000 companies world-wide. It features an elegant support ticket system.",
  url: "http://www.zendesk.com/",
  isArchived: false
}];

App.PROJECT_FIXTURES = App.PROJECT_FIXTURES.map(function(project) {
  return App.Project.create(project);
});
