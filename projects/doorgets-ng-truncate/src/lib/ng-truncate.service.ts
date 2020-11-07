import { Injectable } from '@angular/core';
import { DoorgetsTruncateParser } from './ng-truncate.parser';
import { IDoorgetsTruncateOptions } from './ng-truncate.interface';

let dgTruncateOptions: IDoorgetsTruncateOptions = {
  limit: 100,
  trail: '...',
  position: 'right',
  words: false
};

let DgTruncateParser: any;

@Injectable()
export class DoorgetsTruncateService {

  private _parser: any;

  constructor() {
    DgTruncateParser = DgTruncateParser || new DoorgetsTruncateParser();
    this._parser = DgTruncateParser;
  }

  truncate(sentence: string, options?: IDoorgetsTruncateOptions) {
    options = typeof options === 'object' ? options : {};
    const _options: IDoorgetsTruncateOptions = Object.assign({}, dgTruncateOptions, options);
    return this._parser.parse(sentence, _options);
  }

  init(options: any) {
    if (typeof options === 'object') {
      dgTruncateOptions = Object.assign({}, dgTruncateOptions, options);
    }
  }

  getOptions() {
    return dgTruncateOptions;
  }
}
