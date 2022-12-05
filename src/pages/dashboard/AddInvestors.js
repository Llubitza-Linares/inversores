import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';

const AddInvestors = () => {
    const {
        isLoading, 
        name, 
        lastName, 
        location, 
        jobType, 
        jobTypeOptions,
        status, 
        statusOptions,
        isEditing,
        editJobId
    } = useSelector((store) => store.investor);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !lastName || !location){
            toast.error('Please fill out all fields')
            return
        }
    }

    const handleJobInput =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
    };

    return( 
    <Wrapper>
        <form className='form'>
            <h3>{isEditing? 'edit job' : 'add job'}</h3>
            <div className='form-center'>
                {/*name*/}
                <FormRow 
                    type='text'
                    name='name' 
                    value={name}
                    handleChange={handleJobInput}
                />
                {/*lastName*/}
                <FormRow 
                    type='text'
                    name='lastName' 
                    labelText="Last Name"
                    value={lastName}
                    handleChange={handleJobInput}
                />
                {/*location*/}
                <FormRow 
                    type='text'
                    name='location' 
                    labelText='location'
                    value={location}
                    handleChange={handleJobInput}
                />
                <div className="btn-container">
                    <button 
                        type="button" 
                        className="btn btn-block clear-btn"
                        onClick={() => console.log('clear values')}
                    >
                        clear
                    </button>
                    <button 
                        type="submit" 
                        className="btn btn-block submit-btn"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        submit
                    </button>
                </div>
            </div>
        </form>
    </Wrapper>
    );
};

export default AddInvestors;