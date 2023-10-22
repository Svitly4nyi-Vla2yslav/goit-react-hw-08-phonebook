import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'

import { Filter } from 'components/Filter/Filter'

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/operations'
import { selectError, selectIsLoading } from 'redux/selector'

const ContactsPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
  
    useEffect(() => {
      dispatch(fetchContacts())
    },[dispatch])
  return (
    <div>
    <h1 className='Phonebook__title'>Phonebook</h1>
    <ContactForm />
    <h2 className='Phonebook__title'>Contacts</h2>
    <Filter />
    <ContactList />
    {isLoading && !error}
  </div>
  )
}
export default ContactsPage;