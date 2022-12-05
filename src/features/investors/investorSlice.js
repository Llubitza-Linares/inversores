import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';

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

const investorSlice = createSlice({
    name:'investors',
    initialState,
    reducers: {
        handleChange : (state, {payload:{name, value}}) => {
            state[name] = value;
        },
        clearValues : () => {
            return initialState;
        }
    },
});

export const {handleChange, clearValues} = investorSlice.actions;
export default investorSlice.reducer;