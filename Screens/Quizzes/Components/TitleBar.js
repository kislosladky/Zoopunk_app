import React from 'react'
import styled from "styled-components";
import {Text, TouchableOpacity} from "react-native";


const QuizDescription = props => (
    <Container>
        <Cover>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            {/*<TouchableOpacity></TouchableOpacity>*/}
        </Cover>
    </Container>
)

export default QuizDescription;

const Container = styled.TouchableOpacity`
  background: #ffe5e5;
  width: 100%;
  height: 35%;
  border-radius: 20px;
  margin-top: 20%;
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
  font-size: 30px;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
const Description = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 10px;
  margin-left: 20px;
  width: 170px;
`;
