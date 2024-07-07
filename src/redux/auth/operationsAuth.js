import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// Добавление токена авторизации
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Удаление токена авторизации
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/* Регистрация пользователя
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      // После успешной регистрации добавляем токен в заголовок HTTP-запроса
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Вход пользователя
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      // После успешного входа добавляем токен в заголовок HTTP-запроса
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Выход пользователя
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    // После успешного выхода удаляем токен из заголовока HTTP-запроса
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/* Сохранение входа при перезагрузке страницы
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);