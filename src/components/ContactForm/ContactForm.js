import React, { useState, useCallback } from 'react';
  //ставим npm i shortid
import shortid from 'shortid';
import './ContactForm.css'
import { useDispatch, useSelector } from 'react-redux'
import contactsOperations from '../../redux/contacts/contacts-operations'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

  

export default function ContactForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const contacts = useSelector(contactsSelectors.getAllTodos)


//   state = {
//     name: '', 
//     number: ''
//   };
// //генерим там лежит уникалый индефикатор
  let nameInputId = shortid.generate()
  let numberInputId = shortid.generate();

  const hendelChangeName = useCallback( e => {
    setName(e.currentTarget.value)
  },[]);
  const hendelChangeNumber = useCallback(e => {
    setNumber(e.currentTarget.value)
  },[]);
   
  const  hendelSubmit = useCallback( e => { 
    e.preventDefault();
    
        if (contacts.map(({ name }) => name).includes(name)) {
        alert(`${name} is already in contacts`)
        return
    }

     dispatch(contactsOperations.addTodo(name, number)) 
//this.props.onSubmit( this.state.name, this.state.number)
         
    setName('')
    setNumber('')
  },[dispatch, name, number,contacts])

//     //общий метод для инпутов патерн для форм по внешнему виду контролируемый елемент
//     hendelChange = e => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value,
//         })
//     };
//     //сабмит формы
//     hendelSubmit = e => { 
//         e.preventDefault();
//         if (this.props.contacts.map(({ name }) => name).includes(this.state.name)) {
//         alert(`${this.state.name} is already in contacts`)
//         return
//       }
//        this.props.onSubmit( this.state.name, this.state.number)
      
//         this.reset();
//     };
//     //сброс формы очистить стейт
//   reset = () => {
//     this.setState({
//       name: '',
//       number: ''
//     })
//   };

    
      return (
        <form className='form' onSubmit={hendelSubmit}>
          <label htmlFor={nameInputId}>
            Name <input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={nameInputId}
              onChange={hendelChangeName}
            />
          </label>
          <label htmlFor={numberInputId}>
            Number <input
              type="tel"
              value={number}
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              id={numberInputId}
              onChange={hendelChangeNumber}
              required
            />
          </label>
                            
          <button className="button" type='submit'>Add contacts</button>
      
        </form>
            
      );
  };


//    ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


// const mapStateToProps = state => {
// //  return {contacts: state.contacts.contacts}
//    return {contacts: contactsSelectors.getAllTodos(state) }
//   }


// const mapDispatchToProps = dispatch => ({
//     onSubmit: (name, number) => dispatch(contactsOperations.addTodo(name, number)) 
// })


// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);