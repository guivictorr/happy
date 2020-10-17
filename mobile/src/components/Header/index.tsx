import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, HeaderText, BackButton } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container style={{ borderBottomWidth: 1 }}>
      <BackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color="#15b6d6" size={24} />
      </BackButton>
      <HeaderText>{title}</HeaderText>
    </Container>
  );
};

export default Header;
