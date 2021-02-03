import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
// Full list of available classes and instances:
// { FlowRouter, Router, Route, Group, Triggers, BlazeRenderer, RouterHelpers }


//////////////////////////////////////////
// Route Groups                         //
//////////////////////////////////////////

var publicRoutes = FlowRouter.group({
  name: 'public'
});

//////////////////////////////////////////
// Unauthenticated/Not Logged In Routes //
//////////////////////////////////////////

publicRoutes.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {
      content: 'home'
    });
  }
});
