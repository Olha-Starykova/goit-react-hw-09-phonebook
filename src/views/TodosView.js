import React, { Component } from 'react';
 import ContactForm from '../components/ContactForm/ContactForm';
 import ContactList from '../components/ContactList/ContactList';
 import Filter from '../components/Filter/Filter';
 import { connect } from 'react-redux';
 import contactsOperations from '../redux/contacts/contacts-operations'
 import contactsSelectors from '../redux/contacts/contacts-selectors'



class TodosView  extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }
  // const App = () => (
  render() {
    return (
      <div>
   
        <h1>Phonebook</h1>
        {this.props.isLoading && <h1>...Loading</h1>}
        <ContactForm />
        <h2>Contacts</h2>
        
         <Filter />
     
        <ContactList /> 

  
      </div>

 
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
fetchTodos: ()=>dispatch(contactsOperations.fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosView );