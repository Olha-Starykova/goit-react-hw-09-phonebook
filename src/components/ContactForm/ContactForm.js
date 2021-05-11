import React, { Component } from 'react';
import PropTypes from "prop-types";
  //ставим npm i shortid
import shortid from 'shortid';
import './ContactForm.css'
import { connect } from 'react-redux'
import contactsOperations from '../../redux/contacts/contacts-operations'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

  

class ContactForm extends Component {
  state = {
    name: '', 
    number: ''
  };
//генерим там лежит уникалый индефикатор
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
   
    //общий метод для инпутов патерн для форм по внешнему виду контролируемый елемент
    hendelChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    };
    //сабмит формы
    hendelSubmit = e => { 
        e.preventDefault();
        if (this.props.contacts.map(({ name }) => name).includes(this.state.name)) {
        alert(`${this.state.name} is already in contacts`)
        return
      }
       this.props.onSubmit( this.state.name, this.state.number)
      
        this.reset();
    };
    //сброс формы очистить стейт
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  };


    render() {
      return (
        <form className='form' onSubmit={this.hendelSubmit}>
          <label htmlFor={this.nameInputId}>
            Name <input
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
              onChange={this.hendelChange}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number <input
              type="tel"
              value={this.state.number}
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              id={this.numberInputId}
              onChange={this.hendelChange}
              required
            />
          </label>
                            
          <button className="button" type='submit'>Add contacts</button>
      
        </form>
            
      );
  };
};


   ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const mapStateToProps = state => {
//  return {contacts: state.contacts.contacts}
   return {contacts: contactsSelectors.getAllTodos(state) }
  }


const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsOperations.addTodo(name, number)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);