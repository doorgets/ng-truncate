import {Injector} from "@angular/core";
import {getTestBed, TestBed} from "@angular/core/testing";

import {
  DoorgetsTruncateService,
  DoorgetsTruncateModule
} from '../index';

describe('DoorgetsTruncateService', () => {
  let injector: Injector;
  let truncateService: DoorgetsTruncateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoorgetsTruncateModule]
    });
    injector = getTestBed();
    truncateService = injector.get(DoorgetsTruncateService);
  });

  afterEach(() => {
    injector = undefined;
    truncateService = undefined;
  });

  it('is defined', () => {
    expect(DoorgetsTruncateService).toBeDefined();
    expect(truncateService).toBeDefined();
    expect(truncateService instanceof DoorgetsTruncateService).toBeTruthy();
  });

  it('is init from options', () => {
    let options = {
      limit: 3,
      trail: '***',
      position: 'center',
      words: true
    };

    truncateService.init(options);

    expect(truncateService.getOptions().limit).toEqual(3);
    expect(truncateService.getOptions().trail).toEqual('***');
    expect(truncateService.getOptions().position).toEqual('center');
    expect(truncateService.getOptions().words).toEqual(true);

    truncateService.init(undefined);

    expect(truncateService.getOptions().limit).toEqual(3);
    expect(truncateService.getOptions().trail).toEqual('***');
    expect(truncateService.getOptions().position).toEqual('center');
    expect(truncateService.getOptions().words).toEqual(true);
  });

  it('is truncate sentence by chars', () => {
    let options = {
      limit: 4,
      trail: '***',
      position: 'right',
      words: false
    };

    truncateService.init(options);

    let truncated = truncateService.truncate('abcde fghi jklmn opqrs tuvwx yz');
    expect(truncated).toEqual('abcd***');

    truncated = truncateService.truncate('abcde fghi jklmn opqrs tuvwx yz', {
      position: 'left'
    });
    expect(truncated).toEqual('***abcd');

    truncated = truncateService.truncate('abcde fghi jklmn opqrs tuvwx yz', {
      position: 'center'
    });
    expect(truncated).toEqual('ab***yz');

    truncated = truncateService.truncate('abcde fghi jklmn opqrs tuvwx yz', {
      limit: 32
    });
    expect(truncated).toEqual('abcde fghi jklmn opqrs tuvwx yz');

    expect(() => truncateService.truncate(undefined)).toThrowError('Parameter "sentence" must be string');
  });

  it('is truncate sentence by words', () => {
    let options = {
      limit: 4,
      trail: '***',
      position: 'right',
      words: true
    };

    truncateService.init(options);

    let truncated = truncateService.truncate('abcde fghi jklmn opqrs tuvwx yz');
    expect(truncated).toEqual('abcde fghi jklmn opqrs***');
  });
});
