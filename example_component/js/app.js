/*
 * Simple Vue example that uses a component.
 *
 * @author Robert C. Duvall
 */

// load another component to be used in the standard Vue object
import SingleFileComponent from './SingleFileComponent.js'

// simply creating the Vue instance does all the necessary set up, so no need to name it
new Vue({
    // HTML element to attach Vue app
    el: '#app',
    // components (HTML, CSS, and JS) used by this app
    components: {
        SingleFileComponent
    }
})
