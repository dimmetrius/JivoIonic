angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html'
    })
    .state('chatlist', {
      url: '/chatlist',
      templateUrl: 'templates/chatlist.html',
      controller: 'ChatCtrl'
    });

   $urlRouterProvider.otherwise('/sign-in');

})

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('chatlist');
  };
  
})

.controller('ChatCtrl', function($scope, $state) {
  console.log('ChatCtrl');
  
  $scope.signOut = function() {
      $state.go('signin');
  };  
});