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
let sections = document.querySelectorAll('section');
let dataType = 'Section ' + sections.length;
var sectionId = '';

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
        // creates a new section
        let newSection = document.createElement('section');
        // It get sure we are adding the section after the last section already in the main container
        sections[sections.length -1].parentNode.insertBefore(newSection, sections[sections.length -1].nextSibling);
        // count again the sections to help capture the last child of them
        sections = document.querySelectorAll('section');
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
        // We are going to use dataType to set the textContent
        newH2.textContent = dataType;
        // creates a first paragraph 
        const newP1 = document.createElement('p');
        // set a textContent
        newP1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
        // add a new paragraph
        theDiv.appendChild(newP1);
        // creates a second paragraph
        const newP2 = document.createElement('p');
        // set a textContent
        newP2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
        // add a new paragraph
        theDiv.appendChild(newP2);
    }
}
addNewSection();


// build the nav
// select the unordered list for the menu
const menuUl = document.querySelector('#navbar__list');

// Function to create links in the menu
function createLink() {
    // testing loop
    for (let section of sections) {
        // creates links in the menu
        const menuLi = document.createElement('li');
        // add class to the li
        menuLi.classList.add('menu__link');
        // sets the string for data type value and textContent
        let sectionTitle = section.getAttribute('data-nav');
        // add attribute data-nav
        menuLi.setAttribute('data-nav', sectionTitle);
        // add textContent
        menuLi.innerHTML = `${sectionTitle}`;

        // Scroll to anchor ID using scrollTO event
        // Set element by id
        sectionId = section.getAttribute('id');
        let scrollToId = document.getElementById(sectionId)
        console.log(scrollToId);

        function goToSection() {
            scrollToId.scrollIntoView({behavior: "smooth"});
            for (section of sections) {
                section.classList.remove('your-active-class');
                console.log(section);

            }
            

            scrollToId.classList.toggle('your-active-class');
        }

        // if a li is clicked, the page will scroll to a section
        menuLi.addEventListener('click', goToSection);
        



        // add li on the unordered list
        menuUl.append(menuLi);
        
        
    };    
};
createLink();

// Add class 'active' to section when near top of viewport



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


