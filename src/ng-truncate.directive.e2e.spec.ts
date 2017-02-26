import {Component, ViewChild, ElementRef} from "@angular/core";
import {TestBed, ComponentFixture} from "@angular/core/testing";
import {Injectable, ChangeDetectionStrategy, ViewContainerRef} from "@angular/core";

import {DoorgetsTruncateModule} from '../index';

@Injectable()
@Component({
    selector: 'hmx-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div #testKey [dgTruncate]>Are you ready?</div>
        <div #testTwoKey [dgTruncate]>Are you ready?</div>
        <div #testBKey [dgTruncate]="'Are you ready?'"></div>
        <div #testOKey [dgTruncate]="'Are you ready?'" [dgTruncateOptions]="{limit: 3}" ></div>
        <div #testNKey [dgTruncate]="'Are you ready?'" [dgTruncateOptions]="'nn'" ></div>
        <div #testSKey [dgTruncate]="{}" [dgTruncateOptions]="{limit: 2}" >Are you ready?</div>
    `,
    providers: []
})
class App {
    viewContainerRef: ViewContainerRef;

    @ViewChild('testKey') testKey: ElementRef;
    @ViewChild('testTwoKey') testTwoKey: ElementRef;
    @ViewChild('testBKey') testBKey: ElementRef;
    @ViewChild('testOKey') testOKey: ElementRef;
    @ViewChild('testNKey') testNKey: ElementRef;
    @ViewChild('testSKey') testSKey: ElementRef;

    constructor(viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}

describe('DoorgetsTruncateDirective', () => {
    let fixture: ComponentFixture<App>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [DoorgetsTruncateModule],
          declarations: [App]
        });

        fixture = (<any>TestBed).createComponent(App);
        fixture.detectChanges();

    });

    afterEach(() => {
        fixture = undefined;
    });

    it('should truncate sentence', () => {
        expect(fixture.componentInstance.testKey.nativeElement.innerHTML).toEqual('Are you ready?');
        expect(fixture.componentInstance.testTwoKey.nativeElement.innerHTML).toEqual('Are you ready?');
        expect(fixture.componentInstance.testBKey.nativeElement.innerHTML).toEqual('Are you ready?');
        expect(fixture.componentInstance.testOKey.nativeElement.innerHTML).toEqual('Are...');
        expect(fixture.componentInstance.testNKey.nativeElement.innerHTML).toEqual('Are you ready?');
        expect(fixture.componentInstance.testSKey.nativeElement.innerHTML).toEqual('Ar...');
    });
});
