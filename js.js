var app = angular.module('myForm', ['ngMessages', 'ngRoute']); //on déclare le module et on lui donne un nom

app.run(['$rootScope', function ($rootScope) { //on crée un tableau vide pour pouvoir l'incrémenter des formulaires remplis ensuite
    $rootScope.formsArray = []; //on utilise rootScope et non Scope pour pouvoir avoir accès au tableau à partir de toutes les vues
  }]);


app.controller('formCtrl', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope){ //on donne les fonctions du controleur
  $scope.id = $routeParams.id; //ici, on indique que la variable id est égale au :id de la seconde route, ce qui nous permettra de l'utiliser dans les vues (ici, la vue info.html)
  $scope.clickedButton = function() { //au click sur le bouton, on lance la fonction suivante
    $rootScope.formsArray.push({ //on push (pousse) dans le tableau chacune des informations
      name: $scope.name, //dans la colonne "name", on ajoute le name (ng-model de l'index)
      email: $scope.email,  //dans la colonne "email", on ajoute le email (ng-model de l'index)
      subject: $scope.subject, //dans la colonne "subject", on ajoute le subject (ng-model de l'index)
      textsubject: $scope.textsubject //dans la colonne "textsubject", on ajoute le textsubject (ng-model de l'index)
    });
  };
}]);

app.config(function($routeProvider){ //la fonction qui démarre les routes
  $routeProvider
    .when('/', { //on donne le nom à sa route
        templateUrl : 'view/form.html', //la route redirigera vers ce fichier
        controller : 'formCtrl' //elle est associée à ce controleur
    })
    .when('/:id', { //on donne le nom à sa route (:id est un paramètre)
        templateUrl : 'view/info.html', //la route redirigera vers ce fichier
        controller : 'formCtrl' //elle est associée à ce controleur
    })
});
