import { useEffect, useState } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import WrapperStats from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";

const JobsContainer = () => {
    const { jobs, isLoading } = useSelector((store) => store.allJobs)
    const [defaultStats, setDefaultStats] = useState({
        title: 'Total Money',
        count: 70,
        color: '#e9b949',
        bcg: '#fcefc7'
    })
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, []);

    if (isLoading) {
        return (
            <Loading center />
        )
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No investors to display...</h2>
            </Wrapper>
        )
    }

    return (
        // <p>Hola</p>
        // <button onClick={() => setCount(count+1)}>Hola{count} </button>
        <>
            <WrapperStats>
                <StatItem  {...defaultStats} />
            </WrapperStats>

            <Wrapper>
                <h5>investor info</h5>
                <div className="jobs">
                    {jobs.map((job) => {
                        let j = {...job, state: defaultStats, setDefaultStats: setDefaultStats}
                        // console.log(j);
                        return <Job key={job._id} {...j} />
                    })}
                </div>

            </Wrapper>
        </>
    )

}

export default JobsContainer;