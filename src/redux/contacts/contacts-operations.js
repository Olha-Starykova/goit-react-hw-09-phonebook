import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    // changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions'



const fetchTodos = () =>  dispatch => {
    dispatch(fetchContactRequest());

    // try {
    //     const { data } = await axios.get('/contacts');
    //     dispatch(fetchContactSuccess(data))
    // } catch (error) {
    //     dispatch(fetchContactError(error.message))
    // }
     axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error.message)));
} 

const addTodo = (name, number) =>  dispatch => {
    const contacts = { name, number }
    dispatch(addContactRequest())

    // try {
    //     const { data } = await axios.post('/contacts', contacts)
    //     dispatch(addContactSuccess(data))
    // } catch (error) {
    //     dispatch(addContactError(error.message))
    // }
    axios
        .post('/contacts', contacts)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
};


const deleteTodo = contactId =>  dispatch => {
    dispatch(deleteContactRequest())

      axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));

};
    

export default {
    fetchTodos,
    addTodo,
    deleteTodo,
}