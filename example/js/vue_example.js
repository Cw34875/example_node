/*
 * Simple Vue example.
 *
 * @author Robert C. Duvall
 */

// simply creating the Vue instance does all the necessary set up, so no need to name it
new Vue({
    // HTML element to attach Vue app
    el: '#app',
    // data to be tracked by Vue
    data: {
        name: 'Vue',
        status: 'You loaded this page on ' + new Date().toLocaleString(),
        showStatus: false
    },
    // functions that can be used like data in HTML code
    computed: {
        length () {
            return this.name.length
        }
    },
    // functions you want to be called from HTML code
    methods: {
        reverseName () {
            this.name = this.name.split('').reverse().join('')
        }
    },
    // functions that are called automatically when the named "value" changes
    watch: {
        'length': function() {
            this.showStatus = !this.showStatus
        }
    }
})
