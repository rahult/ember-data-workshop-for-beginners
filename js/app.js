App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('project', { path: "/project/:project_id"});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('project');
  }
});

App.IndexController = Ember.ArrayController.extend({
  nonArchivedProject: function() {
    return this.get('model').filterBy('isArchived', false)
  }.property('model.@each.isArchived')
})


App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    // return App.PROJECT_FIXTURES.findBy('id', '1');
    return this.store.find('project', params.id);
  }
});

// App.Project = Ember.Object.extend();
App.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  isArchived: DS.attr('boolean')
});


App.ProjectController = Ember.ObjectController.extend({
  actions: {
    'archive-project': function() {
      this.get('model').set('isArchived', true);
      this.transitionTo('index');
    }
  }
});
