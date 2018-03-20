// export anonymous object from this module so it can be accessed by others when imported
export default {
    // NOTE use of backtick quote, `, to allow new lines to be included in the string
    template: `
        <!-- template must have a SINGLE root tag that encloses all others -->
        <li class="title">{{ item.title }}
            <ul class="category">
                <li class="link" v-for="link in item.links">
                    <a :href="link.url">{{ link.name }}</a>
                </li>
            </ul>
        </li>
    `,
    // tracked parameter value that is given as an attribute in the HTML code
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
