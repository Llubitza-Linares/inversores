import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
    isLoading: true,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState,
}

export const getAllInvestors = createAsyncThunk('allJobs/getJobs', async(_,thunkAPI) => {
    let url = `/jobs`
    try {
        const resp=await customFetch.get(url, {
          headers:{
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`
          }  
        })
        console.log(resp.data);
        return resp.data
    } catch (error){
        return thunkAPI.rejectWithValue('There was an error')

    }
})

const AllInvestorsSlice = createSlice({
    name: 'allInvestors',
    initialState,
    extraReducers: {
        [getAllInvestors.pending]:(state) => {
            state.isLoading = true;
        },
        [getAllInvestors.fulfilled]:(state, {payload}) => {
            state.isLoading = false
            state.jobs = payload.jobs
        },
        [getAllInvestors.rejected]:(state, {payload}) => {
            state.isLoading = false
            toast.error(payload)
        }
    }
})

export default AllInvestorsSlice.reducer;