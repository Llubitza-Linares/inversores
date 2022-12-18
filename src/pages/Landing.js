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
                        Esta es una aplicacion para todos los inversores que quieran seguir todo el movimiento de sus transacciones, ademas de tener un control del dinero actual y del dinero que se le debe.
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