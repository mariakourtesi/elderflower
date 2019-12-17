

      //Initialize and add the map
      function initMap(){
        //your location
        const loc = {lat: 53.393311, lng: -2.126632};
        //Centered map on lavcation
        const map = new google.maps.Map(document.querySelector(".map"),
        {zoom:14,
          center:loc
        });
      

      //The marker, positioned at location

      const marker = new google.maps.Marker({
        position: loc, map: map
      });
    }


//Sticky menu background

window.addEventListener("scroll", function(){
if (window.scrollY > 150){
  this.document.querySelector("#navbar").style.opacity = 0.9;
} else{
  this.document.querySelector("#navbar").style.opacity =1;
}
});



    // Smooth scrolling

    $("#navbar a, .btn").on("click", function(event){
      if(this.hash !== " "){
        event.preventDefault();

        const hash= this.hash;


        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 100
          },
          800
        );
      }
  
  });

