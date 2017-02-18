$(document).ready(function() {
   $(".tabLink").each(function(){
      $(this).click(function(){
         localStorage.selectedTab = $(this).index() + 1;
         tabeId = $(this).attr('id');
         $(".tabLink").removeClass("red");
         $(this).addClass("red");
         $(".tabcontent").addClass("display-none");
         $("#"+tabeId+"-1").removeClass("display-none")   
         return false;     
      });
   });  
      
   // search for local storage
   if (localStorage.selectedTab) {
      $(".tabLink:eq(" + (localStorage.selectedTab - 1) + ")").click();
   }
});