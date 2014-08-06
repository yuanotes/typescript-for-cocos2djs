####Note

* I have **NO** idea how typescipt compiler works. **Use this at your own risk.**
* `tsc_cocos2d.js` is a hacked compiler which compiles typescript to cocos2d-js(native runtime) friendly js code. **Note: This is for typescript with version 1.0.1.0.**
* `cocos2d.d.ts` is a typescript type definition file for cocos2d-js, which is forked from <https://github.com/Arlorean/cocos2d>.

####Usage

1. Install original typescript compiler with `npm install -g typescript`.
2. Copy `tsc_cocos2d.js` to `<NODE_MODULE>/typescript/bin/` to replase `tsc.js` or modify `tsc` bin file.
