/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
${({ theme }) => css`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.colors.mainBg};
  `}
`;

export const Title = styled.Text`
${({ theme }) => css`
  color: ${ theme.colors.primary };
  `}
  
`;

export const SubTitle = styled.Text``;

export const Opacity = styled.TouchableOpacity``;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   shadow: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,

//     elevation: 8,
//   },
// });
