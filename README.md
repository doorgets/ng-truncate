# doorgets-ng-truncate [![Build Status](https://travis-ci.org/doorgets/ng-truncate.svg?branch=master)](https://travis-ci.org/doorgets/ng-truncate) [![Dependency Status](https://david-dm.org/doorgets/ng-truncate.svg)](https://david-dm.org/doorgets/ng-truncate)

Angular 2+ (ngx) ng2 truncate module from Directive, Pipe and Service

#Table of contents
* [Installation](#installation)
* [Configuration](#configuration)
* [How it works](#how-it-works)
* [Examples](#examples)
* [Api Reference](#api-reference)

##Installation

Install npm module

```sh
npm install doorgets-ng-truncate --save
```
##Configuration

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DoorgetsTruncateModule } from 'doorgets-ng-truncate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoorgetsTruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Init options into your App root (optional)

```ts
import { Component, OnInit } from '@angular/core';

import { DoorgetsTruncateService } from 'doorgets-ng-truncate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _truncateService: DoorgetsTruncateService) {}

  ngOnInit() {
    this._truncateService.init({
      trail: '***',
      limit: 1,
      position: 'center',
      words: true
    })
  }
}
```

##How it works

Use Object as options:
```ts
  {
    trail: '...', // String '...' by default
    limit: 100, // Number (100 by default)
    position: 'center', // left | center | right (default)
    words: true // Boolean (false by default)
  }
```


##Exemples

####Truncate by chars
__@Directive:__
```html
    <span [dgTruncate] [dgTruncateOptions]="{limit: 3, trail: '***'}">
     123456789
    </span>
```

> *Output:* __123***__

__@Pipe:__
```html
    {{ '123456789' | dgTruncate :{limit: 3, trail: '***'} }}
```

> *Output:* __123***__

__@Directive:__
```html
    <span [dgTruncate] [dgTruncateOptions]="{limit: 3, trail: '***', position: 'left'}">
     123456789
    </span>
```

> *Output:* __***123__

__@Pipe:__
```html
    {{ '123456789' | dgTruncate :{limit: 3, trail: '***', position: 'left'} }}
```

> *Output:* __***123__



####Truncate by words

__@Directive:__
```html
    <span [dgTruncate] [dgTruncateOptions]="{limit: 3, words: true}">
     one two three four five
    </span>
```

> *Output:* __one two three...__

__@Pipe:__
```html
    {{ 'one two three four five' | dgTruncate :{limit: 3, words: true} }}
```

> *Output:* __one two three...__


##Api Reference

__Quick init__

```ts
  this._truncateService.init({
    trail: '***',
    limit: 2,
    position: 'center',
    words: true
  })
```

__Truncate from service__
```ts
  // Options
  let options = {
    trail: '***',
    limit: 3,
    position: 'left',
    words: true
  }

  // res contain truncated value
  let res = this._truncateService.truncate('my words to truncate', options);
```

**[Back to top](#table-of-contents)**

# License

The MIT License

Copyright (c) 2017 Mounir R'Quiba http://www.doorgets.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[Back to top](#table-of-contents)**
