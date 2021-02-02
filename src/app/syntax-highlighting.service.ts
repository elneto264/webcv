import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import "prismjs";
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/components/prism-bash.js'
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-php';

declare let Prism: any;


@Injectable({
  providedIn: 'root'
})
export class SyntaxHighlightingService {

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: Object) { }

  public highlightAll(){

    if (isPlatformBrowser(this._platformId)){
      Prism.highlightAll();
    }

  }

  
}
