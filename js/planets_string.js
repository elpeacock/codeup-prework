(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    
    var planetsArray = planetsString.split("|");

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    var breakString = planetsArray.join(" <br> ");
        console.log (breakString);
    //       Why might this be useful? - In case you want to convert javascript input to html.

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    planetsArray.push ("</ul>");
    planetsArray.unshift ("<ul>");
        
    var planetList = planetsArray.join(" <li> ");
        console.log (planetList);

})();