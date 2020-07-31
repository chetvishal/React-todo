export const addTodo = (todo) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        
        firestore.collection('todos').doc(`${todo.id}`).set({
            ...todo
        })

        dispatch({type: 'ADD_TODO', todo})
    }
}