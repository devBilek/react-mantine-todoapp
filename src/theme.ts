import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    myPalette: [
      '#DDE6ED', // index 0
      '#9DB2BF', // index 1
      '#9DB2BF', // index 2
      '#526D82', // index 3
      '#526D82', // index 4
      '#27374D', // index 5
      '#27374D', // index 6
      '#1A2634', // index 7
      '#121A24', // index 8
      '#0D1218', // index 9
    ],
  },
  primaryColor: 'myPalette',
  primaryShade: 5,
  components: {
    Title: {
      defaultProps: {
        c: 'white',
      },
    },
    Text: {
      defaultProps: {
        c: 'white',
      },
    },
  },
});
