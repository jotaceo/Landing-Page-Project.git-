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

// select the menu
const menu = document.querySelector('#navbar__list');

// creates links in the menu
const menuItem = document.createElement('li');

// select all sections
var sections = document.querySelectorAll('section');

let menuLink = menu.appendChild(menuItem);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


// build fourth section
function addNewSection(){
    // set a variable for the main HTML element
    const main = document.querySelector('main');

    // Set a variable to check if we can create a section has last child.
    // It was too late when I noticed this wasn't necessary, but I already spent time doing it.
    // It could be useful, if an element other than a section is added as last child in the main
    // element. This will add the new section after the last section already in the main container
    //  and before that other element acting as last child in the main, always that that element is not a section.
    let canWeCreateASection = false;

    // checks if main have child nodes and set to true the variable canWeCreateASection if so
    if (main.hasChildNodes) {
        // iterates child nodes of main
        for (var mainNode of main.children) {
            // get sure we have a section in the main element
            if (mainNode.nodeName == 'SECTION') {
                canWeCreateASection = true;
            }
        }
    };
    // If we have "green light" the we proceed to create and append the new section
    if (canWeCreateASection == true) {
        console.log("Yes we can create a section!"); // delete this <<<<< EYES
        // creates a new section
        let newSection = document.createElement('section');
        var sections = document.querySelectorAll('section');
        // It get sure we are adding the section after the last section already in the main container
        sections[sections.length -1].parentNode.insertBefore(newSection, sections[sections.length -1].nextSibling);
        // count again the sections
        var sections = document.querySelectorAll('section');
        // sets the string for id value
        let idValue = "section" + sections.length;
        // sets the string for data type value
        let dataType = "Section " + sections.length;
        // adds id and data- properties to the section
        sections[sections.length - 1].setAttribute('id', idValue);
        sections[sections.length - 1].setAttribute('data-nav', dataType);
        // creates a div
        let newDiv = document.createElement('div');
        // adds a div to the section
        sections[sections.length -1].appendChild(newDiv);
        // selects a div to prepare it to add classes on it
        let theDiv = sections[sections.length -1].querySelector('div');
        // sets class to the div
        theDiv.setAttribute('class', 'landing__container');
        // creates a h2
        let newH2 = document.createElement('h2');
        // adds a H2 element to the div
        theDiv.appendChild(newH2);
        // We are going to recicle dataType to set the textContent because in this case is the same
        newH2.textContent = dataType;

        // I'm going to use a function because "we need TWO paragraphs"
        function createAParagraph() {
            // creates a paragraph -- we need two of this
            let newP = document.createElement('p');
            // add a new paragraph
            theDiv.appendChild(newP);
        }
        createAParagraph()
        createAParagraph()



        console.log(sections);
    }
}

addNewSection();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


