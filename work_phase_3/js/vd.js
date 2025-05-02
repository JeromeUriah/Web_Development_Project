/**
 * IMPORTS
 * Keep track of external modules being used
 */
import { setupImageModalViewer } from '../../work_phase_3/js/modules/openimg.js';

/**
 * CONSTANTS
 * Define values that don't change e.g. page titles, URLs, etc.
 */
const PAGE_TITLE = "Viceral Design";

/**
 * VARIABLES
 * Define values that will change e.g. user inputs, counters, etc.
 */
// (e.g.) let currentImageIndex = 0;

/**
 * FUNCTIONS
 * Group code into functions to make it reusable
 */
// (Add reusable logic here later, e.g., image navigation)

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page
 */
window.addEventListener('DOMContentLoaded', () => {
    document.title = PAGE_TITLE;

    // Initialize image modal viewer
    console.log("About to call setupImageModalViewer");
    setupImageModalViewer();

    // Additional event listeners go here
});
