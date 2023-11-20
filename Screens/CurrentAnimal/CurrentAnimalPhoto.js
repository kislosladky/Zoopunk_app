import React from 'react'
import styled from "styled-components";


const Card = props => (
    <Container>
        <Cover>
            <Image source={props.img}/>
        </Cover>
    </Container>
)

export default Card;

const Container = styled.TouchableOpacity`
  background: white;
  width: 270px;
  height: 170px;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
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
`;