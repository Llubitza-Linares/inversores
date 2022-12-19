import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        inversores <span> App</span>
                    </h1>
                    <p>
                        Inversores App es una página donde cada persona podrá tener un segruimiento sobre las distintas invesiones que tiene. Contará con una lista de sus propios inversores y de igual manera será capaz de actualizar su dinero.
                    </p>
                <Link to ='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
                </div>
                <img src={main} alt="main" />
            </div>
        </Wrapper>

    )
    
};

export default Landing;