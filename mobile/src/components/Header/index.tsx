import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, HeaderText } from './styles';

interface HeaderProps {
  title: string;
  closeButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, closeButton }) => {
  const navigation = useNavigation();

  const handleNavigationToLandingPage = () => {
    navigation.navigate('Landing');
  };

  return (
    <Container style={{ borderBottomWidth: 1 }}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" color="#15b6d6" size={24} />
      </BorderlessButton>
      <HeaderText>{title}</HeaderText>
      {closeButton ? (
        <BorderlessButton onPress={handleNavigationToLandingPage}>
          <Feather name="x" color="#ff669d" size={24} />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Header;
