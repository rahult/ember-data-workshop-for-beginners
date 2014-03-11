# Switch to Ember Data

```html
<script src="js/libs/ember-data.js"></script>
```

# Switch to ember data model

```javascript
App.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  isArchived: DS.attr('boolean')
});
```

# Switch to ember data FixtureAdapter

```javascript
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Project.FIXTURES
```

# Switch to ember data store

```javascript
this.store.find('project');
this.store.find('project', params.id);

actions: {
  'archive-project': function() {
    var model = this.get('model');
    model.set('isArchived', true);
    model.save();
    this.transitionToRoute('index');
  }
}
```

# Add filtering via IndexController

```javascript
App.IndexController = Ember.ArrayController.extend({
  nonArchivedProject: function() {
    return this.get('model').filterBy('isArchived', false)
  }.property('model.@each.isArchived')
})

{{#each nonArchivedProject}}
```

# Switch to firebase

```html
<script src="js/libs/firebase.js"></script>
<script src="js/libs/emberfire-latest.js"></script>
```

```javascript
App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://rahult.firebaseio.com/")
});
```
