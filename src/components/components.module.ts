import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header.component';
import { NgModule } from '@angular/core';



@NgModule({
	declarations: [CustomLoggedHeaderComponent,
    MessageBoxComponent,
    UserInfoComponent,
    UserMenuComponent],
	imports: [],
	exports: [CustomLoggedHeaderComponent,
    MessageBoxComponent,
    UserInfoComponent,
    UserMenuComponent]
})
export class ComponentsModule {}
