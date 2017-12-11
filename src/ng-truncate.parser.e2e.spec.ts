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

  it('should handle limits equal to string length (odd) if position is center', () => {
    let testString = "Limit equals to string length ";
    expect(parser.parse(testString, {
      limit: testString.length,
      position: 'center'
    })).toEqual(testString);
  });

  it('should handle limits equal to string length (even) if position is center', () => {
    let testString = "Limit equals to string length";
    expect(parser.parse(testString, {
      limit: testString.length,
      position: 'center'
    })).toEqual(testString);
  });

  it('results for odd and even limits for the same string (position: center) shall be different', () => {
    let testString = "This is a sample string";
    let parseEvenLimit = (parser.parse(testString, {
        limit: 4,
        position: 'center'
    }));
    let parseOddLimit = (parser.parse(testString, {
      limit: 5,
      position: 'center'
    }));

    expect(parseEvenLimit === parseOddLimit).toBeFalsy();
  });

  it('results for nearest greater odd limit shall be longer than results for an even limit if position is center and the input is 1 character longer than the biggest specified limit', () => {
    let testString = "This is a sample string";
    let parseEvenLimit = (parser.parse(testString, {
      limit: 4,
      position: 'center'
    }));

    let parseOddLimit = (parser.parse(testString, {
      limit: 5,
      position: 'center'
    }));

    expect(parseEvenLimit.length).toBeLessThan(parseOddLimit.length);
  });

  it('even limits should be correctly handled if position is center', () => {
    let testString = "This is a sample string";
    expect(parser.parse(testString, {
      limit: 5,
      position: 'center'
    })).toEqual("Thi...ng");
  });

});
