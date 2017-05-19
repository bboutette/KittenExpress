$(document).ready(function(){

  $.ajax({ url: 'https://api.github.com/zen', 
    dataType: 'html',
    success: function(response) { $('p').html(response); }
      // console.log('response: ', response)
  });
// $.getHTML("https://api.github.com/zen", function(data){
// console.log(data);
// });

})
