import { createStore } from "redux";
import _ from 'lodash'

import consola from 'consola'

function favorite(state = [], action){
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            state.push({city: action.city});
            return state;
    }
}

const store = createStore(favorite);

store.subscribe(() => consola.info('listen favorite state', store.getState()));

export default store