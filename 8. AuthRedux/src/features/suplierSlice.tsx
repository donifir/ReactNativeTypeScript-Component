import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../app/store';
import {SuplierModel} from '../model/SuplierModel';

// export interface DataState {
//   isPending: boolean;
//   isSuccess: boolean;
//   isError: boolean;
//   listDataSuplier:SuplierModel[];
//   dataUSer:any;
// }

// const initialState: DataState = {
//   dataUSer:[],
//   isPending: false,
//   isSuccess: false,
//   isError: false,
//   listDataSuplier:[]

// };
const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

export const getListSuplier = createAsyncThunk(
  'data/getData',
  async (_, {rejectWithValue}) =>
    await axios
      .get('/suplier')
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response);
        return rejectWithValue(error.response);
      }),
);

export const postCreateSuplier = createAsyncThunk(
  'create/createSuplier',
  async (formData: any, {rejectWithValue}) =>
    await axios
      .post('/suplier/create', formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response.data);
        return rejectWithValue(error.response.data);
      }),
);

export const postEditSuplier = createAsyncThunk(
  'edit/editSuplier',
  async (
    {formData, userId}: {formData: any; userId: string},
    {rejectWithValue},
  ) =>
    await axios
      .post(`/suplier/${userId}/update`, formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal', error.response.data);
        return rejectWithValue(error.response.data);
      }),
);

export const deleteSuplier = createAsyncThunk(
  'delete/deleteSuplier',
  async (id:any,{rejectWithValue},
  ) =>
    await axios
      .delete(`/suplier/${id}/delete`, header)
      .then(function (response) {
        console.log('sukses');
        return id;
      })
      .catch(function (error) {
        console.log('data gagal', error.response);
        return rejectWithValue(error.response.data);
      }),
);

const suplierAdapter = createEntityAdapter<SuplierModel>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: suplier => suplier.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.nama_suplier.localeCompare(b.nama_suplier),
});

export const suplierSlice = createSlice({
  name: 'user',
  initialState: suplierAdapter.getInitialState({
    dataUSer: suplierAdapter.getInitialState(),
    isPending: false,
    isSuccess: false,
    isError: false,
    listDataSuplier: [],
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListSuplier.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(getListSuplier.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false),
        suplierAdapter.setAll(state, action.payload),
        (state.listDataSuplier = action.payload);
    });
    builder.addCase(getListSuplier.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = false),
        (state.isError = true);
    });

    // create
    builder.addCase(postCreateSuplier.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false),
        suplierAdapter.addOne(state, action.payload);
    });

    // edit
    builder.addCase(postEditSuplier.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false),
        suplierAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
    });

    // delete
    builder.addCase(deleteSuplier.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
        suplierAdapter.removeOne(state, action.payload);
    });
  },
});

export const suplierSelectors = suplierAdapter.getSelectors<RootState>(
  state => state.suplier,
);
export default suplierSlice.reducer;
