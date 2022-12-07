import { useEffect } from "react";
import Investor from './Investor';
import Wrapper from "../assets/wrappers/InvestorsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

const InvestorContainer = () => {
    const {jobs, isLoading} = useSelector((store) => store.allInvestors);
    const dispatch= useDispatch();

    if (isLoading) {
        return (
            <Loading center/>
        );
    }

    if (jobs.length === 0){
        return (
            <Wrapper>
                <h2>no investors to display...</h2>
            </Wrapper>
        )
    }


   
    
}
export default InvestorContainer