// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncayght:exception', (err, runnable)=>{
    return false
})// con esto le hacemos bypas o saltamos los errores que pueda tener la pagina que no nos deje hacer los tests
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')