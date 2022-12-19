import Wrapper from "../assets/wrappers/StatItem"

const StatItem = ({count, title, color, bcg, setCount}) => {
return (
<Wrapper color={color} bcg={bcg}>
    <header>
        <span className="count">{count}</span>
       
    </header>
    <h5 className="title">{title}</h5>
</Wrapper>
)
};

export default StatItem