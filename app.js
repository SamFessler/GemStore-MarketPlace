

var samApp = angular.module('samApp', ['ui.bootstrap']);

var gem=[
    {
    name: 'sparkles',
    price: 400,
    description: 'this is a gem, yeee',
    inStock: false,
    images:[{fullSize:'/images/gem-01.gif'},{fullSize:'/images/gem-02.gif'},],
    reviews:[{stars:5, body: 'yeeee',author: 'joey@bannanas.org'}]
    
    },
    
    {
    name: 'apple',
    price: 1,
    description: 'this is not a gem, tis an apple',
    inStock: true,
    images:[{fullSize:'/images/gem-05.gif'},{fullSize:'/images/gem-06.gif'},],
    reviews:[{stars:7, body: 'wtf bruh',author: 'manananay@bannanas.org'}]
    
    },
    {
    name: 'gem',
    price: 200,
    description: 'this gem is an amoeba',
    inStock: true,
    images:[{fullSize:'/images/gem-07.gif'},{fullSize:'/images/gem-08.gif'},],
    reviews:[{stars:9, body: 'it is an amoeba',author: 'buggythebug@bannanas.org'}]
    
    },
    {
    name: 'lupus lazuli',
    price: 10000,
    description: 'this is a rare condition that turns your skin blue',
    inStock: true,
    images:[{fullSize:'/images/gem-09.gif'},{fullSize:'/images/gem-10.gif'},],
    reviews:[{stars:0, body: 'turned my skin blue',author: 'lepper@bannanas.org'}]
    
    }
];

samApp.controller('samController',function($scope){
    
    $scope.model = gem;
    
    $scope.cart = [];
    
    $scope.addProduct = function(product){
        $scope.cart.push(product);
    }

    $scope.initialize = function(){
        console.log("initialized now");
    };
});

angular.module('samApp').controller("panelController", function($scope){
    
    $scope.tab =1;
    
    $scope.selectTab = function(tab){
        
        $scope.tab=tab;
    }
    
//    $scope.isSelected = function(tab){
//        return $scope.tab === tab;
//    }
    
    
});

