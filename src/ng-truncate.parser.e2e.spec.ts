import { DoorgetsTruncateParser } from './ng-truncate.parser';

describe('DoorgetsTruncateParser', () => {
  let parser: DoorgetsTruncateParser;

  beforeEach(() => {
    parser = new DoorgetsTruncateParser();
  });

  it('is defined', () => {
    expect(DoorgetsTruncateParser).toBeDefined();
    expect(parser instanceof DoorgetsTruncateParser).toBeTruthy();
  });

  it('should parse sentence', () => {
      expect(parser.parse("Hello")).toEqual("Hello");
      expect(parser.parse("Hello", {
        limit: 1
      })).toEqual("H...");
  });
});
