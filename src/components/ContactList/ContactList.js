import React from 'react';
import PropTypes from "prop-types";
import './ContactList.css'
import { useDispatch, useSelector} from 'react-redux'
import  contactsOperations from '../../redux/contacts/contacts-operations'
import contactsSelectors from '../../redux/contacts/contacts-selectors'


export default function ContactList() {

    const dispatch = useDispatch()
    const contacts = useSelector(contactsSelectors.getVisibleTodos)
   const onDeleteTodo = id =>  dispatch(contactsOperations.deleteTodo(id)) 

    
    return (
        <ul className="TodoList">
            {contacts.map(({ id, name, number }) => (
                <li key={id} className="TodoList__item">
                    <p className="TodoList__text">{name}: {number}</p>
                    <button onClick={() => onDeleteTodo(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
  


  
// const mapStateToProps = state => ({
//     contacts: contactsSelectors.getVisibleTodos(state)
// })


// const mapDispatchToProps = dispatch => ({
//     onDeleteTodo: (id) => dispatch(contactsOperations.deleteTodo(id))
// })


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}

//export default connect(mapStateToProps, mapDispatchToProps)(ContactList);