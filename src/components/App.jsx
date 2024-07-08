import { GlobalStyle } from "../GlobalStyle";
import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operationsAuth";
import { Loader } from "./Loader";
import { Toaster } from "react-hot-toast";

const Header = lazy(() => import('./Header'));
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
      
      <Toaster position="top-center" />
      
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