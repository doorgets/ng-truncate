import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { DoorgetsTruncateService} from './ng-truncate.service';

@Pipe({
  name: 'dgTruncate',
  pure: true
})
@Injectable()
export class DoorgetsTruncatePipe implements PipeTransform {

  constructor(private _service: DoorgetsTruncateService) {}

  transform(sentence: string, options?: any): string {
    return this._service.truncate(sentence, options);
  }
}
