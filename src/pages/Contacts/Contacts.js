import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

import { getError, getIsLoading } from "../../redux/selectors";
import { Section } from '../../components/Section';
import  Form  from '../../components/Form';
import { ContactsList } from '../../components/ContactsList';
import { Filter } from '../../components/Filter';
import { Loader } from "../../components/Loader"; 

export default function Contacts() {
    
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <Section title="New contact">
                <Form />
            </Section>

            <Section title="Your contacts">
                <Filter />
                <ContactsList />
                {/* Показывать загрузчик пока не получен ответ бекэнда */}
                {isLoading && !error && <Loader />}
            </Section>
        </div>
    );
}