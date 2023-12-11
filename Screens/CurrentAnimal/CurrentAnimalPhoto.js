import React from 'react'
import styled from "styled-components";


const Card = props => (
    <Container>
            <Image source={props.img}/>
    </Container>
)

export default Card;

const Container = styled.View`
  width: 270px;
  height: 250px;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
`

const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  top: 0;
  margin-top: 0;
  margin-left: -6%;
`;
