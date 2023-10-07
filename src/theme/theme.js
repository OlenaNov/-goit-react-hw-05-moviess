export const theme = {
    breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },

    space: [
      0, //0
      2, //1
      4, //2
      8, //3
      16, //4
      32, //5
      64, //6
    ],

    fontSizes: [
      '12px', // 0
      '14px', // 1
      '16px', // 2
      '20px', // 3
      '24px', // 4
      '28px', // 5
      '32px', // 6
      '48px', // 7
      '68px', // 8
    ],

    colors: {
      background: '#210705',
      headerBackground: 'rgba(0, 0, 0, 0.95);',
      itemBackground: 'rgba(0, 0, 0, 0.6)',
      textStatic: 'rgb(255, 245, 238, 0.8)',
      textStaticItem: 'rgb(255, 245, 238, 0.9)',
      textStaticHover: '#fff',
      textActive: '#cc0000',
      textActiveHover: 'red',
      buttonBackgroundStatic: 'rgb(255, 245, 238, 0.3)',
      buttonContentStatic: 'rgba(80, 20, 20)',
      buttonBackgroundHover: 'rgb(255, 245, 238, 0.5)',
      buttonBackgroundActive: 'rgb(255, 245, 238, 0.6)',
      inputBackgroundStatic: 'rgb(33, 7, 5, 0.3)',
      notifyBackground: 'rgb(204, 0, 0, 0.7)'
    },
    boxShadows: {
      main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
      secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
    },
    transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  };