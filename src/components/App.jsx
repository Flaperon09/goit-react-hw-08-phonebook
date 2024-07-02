import { GlobalStyle } from "../GlobalStyle";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import Header from './Header';
// import Home from '../pages/Home';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import Contacts from '../pages/Contacts';
// import NotFound from '../pages/NotFound';


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../redux/operations";
// import { getError, getIsLoading } from "../redux/selectors";

const Header = lazy(() => import('./Header'));
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

// import { Section } from './Section';
// import Form from './Form';
// import { ContactsList } from './ContactsList';
// import { Filter } from './Filter';
// import { Loader } from "./Loader"; 

export default function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // === Запрос на бекэнд при монтировании страницы
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  
  return (
    <div>

      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} /> {/* Страница с сообщением об ошибке навигации */}
        </Route>
      </Routes>

    </div>

    // <div>

    //   <GlobalStyle />

    //   <Section title="Phonebook">
    //     <Form />
    //   </Section>

    //   <Section title="Contacts">
    //     <Filter />
    //     <ContactsList />
    //     {/* Показывать загрузчик пока не получен ответ бекэнда */}
    //     {isLoading && !error && <Loader />}
    //   </Section>

    // </div>
  )
};