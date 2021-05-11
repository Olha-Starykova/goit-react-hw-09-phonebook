import {createSelector} from '@reduxjs/toolkit'

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllTodos = state => state.contacts.contacts

// const getVisibleTodos = state => {
//     const filter = getFilter(state)
//     const contacts = getAllTodos(state)
//     const normalizedFilter = filter.toLowerCase();
    
//     return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//     );
// };

//предаем от чего зависит мемонизация для кеширования аргументов
const getVisibleTodos = createSelector(
    [getAllTodos, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    },
);

export default {
    getLoading,
    getFilter,
    getVisibleTodos,
    getAllTodos,
};