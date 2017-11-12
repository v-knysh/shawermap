const initialState = {
    points: [
        {
            lat: 50,
            lng: 30,
            name: 'point0',
        },
        {
            lat: 51,
            lng: 31,
            name: 'point1',
        },
        {
            lat: 52,
            lng: 32,
            name: 'point2',
        },
    ],
    // latWest: 0,
    // latEast: 0,
    // lngWest: 0,
    // lngEast: 0,
};

export default function points(state = initialState, action) {
    console.log('in reducer', action);
    switch(action.type){
        case 'TEST_ADD_POINT':

            // const newVar = {...state, points: {points: [...state.points.points, action.payload.point]}};
            const newVar = {...state, points: [...state.points, action.payload.point]};
            console.log('state in reducer', newVar);
            return newVar;
            break;
        default:
            return state
    }

    return state;
}