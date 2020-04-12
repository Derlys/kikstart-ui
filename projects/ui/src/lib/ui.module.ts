import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TimeagoModule } from 'ngx-timeago'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ToastrModule } from 'ngx-toastr'

import { TruncatePipe } from './pipes/truncate.pipe'

import { UiAuthComponent } from './components/ui-auth/ui-auth.component'
import { UiSidebarComponent } from './components/ui-sidebar.component'
import { UiSidebarItemComponent } from './components/ui-sidebar-item.component'
import { UiTabsComponent } from './components/ui-tabs.component'
import { UiUserComponent } from './components/ui-user.component'

import { UiAvatarModule } from './components/ui-avatar/ui-avatar.module'
import { UiBrandModule } from './components/ui-brand/ui-brand.module'
import { UiButtonModule } from './components/ui-button/ui-button.module'
import { UiCardModule } from './components/ui-card/ui-card.module'
import { UiCodeModule } from './components/ui-code/ui-code.module'
import { UiCommentModule } from './components/ui-comment/ui-comment.module'
import { UiContentModule } from './components/ui-content/ui-content.module'
import { UiDataModule } from './components/ui-data/ui-data.module'
import { UiDebugModule } from './components/ui-debug/ui-debug.module'
import { UiDialogModule } from './components/ui-dialog/ui-dialog.module'
import { UiDropdownModule } from './components/ui-dropdown/ui-dropdown.module'
import { UiFooterModule } from './components/ui-footer/ui-footer.module'
import { UiFormModule } from './components/ui-form/ui-form.module'
import { UiHeaderModule } from './components/ui-header/ui-header.module'
import { UiHeroModule } from './components/ui-hero/ui-hero.module'
import { UiLabelModule } from './components/ui-label/ui-label.module'
import { UiLayoutModule } from './components/ui-layout/ui-layout.module'
import { UiLinkModule } from './components/ui-link/ui-link.module'
import { UiLinksModule } from './components/ui-links/ui-links.module'
import { UiListModule } from './components/ui-list/ui-list.module'
import { UiLoadingModule } from './components/ui-loading/ui-loading.module'
import { UiNoDataModule } from './components/ui-no-data/ui-no-data.module'
import { UiPageSidebarModule } from './components/ui-page-sidebar/ui-page-sidebar.module'
import { UiRenderModule } from './components/ui-render/ui-render.module'

const COMPONENTS = [
  UiAuthComponent,
  UiSidebarComponent,
  UiSidebarItemComponent,
  UiTabsComponent,
  UiUserComponent,
]

const EXPORT_MODULES = [
  CommonModule,
  BsDropdownModule,
  ModalModule,
  TabsModule,
  // Ui Modules will be exported until version 2
  UiAvatarModule,
  UiBrandModule,
  UiButtonModule,
  UiCardModule,
  UiCodeModule,
  UiCommentModule,
  UiContentModule,
  UiDebugModule,
  UiDialogModule,
  UiDropdownModule,
  UiFooterModule,
  UiFormModule,
  UiHeaderModule,
  UiHeroModule,
  UiLabelModule,
  UiLayoutModule,
  UiLinkModule,
  UiLinksModule,
  UiListModule,
  UiLoadingModule,
  UiNoDataModule,
  UiPageSidebarModule,
  UiRenderModule,
]

@NgModule({
  entryComponents: [],
  declarations: [TruncatePipe, ...COMPONENTS],
  imports: [
    ...EXPORT_MODULES,
    RouterModule.forChild([]),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-center',
      timeOut: 3000,
    }),
  ],
  exports: [
    ...EXPORT_MODULES,
    ...COMPONENTS,
    TimeagoModule,
    TruncatePipe,
    ToastrModule,
    UiDataModule,
  ],
})
export class UiModule {}
