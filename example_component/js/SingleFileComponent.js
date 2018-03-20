/*
 * Simple Vue component example.
 *
 * @author Robert C. Duvall
 */

// export anonymous object from this module so it can be accessed by others when imported
export default {
    // NOTE use of backtick quote, `, to allow new lines to be included in the string
    template: `
        <!-- template must have a SINGLE root tag that encloses all others -->
        <div>
            <h2 :style="h2style">{{ greeting }} {{ name }}!</h2>
            <p><button @click="reverseName">Reverse Name</button></p>
            <p><input v-model="name"></p>
            <p>{{ length }}</p>
            <p v-if="showStatus">{{ status }}</p>
        </div>
    `,
    // tracked parameter value that is given as an attribute in the HTML code
    props: [ 'greeting' ],
    // NOTE in a component, data must be a function that returns a NEW version of the values
    data () {
        return {
            name: 'Vue',
            status: 'You loaded this page on ' + new Date().toLocaleString(),
            showStatus: false,
            // inline components cannot have a separate CSS style, so store it in a variable
            h2style: {
                'color': 'violet'
            }
        }
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
        'length': function () {
          this.showStatus = !this.showStatus
        }
    }
}
