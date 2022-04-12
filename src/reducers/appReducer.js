const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"
const defaultState = {
    loader: false
}
export default function appReducer(state = defaultState, action)
{
    switch (action.type)
    {
        case SHOW_LOADER:
            return {...state, loader: !state.loader}
        case HIDE_LOADER:
            return {...state, loader: false}
        default: 
            return state;
    }
}
export const changeShowState = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})