import { GlobalStyle } from "../GlobalStyle";
import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operationsAuth";
import { Loader } from "./Loader";

// import Header from './Header';
// import Home from '../pages/Home';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import Contacts from '../pages/Contacts';
// import NotFound from '../pages/NotFound';

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

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // === Запрос на бекэнд при монтировании страницы
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing
    ? 
    <Loader />
   : (
    <div>

      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} /> }/>
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
          <Route path="*" element={<NotFound />} /> {/* Страница с сообщением об ошибке навигации */}
        </Route>
      </Routes>

    </div>
  )
};