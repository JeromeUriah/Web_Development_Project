/**
 * Module: Logging
 * Generic logging using consol.log
 */

function logMessage(pageName, message) {
    console.log(`From ${pageName}:${message}`);
}

export {logMessage};