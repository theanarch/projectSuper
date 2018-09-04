import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { TestTabPage } from './test-tab';

@NgModule({
  declarations: [
    TestTabPage,
  ],
  imports: [
    IonicPageModule.forChild(TestTabPage),
    TranslateModule.forChild()    
  ],
})
export class TestTabPageModule {}
