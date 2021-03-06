﻿angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
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

  $scope.items =
                [
                   {  
                      "title":"Запросы чата",
                      "count":2,
                      "details":[  
                         {  
                            "title":"Нижний новгород, 1234",
                            "count":1,
                            "badge":"red",
                            "text":"Явно абсурдный вопрос, который стоит блокировать",
                            "time":"11:41"
                         },
                         {  
                            "title":"Гость 1235",
                            "count":3,
                            "badge":"red",
                            "text":"Явно абсурдный вопрос, который стоит блокировать",
                            "time":"11:41"
                         },
                         {  
                            "title":"Гость 1235",
                            "count":0,
                            "badge":"red",
                            "text":"Белый элементе с красным бэйджем",
                            "time":"11:41"
                         }
                      ]
                   },
                   {  
                      "title":"Диалоги",
                      "count":10,
                      "details":[  
                         {  
                            "title":"Василий, Yandex",
                            "count":1,
                            "badge":"green",
                            "text":"Как Скоро ждать доставки? Ведь красные кактусы отцветают",
                            "time":"11:41"
                         },
                         {  
                            "title":"Светлана",
                            "count":1,
                            "badge":"green",
                            "text":"Вы продаете красные кактусы?",
                            "time":"11:41"
                         }
                      ]
                   }
                ]
});