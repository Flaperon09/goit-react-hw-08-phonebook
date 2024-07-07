import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        // === HTTP-запрос получения контактов
        const response = await axios.get("/contacts");
        // === При успешном запросе возвращаем промис с данными
        return response.data;
    } catch (event) {
        // === При ошибке запроса возвращаем промис ошибки
        return thunkAPI.rejectWithValue(event.message);
    } 
});

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (text, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", text);
        return response.data;
    } catch (event) {
        return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (event) {
        return thunkAPI.rejectWithValue(event.message);
    }
  }
);