import { NgModule } from '@angular/core';

import { DoorgetsTruncatePipe } from './src/ng-truncate.pipe';
import { DoorgetsTruncateDirective } from './src/ng-truncate.directive';
import { DoorgetsTruncateService } from './src/ng-truncate.service';

export * from "./src/ng-truncate.pipe";
export * from "./src/ng-truncate.parser";
export * from "./src/ng-truncate.directive";
export * from "./src/ng-truncate.service";
export * from "./src/ng-truncate.interface";

@NgModule({
  providers: [DoorgetsTruncateService],
  declarations: [DoorgetsTruncatePipe, DoorgetsTruncateDirective],
  exports: [DoorgetsTruncatePipe, DoorgetsTruncateDirective]
})
export class DoorgetsTruncateModule {
}
