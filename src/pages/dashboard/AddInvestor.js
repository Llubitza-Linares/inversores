import { FormRow,  } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import {toast} from "react-toastify";
import { 
  handleChange, 
  clearValues, 
  createJob,
  editJob 
} from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const {user} =useSelector((store) => store.user)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!position || !company || !jobLocation){
    toast.error('Please fill out all fields')
    return
    }
    if (isEditing){
      dispatch(
        editJob({
          jobId: editJobId,
          job: {position, company, jobLocation}
        })
      )
      return
    }
    dispatch(createJob({position, company, jobLocation}))
  }

  const handleJobInput = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    dispatch(handleChange({name, value}))
  }

  useEffect(() => {
    if (!isEditing){
      dispatch(handleChange({
        name: 'jobLocation',
        value: user.location
    })
    )
  }
}, [])

  return(
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit investor' : 'add investor'}</h3>
        <div className='form-center'>
          {/*position */  }
          <FormRow
          type='text'
          name='position'
          labelText='name'
          value={position}
          handleChange={handleJobInput}
          />
          {/*company */  }
          <FormRow
          type='text'
          name='company'
          labelText='last name'
          value={company}
          handleChange={handleJobInput}
          />
          {/*jobLocation */  }
          <FormRow
          type='text'
          name='jobLocation'
          labelText=' location'
          value={jobLocation}
          handleChange={handleJobInput}
          />
         
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
              >
                clear
              </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
              >
                submit
              </button>
          </div>
        </div>
        </form>
    </Wrapper>
  )

}

export default AddJob;