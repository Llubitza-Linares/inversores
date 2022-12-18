import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";

export const StatsContainer = () => {

     const defaultStats = [
        {title: 'Total Money',
        count: 0,
        color: '#e9b949',
        bcg: '#fcefc7'
    }
    ]

    return (
        <Wrapper>
            {defaultStats.map((item,index) => {
                return <StatItem key={index} {...item} />
                
            })}
        </Wrapper>
    )
}

export default StatsContainer;