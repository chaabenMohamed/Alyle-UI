import { ThemeConfig, mergeDeep, shadowBuilder } from '@alyle/ui';
import { MinimaBase } from './base';

const contrast = '#fff';
const shadow = '#333';
export class MinimaLight extends MinimaBase implements ThemeConfig {
  name = 'minima-light';
  primary = {
    default: '#6200EE',
    contrast
  };
  accent = {
    default: '#FF2997',
    contrast,
  };
  warn = {
    default: '#f5414e',
    contrast
  };
  action = {
    default: 'rgba(0,0,0,.6)',
    contrast: '#fff'
  };
  background = {
    default: '#fafafa', // secondary
    primary: {
      default: '#fff',
      shadow
    },
    secondary: '#fafafa',
    tertiary: '#efefef',
    base: '#E0E0E0'
  };
  hover = 'rgba(0, 0, 0, 0.04)';
  paper = {
    default: '#fff',
    shadow
  };
  disabled = {
    default: 'rgba(0, 0, 0, 0.12)',
    contrast: 'rgba(0, 0, 0, 0.26)'
  };
  text = {
    default: 'rgba(0, 0, 0, 0.87)',
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    hint: 'rgba(0, 0, 0, 0.38)'
  };
  divider = 'rgba(0, 0, 0, 0.12)';
  colorShadow = '#33base3';
  shadow = '#333';
  menu = {};
  drawer = {
    backdrop: 'rgba(0,0,0,.6)'
  };
  bar = '#f5f5f5';
  field = mergeDeep({}, this.field, {
    borderColor: 'rgba(0, 0, 0, 0.23)',
    labelColor: 'rgba(0, 0, 0, 0.6)',
    appearance: {
      filled: {
        '{container}': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        }
      }
    }
  });
  badge = {};
  snackBar = {
    root: {
      background: '#323232',
      color: '#fff',
      boxShadow: shadowBuilder(4, '#323232')
    }
  };
  tooltip = {
    root: {
      background: 'rgba(50, 50, 50, 0.85)',
      color: '#fff'
    }
  };
  avatar = {};
}
