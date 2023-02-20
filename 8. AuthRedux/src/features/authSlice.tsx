import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ResponsUserModel} from '../model/ResponsUserModel';
import {UserModels} from '../model/UserModel';

axios.defaults.baseURL = 'http://192.168.91.12:8000/api';

const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getUserList = createAsyncThunk(
  'data/getData',
  async (_, {rejectWithValue}) =>
    await axios
      .get('/user')
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response);
        return rejectWithValue(error.response);
      }),
);

export const postDataRegister = createAsyncThunk(
  'register/postRegister',
  async (formData: any, {rejectWithValue}) =>
    // console.log('data masuk')
    await axios
      .post('/register', formData, header)
      .then(function (response) {
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('username', response.data.username);
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

export const postDataLogin = createAsyncThunk(
  'login/postLogin',
  async (formData: any, {rejectWithValue}) =>
    // console.log('data masuk')
    await axios
      .post('/login', formData, header)
      .then(function (response) {
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('username', response.data.username);
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response.data.messages);
        return rejectWithValue(error.response.data.messages);
      }),
);

export const postDataLogout = createAsyncThunk(
  'logout/postLogout',
  async (_, {rejectWithValue}) =>
    await axios
      .post('/logout', header)
      .then(function (response) {
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('username');
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response.data.messages);
        return rejectWithValue(error.response.data.messages);
      }),
);
export const resetState = createAsyncThunk('reset/resetState', async () => {
  return 'success';
});

export interface DataState {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  isRedirect: boolean;
  dataUser: UserModels;
  dataResponUser: ResponsUserModel;
  dataError: any;
}

const initialState: DataState = {
  isPending: false,
  isSuccess: false,
  isError: false,
  dataResponUser: {suceess: false, messages: [], token: '', username: ''},
  dataUser: {name: '', email: '', password: '', confirmPassword: ''},
  dataError: [],
  isRedirect: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // reset state
    builder.addCase(resetState.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = false),
        (state.isError = false);
      state.isRedirect = false;
    });

    //Register
    builder.addCase(postDataRegister.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(postDataRegister.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      state.isRedirect = true;
      state.dataUser = action.payload;
    });
    builder.addCase(postDataRegister.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = false),
        (state.isError = true);
      state.dataError = action.payload;
    });

    //Login
    builder.addCase(postDataLogin.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
      state.dataError = [];
    });
    builder.addCase(postDataLogin.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isRedirect = true);
      state.isError = false;
      state.dataResponUser = action.payload;
    });
    builder.addCase(postDataLogin.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = false),
        (state.isError = true);
      state.dataError = action.payload;
    });

    //Logout
    builder.addCase(postDataLogout.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
      // (state.dataError = []);
    });
    builder.addCase(postDataLogout.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
        (state.isRedirect = true);
      // (state.dataResponUser = action.payload);
    });
    builder.addCase(postDataLogout.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = false),
        (state.isError = true);
      // (state.dataError = action.payload);
    });
  },
});

export default userSlice.reducer;
