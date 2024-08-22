import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api'


export const addMaterialInward = createAsyncThunk(
  'material/add',
  async (userData:any,{ rejectWithValue }) => {
    try{
      let response = await api.post('/materialInward/add',userData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
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

export const editMaterialInwardr = createAsyncThunk(
    'material/edit',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.post('/materialInward/edit',userData)
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

  export const removeMaterialInward = createAsyncThunk(
    'material/remove',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.post('/materialInward/remove',userData)
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


export const getMaterialInward = createAsyncThunk(
    'materialInward/get',
    async (userData:any,{ rejectWithValue }) => {
      try{
        let response = await api.get('/materialInward/get?'+userData)
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



const materialSlice = createSlice({
  name: 'material',
  initialState: {
    isLoading : false,
    materialInward : [],
    count : 0,
    message : {}
  },
  reducers : {
    addMessage: (state,action) => {
      state.message = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(addMaterialInward.fulfilled, (state, action) => {
      state.isLoading = false; 
    }).addCase(getMaterialInward.fulfilled, (state, action) => {
        state.materialInward = action.payload.data.materialInward;
        state.count = action.payload.data.count;
        state.isLoading = false; 
    }).addCase(editMaterialInwardr.fulfilled, (state, action) => {
        state.isLoading = false; 
    }).addCase(removeMaterialInward.fulfilled, (state, action) => {
        state.isLoading = false; 
    }) 
    
  },

});

export const { addMessage } = materialSlice.actions
export default materialSlice.reducer;