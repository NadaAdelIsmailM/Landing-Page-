/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
var Data=[];
/*var Data = ['<a href=\"#section1\" class="menu__link" id=s1>Section 1</a>'
,'<a href=\"#section2\" class="menu__link" id=s2>Section 2</a>',
'<a href=\"#section3\" class="menu__link" id=s3>Section 3</a>',
'<a href=\"#section4\" class="menu__link" id=s4>Section 4</a>'];*///The inner HTML of each header in navigation bar
//building the navigation bar
var BuildNavigationBar = function(){
    let navbar=document.querySelector('#navbar__list');
    let section = document.createElement('li');
    let n = 4;
    for (let i = 1; i < n+1; ++i) {

        Data[(i-1)]='<a href=\"#section'+i+"\" class=\"menu__link\" id=s"+i+">Section "+i+"</a>";
    }
    for (let i = 0; i < n; ++i) {

        section.innerHTML = Data[i];

        //section.textContent = Data[i];
        navbar.appendChild(section);
        section = document.createElement('li');
    }
}


document.addEventListener( "DOMContentLoaded",BuildNavigationBar);//build the navigation bar from the beginning
//adds active to class of the section on screen
function makeActive(){
    let sections=document.getElementsByTagName('section');
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("Active");
        } else {
            section.classList.remove("Active");
       }
    }
}

document.addEventListener("scroll", function() { makeActive();});
//document.addEventListener( "DOMContentLoaded",showSection);

//document.addEventListener('click',function() {console.log("clik")} );

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


