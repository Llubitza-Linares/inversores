import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
 
};

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs', 
    async(_, thunkAPI)=>{
    let url = `/jobs`;

    try {
        const resp = await customFetch.get(url, {
            headers:{
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error')
    }
})

export const showStats = createAsyncThunk(
    'allJobs/showStats',
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs/stats');
            console.log(resp.data)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}
)

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state)=> {
            state.isLoading = true;
        },
        hideLoading: (state)=> {
            state.isLoading = false;
        }
    },
    extraReducers: {
        [getAllJobs.pending]: (state)=> {
            state.isLoading = true
        },
        [getAllJobs.fulfilled]: (state, {payload})=> {
            state.isLoading = false
            state.jobs = payload.jobs
        },
        [getAllJobs.rejected]: (state, {payload})=> {
            state.isLoading = false
            toast.error(payload)
        },
        [showStats.pending]: (state)=> {
            state.isLoading = true
        },
        [showStats.fulfilled]: (state, {payload})=> {
            state.isLoading = false
            state.stats = payload.defaultStats
        },
        [showStats.rejected]: (state, {payload})=> {
            state.isLoading = false
            toast.error(payload)
        },
    }
})

export const {showLoading, hideLoading} = allJobsSlice.actions;

export default allJobsSlice.reducer;