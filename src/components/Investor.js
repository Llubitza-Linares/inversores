import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Investor";
import { useDispatch } from "react-redux";
import JobInfo from "./InvestorInfo";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({
    _id,
    position,
    company,
    jobLocation,
    createdAt,
    state,
    setDefaultStats
}) => {
    const dispatch = useDispatch();

    const date = moment(createdAt).format('MMM Do, YYYY');

    return (
        <>
            <Wrapper>

                <header>
                    <div className='main-icon'>{company.charAt(0)}</div>
                    <div className='info'>
                        <h5>{position}</h5>
                        <p>{company}</p>
                    </div>
                </header>
                <div className="content">
                    <div className="content-center">
                        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                        <JobInfo icon={<FaCalendarAlt />} text={date} />
                    </div>
                    <footer>
                        <div className='actions'>
                            <Link
                                to='/add-investor'
                                className='btn edit-btn'
                                onClick={() => dispatch(setEditJob({
                                    editJobId: _id,
                                    position,
                                    company,
                                    jobLocation,
                                })
                                )
                                }
                            >
                                Edit{' '}
                            </Link>
                            <button
                                type='button'
                                className='btn delete-btn'
                                onClick={() => dispatch(deleteJob(_id))}
                            >
                                delete
                            </button>

                            <button
                                type='button'
                                className='btn money1-btn'
                                onClick={() => setDefaultStats({
                                    title: 'Total Money',
                                    count: state.count+20,
                                    color: '#e9b949',
                                    bcg: '#fcefc7'
                                })}
                            >
                                20Bs.
                            </button>

                            <button
                                type='button'
                                className='btn money2-btn'
                                onClick={() => setDefaultStats({
                                    title: 'Total Money',
                                    count: state.count+50,
                                    color: '#e9b949',
                                    bcg: '#fcefc7'
                                })}
                            >
                                50Bs.
                            </button>

                            <button
                                type='button'
                                className='btn money3-btn'
                                onClick={() => setDefaultStats({
                                    title: 'Total Money',
                                    count: state.count+100,
                                    color: '#e9b949',
                                    bcg: '#fcefc7'
                                })}
                            >
                                100Bs.
                            </button>

                        </div>
                    </footer>
                </div>
            </Wrapper>
        </>
    )

}

export default Job;