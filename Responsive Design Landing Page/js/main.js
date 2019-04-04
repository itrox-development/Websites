
/*jQuery Toggle Menu Code */

$(document).ready(function(){

(function(){

var state = false;

    $(".hide_menu_bar").click(function(){

  
    if(state === false){
     

$(".fa-bars").toggleClass("menu_rotate"); 
      $("#navbar").slideDown(); 
       
      state = true; 

    } else if (state === true)

    {

$(".fa-bars").toggleClass("menu_rotate"); 

          $("#navbar").slideUp();  
          state = false; 
    }

    });

}());

});


/*JavaScript Change headers background on scroll down */
window.onscroll = function() {
    headerChange()
};

function headerChange() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById("main-header").classList.add("second-background-colour");

        document.getElementById("about").setAttribute("class", "list-item-colour");
        document.getElementById("events").setAttribute("class", "list-item-colour");

    } else {
        document.getElementById("main-header").classList.remove("second-background-colour");
        document.getElementById("about").setAttribute("class", "");
        document.getElementById("events").setAttribute("class", "");
    }
}

/* JavaScript Random Image Wobble Code */

(function() {

    setInterval(function() {

        (function() {

            var imageNumber = Math.floor((Math.random() * 6) + 1);
            console.log("random " + imageNumber);
            conditional(imageNumber);

        })();


    }, 8000);


    function classChanger(imageInstance, attributeName, changedClasses) {

        document.getElementById(imageInstance).setAttribute(attributeName, changedClasses);

    }

    function conditional(randomNumber) {

        /*Select an image on random number 1 to 6 */ 

        randomNumber === 1 ? classChanger("img-1", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-1", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");
        randomNumber === 2 ? classChanger("img-2", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-2", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");
        randomNumber === 3 ? classChanger("img-3", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-3", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");

        randomNumber === 4 ? classChanger("img-4", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-4", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");
        randomNumber === 5 ? classChanger("img-5", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-5", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");
        randomNumber === 6 ? classChanger("img-6", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust wobble-animate") : classChanger("img-6", "class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 img_adjust");

        console.log("conditionals " + randomNumber);

    }

})();


