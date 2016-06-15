// @experimentaldecorators: true
// @emitdecoratormetadata: true
// @target: es5
// @isolatedModules: true
// @module: commonjs

// @filename: node_modules/angular2/core.d.ts
export declare class ElementRef {}

// @filename: main.ts
import * as ng from "angular2/core";

declare function foo(...args: any[]);

@foo
export class MyClass1 {
    constructor(private _elementRef: ng.ElementRef){}
}