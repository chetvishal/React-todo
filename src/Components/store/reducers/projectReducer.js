
const initState = {}
const projectReducer = (state = initState, action) => {
    switch(action.type){

        case 'ADD_TODO': 
            console.log('ADDED A TODO')
            console.log(action.todo)
            return state;

        case 'REMOVE_TODO': 
            console.log('REMOVE SUCCESS', action.err) 
            return state;
        case 'REMOVE_ERROR':
            console.log('REMOVE ERROR', action.err) 
            return state;
        default: 
            return state;
    }
}
export default projectReducer;