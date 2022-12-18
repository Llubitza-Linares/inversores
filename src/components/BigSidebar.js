import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";


const BigSideBar = () => {
    const {isSidebarOpen} = useSelector((store) => store.user)

    return (
    <Wrapper>
        <div className={
            isSidebarOpen ? "sidebar-container" 
            : "sidebar-container show-sidebar"
        }
        >
            <div className='content'>
          
                <NavLinks />
            </div>

        </div>
    </Wrapper>
    
    )
}

export default BigSideBar;
