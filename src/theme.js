//import { createTheme } from '@mui/material/styles'
// import {blue,lightBlue,grey}from '@mui/material/colors'

// // export const theme= createTheme({
// //     palette:{
// //         primary:{
// //             main:blue[500]
// //         },
// //         secondary:{
// //             main:lightBlue[800],
// //             midNightBlue:"#003366"
// //         }
// //     }
// // })

// export const themeColors = (mode) => ({
//     palette: {
//       mode,
//       ...(mode === 'light'
//         ? {
//             // palette values for light mode
//             primary:{
//                 main:blue[500],
//                 white:"#fff"
//             },
//             secondary:{
//                 main:lightBlue[800],
//                 midNightBlue:"#003366"
//             }
            
//           }
//         : {
//             // palette values for dark mode
//            primary:{
//             main:"#003366",
//             white:"#003366"
//            },
//            secondary:{
//             main:blue[500],
//             midNightBlue:"#2196f3"
//            },
//            background:{
//             default:"#1e1e1e",
//            },
//            text:{
//             primary:"#fff",
//             secondary:grey[500]
//            }


          


//           }),
//     },
//   });
  
import { blue, grey } from '@mui/material/colors';

export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: "#00796b",
            white: "#ffffff"
          },
          secondary: {
            main: "#00796b",
            midNightBlue: grey[400]
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#00ac98",
            white: "#333333"
          },
          secondary: {
            main: "#00ac98",
            midNightBlue: grey[400]
          },
          background: {
            default: "#121212",
          },
          text: {
            primary: "#ffffff",
            secondary: "#ff8da1"
          }
        }),
  },
});
