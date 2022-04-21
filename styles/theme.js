import {assign} from 'lodash';

// *
// * Colors
// *
// const yellow200 = '#FFF59D';
// const deepOrange600 = '#F4511E';
// const lime300 = '#DCE775';
// const lightGreen500 = '#8BC34A';
// const teal700 = '#00796B';
// const cyan900 = '#006064';
// const colors = [
//   deepOrange600,
//   yellow200,
//   lime300,
//   lightGreen500,
//   teal700,
//   cyan900,
// ];
// const blueGrey50 = '#ECEFF1';
// const blueGrey300 = '#90A4AE';
// const blueGrey700 = '#455A64';
// const grey900 = '#212121';
// // *
// // * Typography
// // *
// const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
// const letterSpacing = 'normal';
// const fontSize = 12;
// // *
// // * Layout
// // *
// const padding = 8;
// const baseProps = {
//   width: 350,
//   height: 350,
//   padding: 50,
// };
// // *
// // * Labels
// // *
// const baseLabelStyles = {
//   fontFamily: sansSerif,
//   fontSize,
//   letterSpacing,
//   padding,
//   fill: blueGrey700,
//   stroke: 'transparent',
//   strokeWidth: 0,
// };

// const centeredLabelStyles = assign({textAnchor: 'middle'}, baseLabelStyles);
// // *
// // * Strokes
// // *
// const strokeDasharray = '5, 5';
// const strokeLinecap = 'round';
// const strokeLinejoin = 'round';

// export default {
//   chart: baseProps,
//   area: assign(
//     {
//       style: {
//         data: {
//           fill: grey900,
//         },
//         labels: baseLabelStyles,
//       },
//     },
//     baseProps,
//   ),
//   axis: assign(
//     {
//       style: {
//         axis: {
//           fill: 'transparent',
//           stroke: 'transparent',
//           strokeWidth: 2,
//           strokeLinecap,
//           strokeLinejoin,
//         },
//         axisLabel: assign({}, centeredLabelStyles, {
//           padding,
//           stroke: 'transparent',
//         }),
//         grid: {
//           fill: 'none',
//           stroke: blueGrey50,
//           strokeDasharray,
//           strokeLinecap,
//           strokeLinejoin,
//           pointerEvents: 'painted',
//         },
//         ticks: {
//           fill: 'transparent',
//           size: 5,
//           stroke: 'transparent',
//           strokeWidth: 1,
//           strokeLinecap,
//           strokeLinejoin,
//         },
//         tickLabels: assign({}, baseLabelStyles, {
//           fill: blueGrey700,
//         }),
//       },
//     },
//     baseProps,
//   ),
//   line: assign(
//     {
//       style: {
//         data: {
//           fill: 'transparent',
//           opacity: 1,
//           stroke: blueGrey700,
//           strokeWidth: 3,
//         },
//         labels: baseLabelStyles,
//       },
//     },
//     baseProps,
//   ),
//   scatter: assign(
//     {
//       style: {
//         data: {
//           fill: blueGrey700,
//           opacity: 1,
//           stroke: 'transparent',
//           strokeWidth: 0,
//         },
//         labels: baseLabelStyles,
//       },
//     },
//     baseProps,
//   ),
// };
export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1.1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    button: '#4636ff',
    linearGradient: 'linear-gradient(60deg, #690ed0 0%, #170da2 100%)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
};
