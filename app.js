var samApp = angular.module('samApp', ['ui.bootstrap']);

var gem=[
    {
    name: 'sparkles',
    price: 400,
    description: 'this is a gem, yeee',
    inStock: false,
    images:[{fullSize:'/images/gem-01.gif'},{fullSize:'/images/gem-02.gif'},]
    
    },
    
    {
    name: 'apple',
    price: 1,
    description: 'this is not a gem, tis an apple',
    inStock: true,
    images:[{fullSize:'/images/gem-05.gif'},{fullSize:'/images/gem-06.gif'},]
    
    },
    {
    name: 'gem',
    price: 200,
    description: 'this gem is an amoeba',
    inStock: false,
    images:[{fullSize:'/images/gem-07.gif'},{fullSize:'/images/gem-08.gif'},]
    
    },
    {
    name: 'lupus lazuli',
    price: 10000,
    description: 'this is a rare condition that turns your skin blue',
    inStock: true,
    images:[{fullSize:'/images/gem-09.gif'},{fullSize:'/images/gem-10.gif'},]
    
    }
];

samApp.controller('samController',function($scope){
    
    $scope.model = gem;

    $scope.initialize = function(){
        console.log("initialized now");
    };
});

