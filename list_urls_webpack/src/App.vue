<template>
    <div id="app">
        <h1>My Favorite Sites</h1>
        <ul id="js-linklist">
            <url-list v-for="item in items" :key="item.title" :item="item"></url-list>
        </ul>
    </div>
</template>

<script>
// load another component to be used in the standard Vue object
import UrlList from './components/URLList.vue'
// load JSON file driectly as JavaScript data structure, not recommended for LARGE data files
import LINKS from './assets/nested_links.json'

// export anonymous object from this module so it can be accessed by others when imported
export default {
    name: 'app',
    // NOTE in a component, data must be a function that returns a NEW version of the values
    data () {
        return {
            items: LINKS
        }
    },
    // components (HTML, CSS, and JS) used by this app
    components: {
        UrlList
    }
}
</script>

<style lang="scss" scoped>
$header-color: hotpink;

h1 {
    color: $header-color;
}
</style>
