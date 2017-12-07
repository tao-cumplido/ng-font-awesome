import { ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
export declare type FaSize = '1x' | 'lg' | '2x' | '3x' | '4x' | '5x';
export declare type FaAnimation = 'none' | 'spin' | 'pulse';
export declare class FaIcon {
    protected sanitizer: DomSanitizer;
    icon: string;
    size: FaSize;
    fixed: boolean;
    animation: FaAnimation;
    rotate: number;
    flipHorizontal: boolean;
    flipVertical: boolean;
    constructor(sanitizer: DomSanitizer);
    transform(): SafeStyle;
}
export declare class FaListIcon extends FaIcon implements OnInit {
    protected sanitizer: DomSanitizer;
    private element;
    constructor(sanitizer: DomSanitizer, element: ElementRef);
    ngOnInit(): void;
}
