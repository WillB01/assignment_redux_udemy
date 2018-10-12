const initialState = {
    persons: []
}

const reducer = (state = initialState, actions) =>  {
    if ( actions.type === 'PERSON_ADD') {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: actions.personData.name,
            age: actions.personData.age
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