import styled from "styled-components";

const SubjectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 28vw;
`
const SubjectImg = styled.img`
    position: relative;
    height: 15vw;
    border-radius: 21px;
    background: #EBEBEB;
`
const OverlayText = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    padding: 14px 18px;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background: #F5F5F5;
`
const TitleText = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 20px 0px 20px;
    margin-top: 15px;
`

export const UsersPickItem = ({ imageURL, title, overlayText}) => {
    return(
        <SubjectItemContainer>
            <SubjectImg src={imageURL}/>
            { overlayText && <OverlayText>{overlayText}</OverlayText> }
            <TitleText>{title}</TitleText>
        </SubjectItemContainer>
    );
}