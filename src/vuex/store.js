import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    notes: [],
    activeNote: [],
    activeNoteIndex: 0,
    favoriteNote: [],
    tempNotes: [],
    storage_key: 'storage_key'
};

const mutations = {
    ADD_NOTE(state) {
        const newNote = {
            text: 'new note',
            favorite: false
        };
        state.notes.push(newNote);
        window.localStorage.setItem(state.storage_key, JSON.stringify(state.notes));
    },
    GET_ACTIVE_NOTE(state, noteObj) {
        state.activeNote = noteObj.note;
        state.activeNoteIndex = noteObj.index;
        window.localStorage.setItem(state.storage_key, JSON.stringify(state.notes));
    },
    EDIT_NOTE(state, value) {
        state.activeNote.text = value;
        window.localStorage.setItem(state.storage_key, JSON.stringify(state.notes));
    },
    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite;
        window.localStorage.setItem(state.storage_key, JSON.stringify(state.notes));
    },
    DEL_NOTE(state) {
        if (state.notes.length == 1) {
            state.notes.splice(state.activeNoteIndex, 1);
            state.activeNote = [];
        } else {
            state.notes.splice(state.activeNoteIndex, 1);
            state.activeNote = state.notes[0];
            state.activeNoteIndex = 0;
        }
        window.localStorage.setItem(state.storage_key, JSON.stringify(state.notes));
    },
    FILTER_NOTE(state) {
        state.tempNotes = state.notes;
        state.notes = state.notes.filter(note => note.favorite);
    },
    ALL_NOTE(state) {
        state.notes = state.tempNotes;
    },
    FETCH_NOTE(state, localStorageNote) {
        state.notes = localStorageNote;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});