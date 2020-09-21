 var portfolioApp = angular.module('portfolioApp',[]);
 portfolioApp.controller('GalleryListCtrl', function($scope) {
 $scope.galleries = [ 
{ 'title':'Audi S3 2015',  
'when':'2020-07-21', 
'thumbnailUrl':"img/audis3.jpg" 
},
{ 'title':'Jaguar F-Pace 2020',  
'when':'2020-07-29', 
'thumbnailUrl':"img/jaguar.jpg" 
},
{ 'title':'Volkswagen Arteon 2019',  
'when':'2020-08-20', 
'thumbnailUrl':"img/vwarteon.jpg" 
},
{ 'title':'Skoda Superb iV 2019',  
'when':'2020-07-16', 
'thumbnailUrl':"img/skoda.jpg" 
},
{ 'title':'Porsche 718 Boxster 2020',  
'when':'2020-07-28', 
'thumbnailUrl':"img/porsche.jpg" 
},
{ 'title':'Skoda Fabia 2018',  
'when':'2020-07-15', 
'thumbnailUrl':"img/fabia.jpg" 
},
{ 'title':'BMW Seria 8 2019',  
'when':'2020-08-10', 
'thumbnailUrl':"img/bmws8.jpg" 
},
{ 'title':'BMW Seria 7 2020',  
'when':'2020-07-29', 
'thumbnailUrl':"img/bmws7.jpg" 
},
{ 'title':'Audi S6 2018',  
'when':'2020-08-02', 
'thumbnailUrl':"img/audis6.jpg" 
},
{ 'title':'Mercedes AMG-A45 2019',  
'when':'2020-08-11', 
'thumbnailUrl':"img/amga45.jpg" 
},
{ 'title':'Ferrari F8 Tributo 2019',  
'when':'2020-10-02', 
'thumbnailUrl':"img/ferrari.jpg" 
},
{ 'title':'Peugeot 508 2019',  
'when':'2020-08-13', 
'thumbnailUrl':"img/peugeot.jpg" 
}
]; 
});