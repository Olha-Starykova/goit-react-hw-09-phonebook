import React from 'react';
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'


export default function Filter() {

  const filter = useSelector(contactsSelectors.getFilter)

  const dispatch = useDispatch();
 const onChange = e => dispatch(contactsActions.changeFilter(e.target.value))

  return(
  <label className="label">
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
  </label>
);
} 

// const mapStateToProps = state => ({
//     // filter: state.contacts.filter
//    filter: contactsSelectors.getFilter(state)
// })


// const mapDispatchToProps = dispatch => ({
//     onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
// })



// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Filter);