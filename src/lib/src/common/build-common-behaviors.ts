import { Constructor } from './constructor';
import { shadowBuilder } from '../shadow';
import { CanColor } from './color';
import { CanBg } from './bg';
import { CanDisable } from './disabled';
import { CanRaised } from './raised';
import { CanElevation } from './elevation';
import { CanOutlined } from './outlined';
import { CanShadowColor } from './shadow-color';
import { LyTheme2 } from '../theme/theme2.service';
import { ElementRef } from '@angular/core';
import { getNativeElement } from '../minimal/common';
import { ThemeVariables } from '../theme/theme-config';

const DEFAULT_VALUE = '';
const STYLE_PRIORITY = -1;

export interface RequireParamsStyleUpdater {
  _theme: LyTheme2;
}

export interface CanStyleUpdater {
  _theme: LyTheme2;
  updateStyle: (element: ElementRef | Element) => void;
  setAutoContrast: () => void;
}
export type CanStyleUpdaterCtor = Constructor<RequireParamsStyleUpdater & Partial<CanColor & CanBg & CanDisable & CanRaised & CanElevation & CanOutlined & CanShadowColor>>;

export function mixinStyleUpdater<T extends CanStyleUpdaterCtor>(base: T): Constructor<CanStyleUpdater> & T {
  return class extends base {
    _classNameAnonymous: string;
    _autoContrast: boolean;
    setAutoContrast() {
      this._autoContrast = true;
    }
    updateStyle(element: ElementRef<any> | HTMLElement) {
      const __bg = this._superHyperInternalPropertyBg;
      const __color = this._superHyperInternalPropertyColor;
      const __raised = this._superHyperInternalPropertyRaised;
      const __elevation = this._superHyperInternalPropertyElevation;
      const __disabled = this._superHyperInternalPropertyDisabled;
      const __outlined = this._superHyperInternalPropertyOutlined;
      const __shadowColor = this._superHyperInternalPropertyShadowColor;
      const __isContrast = this._autoContrast && !__color || __color === 'auto';
      const newKey = `common----:${
        __bg || DEFAULT_VALUE}·${
          __color || DEFAULT_VALUE}·${
            __raised}·${
              __elevation}·${
                __disabled || DEFAULT_VALUE}·${
                  __outlined || DEFAULT_VALUE}·${
                    __shadowColor || DEFAULT_VALUE}·${
                      __isContrast || DEFAULT_VALUE}`;
      this._classNameAnonymous = this._theme.addStyle(newKey, (theme: ThemeVariables) => {
        const style: {
          border?: string,
          background?: string,
          color?: string,
          boxShadow?: string,
          pointerEvents?: 'none';
          '&:hover'?: {
            boxShadow?: string
          },
          '&:active'?: {
            boxShadow?: string
          }
        } = {};
        if (__outlined) {
          style.border = '1px solid currentColor';
        }
        if (__disabled) {
          style.color = theme.disabled.contrast;
          style.pointerEvents = 'none';
          if (__bg) {
            style.background = theme.disabled.default;
          }
        } else {
          if (__bg) {
            style.background = theme.colorOf(__bg);
            if (__isContrast) {
              style.color = theme.colorOf(`${__bg}:contrast`);
            }
          }
          if (!style.color && __color) {
            style.color = theme.colorOf(__color);
          }
          if (__raised || (__elevation != null)) {
            if (!__bg) {
              style.background = theme.background.primary.default;
            }
            const backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
            const shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
            if (__elevation != null) {
              style.boxShadow = shadowBuilder(__elevation, shadowColor);
            } else {
              style.boxShadow = shadowBuilder(3, shadowColor);
              style['&:active'] = {
                boxShadow: shadowBuilder(8, shadowColor)
              };
            }
          }
        }
        return style as any;
      }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
    }

    constructor(...args: any[]) { super(...args); }
  };
}
