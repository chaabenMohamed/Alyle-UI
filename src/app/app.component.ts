import { Component, ChangeDetectionStrategy, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { AUI_VERSION, LyTheme2, ThemeVariables, Platform, ThemeRef } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { LyDrawer } from '@alyle/ui/drawer';
import { CustomMinimaLight, CustomMinimaDark, AUIThemeVariables } from './app.module';
import { LySnackBar } from '@alyle/ui/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { AUIRoutes } from './routes';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TitleComponent } from './document/title/title.component';
import { PageContentComponent } from './page-content/page-content.component';
import { prismCustomClass } from './core/prism-custom-class';
import * as _chroma from 'chroma-js';
import { SVG_ICONS } from './core/svg-icons';
const chroma = _chroma;

const styles = (theme: ThemeVariables & CustomMinimaLight & CustomMinimaDark) => ({
  $name: 'app',
  '@global': {
    'body': {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    },
  },
  appContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh)',
    '{demo}': {
      maxWidth: '960px',
      flex: 1,
      padding: '96px 2rem',
      width: '100%',
      boxSizing: 'border-box'
    }
  },
  demo: null,
  docsViewer: {
    p: {
      lineHeight: 1.5
    }
  },
  root: {
    display: 'block',
    '& .docs-viewer > * > a:not([ly-button]), & ul a:not([ly-button]), & p > a': {
      color: theme.accent.default,
      textDecoration: 'inherit',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
  },
  // header: {
  //   position: 'fixed',
  //   zIndex: 11,
  //   width: '100%',
  //   // '@media print': {
  //   //   color: 'blue'
  //   // },
  //   // '&:hover': {
  //   //   '@media screen': {
  //   //     color: 'red'
  //   //   },
  //   // },
  // },
  drawer: {
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0,0,0,.26)'
    },
    '&::-webkit-scrollbar': {
      height: '3px',
      width: '3px'
    }
  },
  drawerUl: {
    overflow: 'hidden',
    position: 'relative',
    listStyle: 'none',
    padding: '2rem 1.8rem',
    margin: 0,
    borderBottom: '1px solid rgba(0, 0, 0, 0.11)'
  },
  drawerButton: {
    color: theme.drawerButton,
    fontWeight: 400,
    borderBefore: '3px solid transparent',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 0,
    '&:hover, &{onLinkActive}': {
      color: theme.primary.default,
      borderBefore: '3px solid'
    }
  },
  onLinkActive: null,
  footer: {
    position: 'relative',
    padding: '1em',
    textAlign: 'center'
  },
  discordHover: {
    '&:hover': {
      color: theme.discord
    }
  }
});

const PRISM_STYLES = (theme: AUIThemeVariables, tref: ThemeRef) => {
  const $host = 'fonts/firacode/';
  const classes = tref.toClassSelector(prismCustomClass());

  return {
    '@global': {
      '@font-face': {
        fontFamily: 'Fira Code',
        src: [`url('${$host}eot/FiraCode-Light.eot')`,
        `url('${$host}eot/FiraCode-Light.eot') format('embedded-opentype'),
            url('${$host}woff2/FiraCode-Light.woff2') format('woff2'),
            url('${$host}woff/FiraCode-Light.woff') format('woff'),
            url('${$host}ttf/FiraCode-Light.ttf') format('truetype')`],
        fontWeight: 300,
        fontStyle: 'normal',
      },
      '@font-face ': {
          fontFamily: 'Fira Code',
          src: [`url('${$host}eot/FiraCode-Regular.eot')`,
          `url('${$host}eot/FiraCode-Regular.eot') format('embedded-opentype'),` +
              `url('${$host}woff2/FiraCode-Regular.woff2') format('woff2'),` +
              `url('${$host}woff/FiraCode-Regular.woff') format('woff'),` +
              `url('${$host}ttf/FiraCode-Regular.ttf') format('truetype')`],
          fontWeight: 400,
          fontStyle: 'normal'
      },

      '@font-face  ': {
          fontFamily: 'Fira Code',
          src: [`url('${$host}eot/FiraCode-Medium.eot')`,
          `url('${$host}eot/FiraCode-Medium.eot') format('embedded-opentype'),` +
              `url('${$host}woff2/FiraCode-Medium.woff2') format('woff2'),` +
              `url('${$host}woff/FiraCode-Medium.woff') format('woff'),` +
              `url('${$host}ttf/FiraCode-Medium.ttf') format('truetype')`],
          fontWeight: 500,
          fontStyle: 'normal'
      },

      '@font-face   ': {
          fontFamily: 'Fira Code',
          src: [`url('${$host}eot/FiraCode-Bold.eot')`,
          `url('${$host}eot/FiraCode-Bold.eot') format('embedded-opentype'),` +
              `url('${$host}woff2/FiraCode-Bold.woff2') format('woff2'),` +
              `url('${$host}woff/FiraCode-Bold.woff') format('woff'),` +
              `url('${$host}ttf/FiraCode-Bold.ttf') format('truetype')`],
          fontWeight: 700,
          fontStyle: 'normal'
      },

      [classes.pre]: {
        padding: '16px'
      },
      [classes.code]: {
        padding: '4px 2px'
      },
      [
        [
          classes.pre,
          classes.code
        ].join()
      ]: {
        color: theme.codeColor,
        backgroundColor: theme.codeBg,
        fontFamily: `'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
        textAlign: 'left',
        fontSize: '0.8125em',
        fontWeight: 500,
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'break-word',
        wordWrap: 'normal',
        lineHeight: 1.5,
        '-moz-tab-size': 4,
        '-o-tab-size': 4,
        tabSize: 4,
        '-webkit-hyphens': 'none',
        '-moz-hyphens': 'none',
        '-ms-hyphens': 'none',
        hyphens: 'none',
        borderRadius: '3px',
        overflow: 'auto',
        margin: '0'
      },
      [classes.root]: {
        marginBottom: '16px',
        direction: 'ltr',
        [
          [
            classes.keyword,
            classes['selector-tag'],
            classes.title,
            classes.section,
            classes.doctag,
            classes.name,
            classes.strong
          ].map(c => `& ${c}`).join()
        ]: {
          color: theme.prism.keyword,
          fontWeight: '600'
        },
        [`${classes.comment}`]: {
          color: 'rgba(115, 129, 145, 0.65)'
        },
        [
          [
            classes.string,
            classes.title,
            classes.section,
            classes.built_in,
            classes.literal,
            classes.type,
            classes.addition,
            classes.tag,
            classes.quote,
            classes.name,
            classes['selector-id'],
            classes['selector-class']
          ].map(c => `& ${c}`).join()
        ]: {
          color: theme.prism.keyword
        },
        [
          [
            classes.meta,
            classes.subst,
            classes.symbol,
            classes.regexp,
            classes.attribute,
            classes.deletion,
            classes.variable,
            classes['template-variable'],
            classes.link,
            classes.bullet
          ].map(c => `& ${c}`).join()
        ]: {
          color: '#4c81c9'
        },
        [`${classes.emphasis}`]: {
          fontStyle: 'italic'
        },
        [`${classes.function}`]: {
          color: '#4584ff'
        },
        [`${classes['attr-name']}`]: {
          color: '#FFB62C'
        },
        [`${classes['attr-value']}`]: {
          color: theme.prism.keyword
        },
        [`${classes.string}`]: {
          color: theme.prism.string
        },
        [`${classes.number}`]: {
          color: 'rgb(36, 212, 158)'
        },
        [`& ${classes.punctuation}, & ${classes.operator}`]: {
          color: '#9786c5'
        },
        [`${classes['class-name']}`]: {
          color: chroma(theme.accent.default).alpha(.88).css()
        },
        [`${classes.constant}`]: {
          color: '#EF5350'
        },
        [`${classes.builtin}`]: {
          color: '#8796b0'
        }
      },
    },
  };
};

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  routesComponents: any;
  version = AUI_VERSION;
  routes = AUIRoutes.slice(1);
  currentRoutePath: string;

  @ViewChild(LyDrawer) drawer: LyDrawer;
  @ViewChild(LySnackBar) sb: LySnackBar;
  @ViewChild(TitleComponent) titleComponent: TitleComponent;
  @ViewChild(PageContentComponent) page: PageContentComponent;

  constructor(
    private _el: ElementRef,
    public router: Router,
    private theme: LyTheme2,
    private renderer: Renderer2,
    private _location: Location,
    sanitizer: DomSanitizer,
    iconService: LyIconService,
    updates: SwUpdate
  ) {
    this.theme.addStyleSheet(PRISM_STYLES);
    if (Platform.isBrowser) {
      updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        updates.activateUpdate().then(() => this.sb.open());
      });
    }
    iconService.setSvg('github', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/social/social-color-1_logo-github'));
    iconService.setSvg('code', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/code'));
    iconService.setSvg('Theme', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/round-format_color_fill-24px'));
    iconService.setSvg('Heart', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Heart'));
    iconService.setSvg('Experiment', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Experiment'));
    iconService.setSvg('Radiation', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/radiation'));
    iconService.setSvg('Water', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Water'));
    iconService.setSvg('Snow', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Snow'));
    iconService.setSvg('Discord', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/social/discord'));

    SVG_ICONS.forEach(svg => iconService.addSvgIconLiteral(svg[0], sanitizer.bypassSecurityTrustHtml(svg[1])));

    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe(() => {
      const pathname = Platform.isBrowser
      ? location.pathname === '/'
        ? ''
        : location.pathname
      : this._location.path();
      this.currentRoutePath = pathname;
      this.titleComponent.route = pathname;
      this.page.updateRoute(pathname);
    });
  }
  ngOnInit() {
    this.renderer.addClass(this._el.nativeElement, this.classes.root);
  }

  reload() {
    document.location.reload();
  }
}
