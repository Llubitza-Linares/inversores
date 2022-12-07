import { useEffect } from "react";
import Investor from './Investor';
import Wrapper from "../assets/wrappers/InvestorsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllInvestors } from "../features/allInvestors/AllInvestorsSlice";

const InvestorContainer = () => {
    const {jobs, isLoading} = useSelector((store) => store.allInvestors);
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getAllInvestors());
    }, [])

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

    return <Wrapper>
    <h5>investors info</h5>
    <div className="investors">
        {jobs.map((invest) => {
            console.log(invest);
            return <Investor key={invest._id} {...invest} />; 
        })}
    </div>
</Wrapper>  
    
}
export default InvestorContainer