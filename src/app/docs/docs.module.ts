import { NgModule } from '@angular/core';

import { LyCardModule } from '@alyle/ui/card';

import { DemoViewModule } from '../demo-view';
import { PrismModule } from '../core/prism/prism.module';

/** Getting Started */

/** Customization */
import { ThemingComponent } from '@docs/customization/theming/theming.component';
import { ThemingComponentsComponent } from './customization/theming-components/theming-components.component';

/** Layout */
/** Grid */
import { GridDemoComponent } from '@docs/layout/grid-demo/grid-demo.component';
import { GridDemoBasicModule } from '@docs/layout/grid-demo/grid-demo-basic/grid-demo-basic.module';
import { GridDemoAutoLayoutModule } from '@docs/layout/grid-demo/grid-demo-auto-layout/grid-demo-auto-layout.module';
import { GridDemoResponsiveModule } from '@docs/layout/grid-demo/grid-demo-responsive/grid-demo-responsive.module';

/** Tabs */
import { TabsDemoComponent } from '@docs/layout/tabs-demo/tabs-demo.component';
import { BasicTabsModule } from '@docs/layout/tabs-demo/basic-tabs/basic-tabs.module';
import { TabsWithAsynchronouslyLoadingModule } from '@docs/layout/tabs-demo/tabs-with-asynchronously-loading/tabs-with-asynchronously-loading.module';
import { TabsWithLazyLoadingModule } from '@docs/layout/tabs-demo/tabs-with-lazy-loading/tabs-with-lazy-loading.module';
import { TabsAlignModule } from './layout/tabs-demo/tabs-align/tabs-align.module';
import { TabsWithIconModule } from './layout/tabs-demo/tabs-with-icon/tabs-with-icon.module';
import { TabsPlacementModule } from './layout/tabs-demo/tabs-placement/tabs-placement.module';

/** Components */
/** Button */
import { ButtonDemoComponent } from '@docs/components/button-demo/button-demo.component';
import { ButtonTypesDemoModule } from '@docs/components/button-demo/button-types-demo/button-types-demo.module';
import { IconLabelButtonsModule } from './components/button-demo/icon-label-buttons/icon-label-buttons.module';

import { LyTypographyModule } from '@alyle/ui/typography';
import { DocsRoutingModule } from '@docs/docs.routing';
import { SharedModule } from '../shared/shared.module';
import { DynamicStylesComponent } from '@docs/customization/dynamic-styles/dynamic-styles.component';
import { DsBasicModule } from '@docs/customization/dynamic-styles/ds-basic/ds-basic.module';
import { DsCssDeclarationsBlockModule } from './customization/dynamic-styles/ds-css-declarations-block/ds-css-declarations-block.module';

import { ToolbarDemoComponent } from '@docs/components/toolbar-demo/toolbar-demo.component';
import { ToolbarBasicDemoModule } from '@docs/components/toolbar-demo/toolbar-basic-demo/toolbar-basic-demo.module';
import { ToolbarWithIconsModule } from './components/toolbar-demo/toolbar-with-icons/toolbar-with-icons.module';
import { ToolbarDenseModule } from './components/toolbar-demo/toolbar-dense/toolbar-dense.module';

// tslint:disable-next-line:max-line-length
import { ResizingCroppingImagesExample01Module } from '@docs/components/resizing-cropping-images-demo/resizing-cropping-images-example-01/resizing-cropping-images-example-01.module';
// tslint:disable-next-line:max-line-length
import { ResizingCroppingImagesExample02Module } from '@docs/components/resizing-cropping-images-demo/resizing-cropping-images-example-02/resizing-cropping-images-example-02.module';
// tslint:disable-next-line:max-line-length
import { ResizingCroppingImagesExample03Module } from '@docs/components/resizing-cropping-images-demo/resizing-cropping-images-example-03/resizing-cropping-images-example-03.module';
import { ResizingCroppingImagesDemoComponent } from '@docs/components/resizing-cropping-images-demo/resizing-cropping-images-demo.component';

import { BadgeDemoComponent } from './components/badge-demo/badge-demo.component';
import { BasicBadgeModule } from '@docs/components/badge-demo/basic-badge/basic-badge.module';

/** Field */
import { FieldDemoComponent } from './components/field-demo/field-demo.component';
import { BasicFieldModule } from '@docs/components/field-demo/basic-field/basic-field.module';
import { FieldPlaygroundModule } from './components/field-demo/field-playground/field-playground.module';
import { SimpleFormModule } from './components/field-demo/simple-form/simple-form.module';

/** Checkbox */
import { CheckboxDemoComponent } from './components/checkbox-demo/checkbox-demo.component';
import { BasicCheckboxModule } from './components/checkbox-demo/basic-checkbox/basic-checkbox.module';
import { ComplexCheckboxModule } from './components/checkbox-demo/complex-checkbox/complex-checkbox.module';

import { PackageStatusModule } from '../package-status/package-status.module';
import { ResponsiveDemoComponent } from './layout/responsive/responsive-demo.component';
import { ResponsiveDemo01Module } from './layout/responsive/responsive-demo-01/responsive-demo-01.module';
import { ResponsiveWithDsModule } from './layout/responsive/responsive-with-ds/responsive-with-ds.module';

import { BasicSnackBarModule } from './components/snack-bar-demo/basic-snack-bar/basic-snack-bar.module';
import { SnackBarDemoComponent } from './components/snack-bar-demo/snack-bar-demo.component';

/** Paper demo */
import { BasicPaperModule } from './customization/paper-demo/basic-paper/basic-paper.module';
import { PaperDemoComponent } from './customization/paper-demo/paper-demo.component';
import { PaperWithColorModule } from './customization/paper-demo/paper-with-color/paper-with-color.module';

/** Icon demo */
import { IconDemoComponent } from './components/icon-demo/icon-demo.component';
import { IconsModule } from './components/icon-demo/icons/icons.module';

/** Tooltip */
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { BasicTooltipModule } from './components/tooltip-demo/basic-tooltip/basic-tooltip.module';

/** Menu */
import { MenuDemoComponent } from './components/menu-demo/menu-demo.component';
import { MenuDemo01Module } from './components/menu-demo/menu-demo-01/menu-demo-01.module';

/** Avatar */
import { AvatarDemoComponent } from './components/avatar-demo/avatar-demo.component';
import { BasicUsesAvatarModule } from './components/avatar-demo/basic-uses-avatar/basic-uses-avatar.module';
import { ListDemoComponent } from './components/list-demo/list-demo.component';
import { AvatarWithButtonModule } from './components/avatar-demo/avatar-with-button/avatar-with-button.module';

/** List */
import { SimpleListModule } from './components/list-demo/simple-list/simple-list.module';
import { FolderListModule } from './components/list-demo/folder-list/folder-list.module';

/** Divider */
import { DividerDemoComponent } from './components/divider-demo/divider-demo.component';
import { ListDividersModule } from './components/divider-demo/list-dividers/list-dividers.module';
import { InsetDividersModule } from './components/divider-demo/inset-dividers/inset-dividers.module';

/** Typography */
import { TypographyDemoComponent } from './components/typography-demo/typography-demo.component';
import { TruncateTextModule } from './components/typography-demo/truncate-text/truncate-text.module';
import { TypographyDemoBasicModule } from './components/typography-demo/typography-demo-basic/typography-demo-basic.module';

/** Drawer */
import { DrawerDemoComponent } from './components/drawer-demo/drawer-demo.component';
import { DrawerDemo01Module } from './components/drawer-demo/drawer-demo-01/drawer-demo-01.module';
import { MiniDrawerModule } from './components/drawer-demo/mini-drawer/mini-drawer.module';

/** Radio */
import { RadioDemoComponent } from './components/radio-demo/radio-demo.component';
import { RadioExample01Module } from './components/radio-demo/radio-example-01/radio-example-01.module';
import { BasicRadioModule } from './components/radio-demo/basic-radio/basic-radio.module';

/** 404 */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/** Select */
import { SelectDemoComponent } from './components/select-demo/select-demo.component';
import { BasicSelectModule } from './components/select-demo/basic-select/basic-select.module';
import { SelectWithNgModelModule } from './components/select-demo/select-with-ng-model/select-with-ng-model.module';
import { SelectMultipleModule } from './components/select-demo/select-multiple/select-multiple.module';
import { SelectReactiveFormModule } from './components/select-demo/select-reactive-form/select-reactive-form.module';
import { SelectOptionObjectValueModule } from './components/select-demo/select-option-object-value/select-option-object-value.module';
import { SelectDisableModule } from './components/select-demo/select-disable/select-disable.module';

/** Dialog */
import { DialogDemoComponent } from './components/dialog-demo/dialog-demo.component';
import { BasicDialogModule } from './components/dialog-demo/basic-dialog/basic-dialog.module';
import { DialogResponsiveModule } from './components/dialog-demo/dialog-responsive/dialog-responsive.module';
import { FullScreenDialogModule } from './components/dialog-demo/full-screen-dialog/full-screen-dialog.module';
import { DialogPromptModule } from './components/dialog-demo/dialog-prompt/dialog-prompt.module';
import { DialogNgTemplateModule } from './components/dialog-demo/dialog-ng-template/dialog-ng-template.module';

/** Carousel */
import { CarouselDemoComponent } from './components/carousel-demo/carousel-demo.component';
import { CarouselExample01Module } from './components/carousel-demo/carousel-example-01/carousel-example-01.module';
import { CarouselWithGesturesModule } from './components/carousel-demo/carousel-with-gestures/carousel-with-gestures.module';
import { CarouselWithBarModule } from './components/carousel-demo/carousel-with-bar/carousel-with-bar.module';

/** Expansion */
import { ExpansionDemoComponent } from './components/expansion-demo/expansion-demo.component';
import { BasicExpansionModule } from './components/expansion-demo/basic-expansion/basic-expansion.module';
import { CustomExpansionPanelModule } from './components/expansion-demo/custom-expansion-panel/custom-expansion-panel.module';
import { LazyLoadingComponent } from './guides/lazy-loading/lazy-loading.component';

@NgModule({
  imports: [
    SharedModule,
    PrismModule,
    DemoViewModule,
    DocsRoutingModule,
    PackageStatusModule,
    LyTypographyModule,
    LyCardModule,
    /** Typography */
    TypographyDemoBasicModule,
    TruncateTextModule,
    /** Grid */
    GridDemoBasicModule,
    GridDemoAutoLayoutModule,
    GridDemoResponsiveModule,
    /** Responsive */
    ResponsiveDemo01Module,
    ResponsiveWithDsModule,
    /** Tabs demos */
    BasicTabsModule,
    TabsWithLazyLoadingModule,
    TabsWithAsynchronouslyLoadingModule,
    TabsAlignModule,
    TabsWithIconModule,
    TabsPlacementModule,
    /** Dynamic style */
    DsBasicModule,
    DsCssDeclarationsBlockModule,
    /** Button */
    ButtonTypesDemoModule,
    IconLabelButtonsModule,
    /** Toolbar */
    ToolbarBasicDemoModule,
    ToolbarWithIconsModule,
    ToolbarDenseModule,
    /** Image cropper */
    ResizingCroppingImagesExample01Module,
    ResizingCroppingImagesExample02Module,
    ResizingCroppingImagesExample03Module,
    /** Badge */
    BasicBadgeModule,
    /** Field */
    BasicFieldModule,
    FieldPlaygroundModule,
    SimpleFormModule,
    /** Checkbox */
    BasicCheckboxModule,
    ComplexCheckboxModule,
    /** SnackBar */
    BasicSnackBarModule,
    /** Paper */
    BasicPaperModule,
    PaperWithColorModule,
    /** Icon */
    IconsModule,
    /** Tooltip */
    BasicTooltipModule,
    /** Menu */
    MenuDemo01Module,
    /** Avatar */
    BasicUsesAvatarModule,
    AvatarWithButtonModule,
    /** List */
    SimpleListModule,
    FolderListModule,
    /** Divider */
    ListDividersModule,
    InsetDividersModule,
    /** Drawer */
    DrawerDemo01Module,
    MiniDrawerModule,
    /** Radio */
    RadioExample01Module,
    BasicRadioModule,
    /** Select */
    BasicSelectModule,
    SelectWithNgModelModule,
    SelectMultipleModule,
    SelectReactiveFormModule,
    SelectOptionObjectValueModule,
    SelectDisableModule,
    /** Dialog */
    BasicDialogModule,
    DialogResponsiveModule,
    FullScreenDialogModule,
    DialogPromptModule,
    DialogNgTemplateModule,
    /** Carousel */
    CarouselExample01Module,
    CarouselWithGesturesModule,
    CarouselWithBarModule,
    /** Expansion */
    BasicExpansionModule,
    CustomExpansionPanelModule
  ],
  declarations: [
    ThemingComponent,
    ThemingComponentsComponent,
    /** Grid */
    GridDemoComponent,
    /** Responsive */
    ResponsiveDemoComponent,
    /** Tabs */
    TabsDemoComponent,
    /** Ds */
    DynamicStylesComponent,
    /** Button */
    ButtonDemoComponent,
    /** Toolbar */
    ToolbarDemoComponent,
    /** Image cropper */
    ResizingCroppingImagesDemoComponent,
    /** Badge */
    BadgeDemoComponent,
    /** Field */
    FieldDemoComponent,
    /** Ckeckbox */
    CheckboxDemoComponent,
    /** SnackBar */
    SnackBarDemoComponent,
    /** Paper */
    PaperDemoComponent,
    /** Icon */
    IconDemoComponent,
    /** Tooltip */
    TooltipDemoComponent,
    /** Menu */
    MenuDemoComponent,
    /** Avatar */
    AvatarDemoComponent,
    /** List */
    ListDemoComponent,
    /** Divider */
    DividerDemoComponent,
    /**Typography */
    TypographyDemoComponent,
    /** Drawer */
    DrawerDemoComponent,
    /** Radio */
    RadioDemoComponent,
    /** 404 */
    PageNotFoundComponent,
    /** Select */
    SelectDemoComponent,
    /** Dialog */
    DialogDemoComponent,
    /** Carousel */
    CarouselDemoComponent,
    /** Expansion */
    ExpansionDemoComponent,
    /** Lazy Loading */
    LazyLoadingComponent
  ]
})
export class DocsModule { }
