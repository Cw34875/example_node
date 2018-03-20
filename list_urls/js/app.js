/*
 * List your favorite URLs.
 *
 * @author Robert C. Duvall
 */

// load another component to be used in the standard Vue object
import UrlList from './SingleFileComponent.js'

// simply creating the Vue instance does all the necessary set up, so no need to name it
new Vue({
    // HTML element to attach Vue app
    el: '#app',
    // data to be tracked by Vue
    data: {
        // track this data, but do not have initial value
        items: []
    },
    // components (HTML, CSS, and JS) used by this app
    components: {
        UrlList
    },
    // functions you want to be called from HTML code
    methods: {
        // load links in the background without reloading page
        loadLinks (url) {
            fetch(url).then(response => response.json())
                      .then(data => this.items = data)
                      .catch(error => console.log(error))
        }
    },
    // called after page and app is completely loaded
    mounted () {
        this.loadLinks('data/nested_links.json')
    }
})
