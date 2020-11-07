import { NgModule } from '@angular/core';

import { DoorgetsTruncatePipe } from './ng-truncate.pipe';
import { DoorgetsTruncateDirective } from './ng-truncate.directive';
import { DoorgetsTruncateService } from './ng-truncate.service';

@NgModule({
  providers: [DoorgetsTruncateService],
  declarations: [DoorgetsTruncatePipe, DoorgetsTruncateDirective],
  exports: [DoorgetsTruncatePipe, DoorgetsTruncateDirective]
})
export class DoorgetsTruncateModule {
}
