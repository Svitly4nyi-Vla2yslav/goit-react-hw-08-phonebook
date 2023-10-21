import { ContactForm } from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList'
import Filter from 'components/Filter'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/operations'
import { selectError, selectIsLoading } from 'redux/selector'

export const ContactsPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
  
    useEffect(() => {
      dispatch(fetchContacts())
    },[dispatch])
  return (
    <div><div>
    <h1 className='Phonebook__title'>Phonebook</h1>
    <ContactForm />
    <h2 className='Phonebook__title'>Contacts</h2>
    <Filter />
    <ContactList />
    {isLoading && !error}
  </div></div>
  )
}
