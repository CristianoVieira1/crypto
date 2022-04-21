import React from 'react';
import * as S from './styles';

const Home = ({navigation}) => {
  return (
    <S.Wrapper>
      <S.Title>Home</S.Title>
      <S.Opacity onPress={() => navigation.navigate('CryptoDetail')}>
        <S.SubTitle>Navigate to CryptoDetail</S.SubTitle>
      </S.Opacity>
    </S.Wrapper>
  );
};

export default Home;
