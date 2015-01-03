(function(){
  'use strict';

var module = ons.bootstrap('my-app', ['onsen']);
      module.controller('AppController', function($scope) {
      	$scope.test2="qq";
        $scope.title="qqqqq";
        $.ajax({ 
                async:false,//使用同步的Ajax请求  
                type: "POST",  
                url: "/xiaoshuo/get-list.php",  
                data: "name=John&location=Boston",  
                success: function(data){  
                 //alert(data);
                 var obj = JSON.parse(data);
                 //alert(obj[0].bookId);
                $scope.itemTitle=obj[0].bookTitle;
                $scope.itemIntroduction=obj[0].bookIntroduction;
                }  
            });  
        $scope.test = function(){
        	
		$.ajax({ 
                async:false,//使用同步的Ajax请求  
                type: "POST",  
                url: "/xiaoshuo/get-content.php",  
                data: "name=John&location=Boston",  
                success: function(data){  
                $scope.content=data;
                }  
            });  
      	
       };
     $scope.getlist = function(){
        $.ajax({ 
                async:false,//使用同步的Ajax请求  
                type: "POST",  
                url: "/xiaoshuo/get-list.php",  
                data: "name=John&location=Boston",  
                success: function(data){  
                  alert("qq");
                $scope.itemTitle='iiiijj';
                }  
            });  
     };
      });

      
    


  var currentItem = {};
 
  $(document).on('pageinit', '#detail-page', function() {
    //$('.item-title', this).text("currentItem.title");
   //$('.item-desc', this).text(currentItem.desc);
    //$('.item-label', this).text(currentItem.label);


    $('#book-label', this).text("类别：武侠");
    $('.item-title', this).text("书名：火爆天王");
    $('#book-author').text("作者: 陈支泽");
    $('.item-label', this).text("类别");
    $("#readBtn").click(function()
      {
      	
       app.navi.pushPage('read.html');
      });
  });

  $(document).on('pageinit', '#list-page', function() {
    $('.item', this).on('click', function() {
      currentItem = {
        title : $('.item-title', this).text(),
        desc : $('.item-desc', this).text(),
        label : $('.item-label', this).text()
      };

      app.navi.pushPage('detail.html');
    });
  });

  

})();

