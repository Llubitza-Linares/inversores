import styled from 'styled-components'

const WrapperStats = styled.section`
  display: grid;
  row-gap: 2rem;
  margin-left: 20rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 5000px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`
export default WrapperStats