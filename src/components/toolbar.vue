<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" v-on:click="addNote">添加</i>
        <i class="glyphicon glyphicon-star" v-on:click="toggleFavorite">收藏</i>
        <i class="glyphicon glyphicon-remove" v-on:click="delNote">删除</i>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'toolbar',
    methods: {
        ...mapActions([
            'addNote',
            'toggleFavorite',
            'delNote'
        ])
    },
    computed:{
        ...mapGetters([
            'storageKey'
        ])
    }
}
</script>
<style scoped>
.glyphicon {
    display: block;
    font-style: normal;
    font-size: 22px !important;
}
</style>
