import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'


export const getJobType = createAsyncThunk(
    'getJobType',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.get('/common/get-job-type')
        return response.data; 
      }catch(error:any){
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue({ message: 'Network error' });
        }
      }  
    }
  )

  export const getIncharge = createAsyncThunk(
    'getIncharge',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.get('/common/getIncharge?'+userData)
        return response.data; 
      }catch(error:any){
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue({ message: 'Network error' });
        }
      }  
    }
  )

  export const getAllFloor = createAsyncThunk(
    'getFloor',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.get('/common/getAllFloor')
        return response.data; 
      }catch(error:any){
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue({ message: 'Network error' });
        }
      }  
    }
  )

  export const getAllShift = createAsyncThunk(
    'getShift',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.get('/common/getAllShift')
        return response.data; 
      }catch(error:any){
        if (error.response) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue({ message: 'Network error' });
        }
      }  
    }
  )
  
const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading : false,
    getJobType : [],
    inchargeList : [],
    floorList : [],
    shiftList : [],
    count : 0,
    message : {}
  },
  reducers : {
    addMessage: (state,action) => {
      state.message = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getJobType.fulfilled, (state, action) => {
        state.getJobType = action.payload.data.job;
        state.isLoading = false; 
    }).addCase(getIncharge.fulfilled, (state, action) => {
      state.inchargeList = action.payload.data;
      state.isLoading = false; 
    }).addCase(getAllFloor.fulfilled, (state, action) => {
      state.floorList = action.payload.data;
      state.isLoading = false; 
    }).addCase(getAllShift.fulfilled, (state, action) => {
      state.shiftList = action.payload.data;
      state.isLoading = false; 
    })
  },

});

export const { addMessage } = commonSlice.actions
export default commonSlice.reducer;