import { ThemeVariables, LY_COMMON_STYLES } from '@alyle/ui';

export const STYLES = (theme: ThemeVariables) => {
  const typography = theme.typography;
  const _styles = ({
    root: {
      fontFamily: typography.fontFamily,
      color: theme.text.default,
      '-webkit-tap-highlight-color': 'transparent',
      backgroundColor: `rgba(0, 0, 0, 0)`,
      border: 0,
      padding: '0 1em',
      '-moz-appearance': 'none',
      margin: 0,
      borderRadius: '3px',
      outline: 'none',
      fontWeight: 500,
      boxSizing: 'border-box',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      userSelect: 'none',
      textDecorationLine: 'none',
      '-webkit-text-decoration-line': 'none',
      fontSize: theme.pxToRem(14),
      '&::-moz-focus-inner': {
        border: 0
      },
      '&::after': {
        content: `''`,
        ...LY_COMMON_STYLES.fill,
        width: '100%',
        height: '100%',
        background: 'transparent',
        opacity: 0,
        pointerEvents: 'none'
      },
      '&{onFocusByKeyboard}::after, &:hover::after': {
        background: 'currentColor',
        opacity: .13,
        borderRadius: 'inherit'
      },
      '&': theme.button ? theme.button.root : null
    },
    content: {
      padding: 0,
      display: 'flex',
      justifyContent: 'inherit',
      alignItems: 'inherit',
      alignContent: 'inherit',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
    },
    onFocusByKeyboard: null,
    animations: {
      [
        [ '&:hover',
          '&:hover::after',
          '&:focus',
          '&:focus::after',
          '{onFocusByKeyboard}' ].join()
      ]: {
        transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms',
      }
    }
  });
  return _styles;
};
