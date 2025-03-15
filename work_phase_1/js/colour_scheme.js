/** 
 * Imports
 * Modules Used:
 */
import {logMessage} from "../js/modules/logging.js";

/**
 * Constants
 * Define values that don't change
 */
const PAGE_NAME = "colour_scheme.js";

/**
 * Variables
 * Values that will change
 */

let message = "Page has fully loaded";

/**
 * Event Listeners
 * Code running while users interacts with page
 */
window.addEventListener("load", () => {
    logMessage(PAGE_NAME, message);
}
)

