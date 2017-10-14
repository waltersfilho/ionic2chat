import { MessageBoxComponent } from './message-box/message-box.component';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header.component';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [CustomLoggedHeaderComponent,
    MessageBoxComponent],
	imports: [],
	exports: [CustomLoggedHeaderComponent,
    MessageBoxComponent]
})
export class ComponentsModule {}
