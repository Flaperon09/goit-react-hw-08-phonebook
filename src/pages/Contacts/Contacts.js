import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchTasks } from 'redux/tasks/operations';

import { getError, getIsLoading } from "../redux/selectors";
import { Section } from './Section';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { Loader } from "./Loader"; 

export default function Tasks() {
    //   const dispatch = useDispatch();
    //   const isLoading = useSelector(selectLoading);
    
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>Your tasks</title>
            </Helmet>
            <Section title="Phonebook">
                <Form />
            </Section>

            <Section title="Contacts">
                <Filter />
                <ContactsList />
                {/* Показывать загрузчик пока не получен ответ бекэнда */}
                {isLoading && !error && <Loader />}
            </Section>
        </div>
    );
}