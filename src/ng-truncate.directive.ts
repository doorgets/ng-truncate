import { Directive, Input, ElementRef, Renderer, AfterViewChecked } from '@angular/core';
import { DoorgetsTruncateService} from './ng-truncate.service';

@Directive({
  selector: '[dgTruncate]'
})

export class DoorgetsTruncateDirective implements AfterViewChecked {

  currentSentence: string;

  lastOptions: any;
  currentOptions: any = {};

  @Input() set dgTruncate(sentence: string) {
    if (typeof sentence === 'string') {
      this.currentSentence = sentence;
      this.doTruncate();
    }
  }

  @Input() set dgTruncateOptions(options: any) {
    this.currentOptions = typeof options === 'object'
      ? options
      : {};
  }

  constructor(
    private _render: Renderer,
    private _element: ElementRef,
    private _service: DoorgetsTruncateService
  ) {}

  ngAfterViewChecked() {
    this.doTruncate();
  }

  doTruncate() {
    if (this.currentSentence) {
      this._element.nativeElement.textContent = ' ';
    }

    const childNodes: NodeList = this._element.nativeElement.childNodes;
    for (let i = 0; i < childNodes.length; ++i) {
      const node: any = childNodes[i];
      if (node.nodeType === 3) {
        this.checkNode(node);
      }
    }
  }

  private checkNode(node: any) {
    if (!this.currentSentence) {
      this.currentSentence = this.getContent(node.textContent.trim(), node);
    }

    this.transform(this.currentSentence, node);
  }

  private getContent(content: any, node: any): any {
    if (content.length > 0) {
      if (content !== node.currentValue) {
        this.currentSentence = content;
        node.content = node.textContent;
      } else if (node.content) {
        this.currentSentence = node.content.trim();
        node.lastSentence = null;
      }
    }
    return this.currentSentence;
  }

  private transform(currentSentence: string, node: any) {
    const params: Object = this.dgTruncateOptions;
    if (this.alreadyTransformed(node, currentSentence, params)) {
      return;
    }

    this.lastOptions = params;

    const truncated = this._service.truncate(currentSentence, this.currentOptions);
    this.updateContent(truncated, currentSentence, node);

  }

  private setNodeKey(truncated: any, currentSentence: any, node: any) {
    if (truncated !== currentSentence) {
      node.lastSentence = currentSentence;
    }
  }

  private setNodeContent(node: any) {
    if (!node.content) {
      node.content = node.textContent;
    }
  }

  private updateContent(truncated: any, currentSentence: any, node: any) {
    this.setNodeKey(truncated, currentSentence, node);
    this.setNodeContent(node);

    node.currentValue = truncated
      ? truncated
      : (node.content || currentSentence);

    node.textContent = this.currentSentence
      ? node.currentValue
      : node.content.replace(currentSentence, node.currentValue);
  }

  private alreadyTransformed(node: any, currentSentence: any, params: any) {
    return node.lastSentence === currentSentence && this.lastOptions === params;
  }
}
