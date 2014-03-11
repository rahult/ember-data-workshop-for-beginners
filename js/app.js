App = Ember.Application.create();

App.Router.map(function() {
  this.resource('project', { path: "/project/:project_id"});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.PROJECT_FIXTURES.filterProperty('isArchived', false);
  }
});

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return App.PROJECT_FIXTURES.findBy('id', '1');
  }
});

App.Project = Ember.Object.extend();

App.ProjectController = Ember.ObjectController.extend({
  actions: {
    'archive-project': function() {
      this.get('model').set('isArchived', true);
      this.transitionTo('index');
    }
  }
});
