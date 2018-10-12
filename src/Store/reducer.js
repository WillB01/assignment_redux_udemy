const initialState = {
    persons: []
}

const reducer = (state = initialState, actions) =>  {
    if ( actions.type === 'PERSON_ADD') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        };
        const newPersonArr = state.persons.concat(newPerson);
        return {
            ...state,
            persons: newPersonArr

        }
    }
    if (actions.type === 'PERSON_DELETE') {
        const updatedPersons = state.persons.filter(person => person.id !== actions.id)
        return {
            ...state,
            persons: updatedPersons

        }
    }
    return state;
}

export default reducer;