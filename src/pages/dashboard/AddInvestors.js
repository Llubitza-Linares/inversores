import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { handleChange, clearValues } from "../../features/investors/investorSlice";

const AddInvestors = () => {
    const {
        isLoading, 
        name, 
        lastName, 
        location, 
        investorType, 
        investorTypeOptions,
        status, 
        statusOptions,
        isEditing,
        editJobId
    } = useSelector((store) => store.investor);
    const dispatch = useDispatch();
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
        dispatch(handleChange({name, value}));
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
                {/* status*/}
                <FormRowSelect 
                    name="status" 
                    value={status} 
                    handleChange={handleJobInput} 
                    list={statusOptions}
                />
                {/* investor type*/}
                <FormRowSelect 
                    name="investorType"  
                    labelText='investor type'
                    value={investorType}
                    handleChange={handleJobInput} 
                    list={investorTypeOptions}
                />
                
                <div className="btn-container">
                    <button 
                        type="button" 
                        className="btn btn-block clear-btn"
                        onClick={() => dispatch(clearValues())}
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