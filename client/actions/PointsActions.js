export function addPoint(lat=50, lng=30, name='test') {
    console.log('in action');
    return {
        type: 'TEST_ADD_POINT',
        payload: { point: { lat, lng, name}}
    }
}