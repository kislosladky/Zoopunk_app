import React from 'react'
import styled from "styled-components";
import {Text, TouchableOpacity} from "react-native";


const Option = props => (
    <Container>
        <Cover>
            <Answer>{props.answer}</Answer>
        </Cover>
    </Container>
)

export default Option;

const Container = styled.TouchableOpacity`
  background: #ffe5e5;
  width: 100%;
  height: 15%;
  border-radius: 20px;
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
const Answer = styled.Text`
  margin: 10px;
  font-size: 30px;
  color: #000;
  width: 100%;
`;
