export const addNote = ({
    commit
}) => {
    commit('ADD_NOTE');
};

export const getActiveNote = ({
    commit
}, noteObj) => {
    commit('GET_ACTIVE_NOTE', noteObj)
};

export const editNote = ({
    commit
}, e) => {
    commit('EDIT_NOTE', e.target.value)
};

export const toggleFavorite = ({
    commit
}) => {
    commit('TOGGLE_FAVORITE');
};

export const delNote = ({
    commit
}) => {
    commit('DEL_NOTE');
};

export const filterNote = ({
    commit
}) => {
    commit('FILTER_NOTE')
};

export const allNote = ({
    commit
}) => {
    commit('ALL_NOTE');
};

export const fetchNote = ({
    commit
}, localStorageNote) => {
    commit('FETCH_NOTE', localStorageNote)
}