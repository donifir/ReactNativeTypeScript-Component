import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from '../model/user';
import { UserDetail } from '../model/userDetail';

axios.defaults.baseURL = 'http://192.168.91.12:8000/api';

const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

export const getUserList = createAsyncThunk(
  'data/getData',
  async () =>
    await axios
      .get('/data')
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal',error.response);
        // return rejectWithValue(error.response);
      }),
);
//craete barang
export const postUserCreate = createAsyncThunk(
  'user/userCreate',
  async (formData:any, {rejectWithValue}) =>
    await axios
      .post('data/create', formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

// 
export interface Sending {
  userId: string
  formData:any
}
export const getUserDetail = createAsyncThunk(
  'user/userDetail',
  async (userId:string, {rejectWithValue}) =>
    await axios
      .get(`/data/${userId}`)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal',error.response);
        return rejectWithValue(error.response);
      }),
);

//update barang
export const postUserUpdate = createAsyncThunk(
  'user/userUpdate',
  async ({formData,userId}:{formData:any,userId:string}, {rejectWithValue}) =>
    await axios
      .post(`data/${userId}/update`, formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

//update delete
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (userId:string, {rejectWithValue}) =>
    await axios
      .delete(`data/${userId}/delete`, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

type DataState = {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: User[];
  dataDetail: UserDetail
};

const initialState: DataState = {
  isPending: false,
  isSuccess: false,
  isError: false,
  data:[] ,
  dataDetail:{nama:'',alamat:'',email:'',quotes:'',id:'',created_at:'',updated_at:''} ,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  
  extraReducers(builder) {
    builder.addCase(getUserList.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      state.data = action.payload;
    });
    builder.addCase(getUserList.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
    });

    //create
    builder.addCase(postUserCreate.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(postUserCreate.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      // (state.data = action.payload);
    });
    builder.addCase(postUserCreate.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
    });

    //dataDetail
    builder.addCase(getUserDetail.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      (state.dataDetail = action.payload);
    });
    builder.addCase(getUserDetail.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
    });

    //delete
    builder.addCase(deleteUser.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      // (state.dataDetail = action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
    });

  },
});

export default userSlice.reducer;