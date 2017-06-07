<template>
    <div id="note-editor">
        <textarea class="form-control" v-bind:value="activeNote.text" v-on:input="editNote"></textarea>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'editor',
    computed: {
        ...mapGetters([
            'activeNote'
        ])
    },
    methods: {
        ...mapActions([
            'editNote'
        ])
    }
}
</script>
<style></style>
