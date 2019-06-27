import { createStore, combineReducers } from "redux";

interface DashboardState {
    counter: number;
}

const DASHBOARD_INITIAL_STATE: DashboardState = {
    counter: 0
}

export default function configureStore() {
    const store = createStore(combineReducers({
        dashboard: (state: DashboardState = DASHBOARD_INITIAL_STATE, action) => {
            switch (action.type) {
                case 'INCREMENT': 
                    return { ...state, counter: state.counter + action.count     };
                default:
                    return state;
            }
        }
    }));

    return store;
}   