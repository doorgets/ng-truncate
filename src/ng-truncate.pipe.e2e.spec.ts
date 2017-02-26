import { DoorgetsTruncatePipe, DoorgetsTruncateService } from '../index';

describe('DoorgetsTruncatePipe', () => {

  let pipe: DoorgetsTruncatePipe;

  beforeEach(() => {
    pipe = new DoorgetsTruncatePipe(new DoorgetsTruncateService());
  });

  it('should transforms "abcdef"', () => {
    expect(pipe.transform('abcdef', { limit: 2})).toEqual('ab...');
  });

});
