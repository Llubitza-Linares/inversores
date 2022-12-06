import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { logoutUser } from '../user/userSlice';

const initialState = {
  isLoading: false,
  name: '',
  lastName: '',
  location: '',
  investorTypeOptions: ['credit', 'debit', 'both'],
  investorType: 'both',
  statusOptions: ['in debt', 'without debt', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createInvestor = createAsyncThunk(
    'job/createJob',
    async (investors, thunkAPI) =>{
    try {
        const resp = await customFetch.post('/jobs', investors, {
            headers: {
                authorization:`Bearer ${thunkAPI.getState().user.user.token}`
                
            }
        })
        thunkAPI.dispatch(clearValues())
        return resp.data
    } catch (error) {
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
        }
    return thunkAPI.rejectWithValue(error.response.data.msg);        
    }
})

const investorSlice = createSlice({
    name:'investors',
    initialState,
    reducers: {
        handleChange : (state, {payload:{name, value}}) => {
            state[name] = value;
        },
        clearValues : () => {
            return {...initialState, 
                location:getUserFromLocalStorage()?.location || ''}
        }
    },
    extraReducers: {
        [createInvestor.pending]: (state) => {
            state.isLoading = true;
        },
        [createInvestor.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Created');
        },
        [createInvestor.pending]: (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        },
    }
});

export const {handleChange, clearValues} = investorSlice.actions;
export default investorSlice.reducer;