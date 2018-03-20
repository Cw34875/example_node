<template>
    <!-- template must have a SINGLE root tag that encloses all others -->
    <li class="title">{{ item.title }}
        <ul class="category">
            <li class="link" v-for="link in item.links">
                <a :href="link.url">{{ link.name }}</a>
            </li>
        </ul>
    </li>
</template>

<script>
// export anonymous object from this module so it can be accessed by others when imported
export default {
    name: 'URLList',
    props: [ 'item' ]
}
</script>

<style lang="scss" scoped>
/* NOTE, scoped limits style to ONLY tags within this template */
$link-color: darkorange;
$item-color: lightseagreen;
$bullet-color: darken($item-color, 8%);

a {
    color: $link-color;
}

li.title {
    color: $item-color;
    list-style: none;
    margin: 20px 0 0 0;
    font-size: 18px;
    font-weight: bold;
}

li.link {
    color: $bullet-color;
    list-style: square;
    font-weight: normal;
    font-size: 14px;
}
</style>
