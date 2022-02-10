import styled from "styled-components";

export const ProfileWarrper = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #A8A8A8;
`

export const ProfileImg = styled.div<{ProFilePath: string}>`
    height: 100%;
    background-image: url(${Props=> Props.ProFilePath});
    background-repeat: no-repeat;
    background-size: cover;
`