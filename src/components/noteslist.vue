<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes | coligo</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All Notes button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" v-on:click="showAll" v-bind:class="{active: navShow=='all'}">
                        All Notes
                    </button>
                </div>
                <!-- Favorites Button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" v-on:click="showFavorite" v-bind:class="{active: navShow=='favorite'}">
                        Favorites
                    </button>
                </div>
            </div>
        </div>
        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group">
                <a class="list-group-item" href="#" v-for="(note, index) in notes" v-on:click="getActiveNote(note, index)" v-bind:class="{active: show==index}">
                    <h4 class="list-group-item-heading" v-bind:class="{'favorite-active': note.favorite}">
                       {{note.text.trim().substring(0, 10)}}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    name: 'noteslist',
    data() {
        return {
            show: 'all',
            navShow: 'all'
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.fetchlocalStorageNote();
        })
    },
    computed: {
        ...mapGetters([
            'notes',
            'storageKey'
        ])
    },
    methods: {
        fetchlocalStorageNote() {
            let localStorageNote = JSON.parse(window.localStorage.getItem(this.storageKey)) || [];
            this.$store.dispatch('fetchNote', localStorageNote);
        },
        getActiveNote(note, index) {
            this.show = index;
            this.$store.dispatch('getActiveNote', {
                note,
                index
            });
        },
        showAll() {
            this.navShow = 'all';
            this.$store.dispatch('allNote');
        },
        showFavorite() {
            this.navShow = 'favorite';
            this.$store.dispatch('filterNote');
        }
    }
}
</script>
<style scoped>
.btn-group {
    float: left;
}

.btn-group:first-child {
    margin-right: 20px;
}

.list-group {
    padding: 5px 25px 25px 25px;
}

.list-group-item-heading {
    margin: 10px 0;
}

.list-group-item.active {
    color: #f00;
}

.list-group-item-heading::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 22px;
    vertical-align: middle;
    margin-right: 10px;
    background: url('/static/images/2.jpg') no-repeat;
}

.list-group-item-heading.favorite-active::before {
    background-image: url('/static/images/1.jpg');
}

.btn.btn-default {
    box-sizing: border-box;
    border: none;
    width: 100px;
    height: 24px;
    line-height: 24px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
}

.btn.btn-default.active {
    background: #f00;
}
</style>
