import React from 'react'
import styled from "styled-components";


const Card = props => (
    <Container>
        <Cover>
            <Title>{props.title}</Title>
        </Cover>
    </Container>
)

export default Card;

const Container = styled.TouchableOpacity`
  background: #ffe5e5;
  width: 100%;
  height: 50%;
  border-radius: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  top: 0;
  margin-top: 0;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
