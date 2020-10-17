import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #111111;
`;

export const MarkerInfo = styled.View`
  width: 160px;
  height: 46px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;
export const MarkerInfoText = styled.Text`
  color: #0089a5;
  font-size: 14px;
  font-family: 'Nunito_700Bold';
`;

export const Footer = styled.View`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background: #fff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito_700Bold';
`;

export const FooterButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  background: #15c3d6;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
