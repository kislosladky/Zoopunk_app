import React from 'react'
import styled from "styled-components";
import {Text, TouchableOpacity} from "react-native";


const QuizDescription = props => (
    <Container>
        <Cover>
            <Description>{props.description}</Description>
        </Cover>
    </Container>
)

export default QuizDescription;

const Container = styled.TouchableOpacity`
  background: #ffe5e5;
  width: 100%;
  height: 25%;
  border-radius: 20px;
  margin-top: 20%;
  margin-bottom: 10%;
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
const Description = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 25px;
  margin-left: 25px;
  width: 100%;
`;
