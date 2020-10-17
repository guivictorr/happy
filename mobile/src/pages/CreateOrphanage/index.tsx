import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Container,
  Title,
  Label,
  Input,
  ImagesInput,
  SwitchContainer,
  NextButton,
  NextButtonText,
} from './styles';

const OrphanageData: React.FC = () => {
  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input />

      <Label>Sobre</Label>
      <Input style={{ height: 110, textAlignVertical: 'top' }} multiline />

      <Label>Whatsapp</Label>
      <Input />

      <Label>Fotos</Label>
      <ImagesInput>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input style={{ height: 110, textAlignVertical: 'top' }} multiline />

      <Label>Horario de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>

      <NextButton>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;
