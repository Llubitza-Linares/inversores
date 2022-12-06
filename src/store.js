import {configureStore} from "@reduxjs/toolkit"
import investorSlice from "./features/investors/investorSlice";
import userSlice from "./features/user/userSlice";
import AllInvestorsSlice from "./features/allInvestors/AllInvestorsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice, 
        investor: investorSlice,
        allInvestors: AllInvestorsSlice
    },
});