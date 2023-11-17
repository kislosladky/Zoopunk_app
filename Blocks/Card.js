import React from 'react'
import styled from "styled-components";


const Card = props => (
  <Container>
    <Cover>
      <Image source={props.img}/>
      <Title>{props.title}</Title>
    </Cover>
  </Container>
)

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  
`
const Subtitle = styled.Text`
  
`

const Wrapper = styled.View`
  
`

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
  left: 0;
  top: 0;
  border-radius: 20px;
`

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  overflow: hidden;
  top: 0;
  margin-top: 0;
`;


const Title = styled.Text`
  font-size: 20px;
  color: #b87979;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
