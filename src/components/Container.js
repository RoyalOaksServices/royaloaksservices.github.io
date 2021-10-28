import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Container(props) {
    return <StyledContainer style={props.style}>{props.children}</StyledContainer>
}