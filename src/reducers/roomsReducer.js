const UPDATE_KITCHEN_DATA = "UPDATE_KITCHEN_DATA"
const UPDATE_ATTIC_DATA = "UPDATE_ATTIC_DATA"
const UPDATE_BATHROOM_DATA = "UPDATE_BATHROOM_DATA"
const UPDATE_LIVINGROOM_DATA = "UPDATE_LIVINGROOM_DATA"
const UPDATE_BEDROOM_DATA = "UPDATE_BEDROOM_DATA"

const defaultState = {
    kitchen: {
        temp: "40℃",
        light: "20%"
    },
    attic: {
        temp: "40℃",
        light: "20%"
    },
    bathroom: {
        temp: "40℃",
        light: "20%"
    },
    livingroom: {
        temp: "40℃",
        light: "20%"
    },
    bedroom: {
        temp: "40℃",
        light: "20%"
    },
}
export default function roomsReducer(state = defaultState, action)
{
    switch (action.type)
    {
        case UPDATE_KITCHEN_DATA:
            return {...state, kitchen: action.payload}
        case UPDATE_ATTIC_DATA:
            return {...state, attic: action.payload}
        case UPDATE_BATHROOM_DATA:
            return {...state, bathroom: action.payload}
        case UPDATE_LIVINGROOM_DATA:
            return {...state, livingroom: action.payload}
        case UPDATE_BEDROOM_DATA:
            return {...state, bedroom: action.payload}
        default: 
            return state;
    }
}

export const setKitchenData = kitchen_data => ({type: UPDATE_KITCHEN_DATA, payload: kitchen_data})
export const setAtticData = attic_data => ({type: UPDATE_ATTIC_DATA, payload: attic_data})
export const setBathroomData = bathroom_data => ({type: UPDATE_BATHROOM_DATA, payload: bathroom_data})
export const setLivingRoomData = livingroom_data => ({type: UPDATE_LIVINGROOM_DATA, payload: livingroom_data})
export const setBedroomData = bedroom_data => ({type: UPDATE_BEDROOM_DATA, payload: bedroom_data})