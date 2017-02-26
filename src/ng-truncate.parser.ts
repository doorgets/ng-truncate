import { IDoorgetsTruncateOptions } from './ng-truncate.interface';

export class DoorgetsTruncateParser {

  regexWord = /\s+/;

  parse(sentence: string, options?: IDoorgetsTruncateOptions) {
    if (typeof sentence !== 'string') {
      throw new Error('Parameter "sentence" must be string');
    }
    const originOptions = {
      limit: 100,
      trail: '...',
      position: 'right',
      words: false
    };

    const _option: IDoorgetsTruncateOptions = typeof options === 'object'
      ? Object.assign(originOptions, options)
      : originOptions;

    if (sentence.length < _option.limit && !_option.words) {
      return sentence;
    }

    const splitTag: any = _option.words
      ? this.regexWord
      : '';

    const joinTag: any = _option.words
      ? ' '
      : '';

    let prefix: string = '';
    let suffix: string = '';

    let isMiddleOption = _option.position === 'center';

    const keys = sentence.split(splitTag);
    if (keys.length > _option.limit) {
      if (isMiddleOption) {
        prefix = keys.slice(0, _option.limit / 2).join(joinTag);
        suffix = keys.reverse().slice(0, _option.limit / 2).reverse().join(joinTag);
      } else {
        sentence = keys.slice(0, _option.limit).join(joinTag);
      }
    }

    switch (_option.position) {
      case 'left':
        return _option.trail + sentence;
      case 'center':
        return prefix + _option.trail  + suffix;
      default:
        return sentence + _option.trail;
    }
  }
}

