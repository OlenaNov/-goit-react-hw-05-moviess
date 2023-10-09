
export const notifyOptionsFailure = () => {
    return {
        timeout: 4000,
        width: '400px',
        svgSize: '80px',
        backgroundColor: '${p => p.theme.colors.notifyBackground}',
        position: 'right-top',
        distance: '60px',
        textColor: '${p => p.theme.colors.textStatic}',
        fontSize: '20px',
      };
};
