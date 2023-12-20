// coreModifiers.ts

import {Color, Gradient, SWColor} from "../../types/Color";
import View from "../../types/View";

export type MaybeFunction<T> = T | (() => T);

const DEFAULT_SIZE: "0px" = "0px";

// Utility function to evaluate MaybeFunction
function evaluate<T>(value: MaybeFunction<T>): T {
    if (typeof value === 'function') {
        return (value as () => T)();
    }
    return value;
}

// Size Types
export type EdgeInsets = {
    top?: SWLength
    right?: SWLength
    bottom?: SWLength
    left?: SWLength
}

export type Size = {
    width?: SWLength
    height?: SWLength
}

// Effect Types
export type HoverEffectType = 'default' | 'lift' | 'highlight' | 'scale';

// Border Types
export type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

export type Border = {
    width: SWLength
    style: SWBorderStyle
    color: SWColor
}
// Extend native types
type MaybeFunctionString = MaybeFunction<string>;
type SWLength = MaybeFunction<string>;
export type SWEdgeInsets = MaybeFunction<EdgeInsets>;
export type SWSize = MaybeFunction<Size>;
export type SWBorderStyle = MaybeFunction<BorderStyle>;
export type SWBorder = MaybeFunction<Border>;

// Event types modifiers

export type OnClickModifier<T> = (handler: () => void) => T;
export type OnMouseEnterModifier<T> = (handler: () => void) => T;
export type OnMouseLeaveModifier<T> = (handler: () => void) => T;

// Modifier Types
export type ForegroundStyleModifier<T> = (colorOrGradient: SWColor) => T;
export type BackgroundModifier<T> = (color: SWColor) => T;
export type MarginModifier<T> = (sizes: SWEdgeInsets) => T;
export type PaddingModifier<T> = (sizes: SWEdgeInsets) => T;
export type FrameModifier<T> = (SWSize: SWSize) => T;
export type BorderModifier<T> = (SWBorder: SWBorder) => T;
export type OpacityModifier<T> = (opacityValue: number) => T;
export type RotationEffectModifier<T> = (angle: string) => T;
export type ClipShapeModifier<T> = (radius: string) => T;
export type OverlayModifier<T> = (overlayView: View) => T;
export type ScaleEffectModifier<T> = (scaleFactor: number) => T;
export type ShadowModifier<T> = (offsetX: number, offsetY: number, blurRadius: number, color: string) => T;
export type ZIndexModifier<T> = (zValue: number) => T;
export type OffsetModifier<T> = (x: number, y: number) => T;
export type BlendModeModifier<T> = (blendMode: string) => T;
export type AllowHitTestingModifier<T> = (allowHitTesting: boolean) => T;
export type EdgesIgnoringSafeAreaModifier<T> = () => T;
export type FlipsForRightToLeftLayoutDirectionModifier<T> = () => T;
export type FocusableModifier<T> = (canFocus: boolean) => T;
export type PositionModifier<T> = (x: number, y: number) => T;
export type ClippedModifier<T> = () => T;
export type SaturationModifier<T> = (amount: number) => T;
export type BrightnessModifier<T> = (amount: number) => T;
export type ContrastModifier<T> = (amount: number) => T;
export type BlurModifier<T> = (amount: number) => T;
export type AspectRatioModifier<T> = (ratio: number) => T;
export type FontModifier<T> = (fontFamily: string, fontSize: string) => T;
export type HiddenModifier<T> = (isHidden: boolean) => T;
export type KeyboardShortcutModifier<T> = (key: string, action: () => void) => T;
export type HoverEffectModifier<T> = (effectType: HoverEffectType) => T;
export type CustomModifier<T> = (customStyles: Record<string, string>) => T;
export type MultilineTextAlignmentModifier<T> = (alignment: 'left' | 'center' | 'right' | 'justify') => T;
export type OnDragModifier<T> = (dragData: string) => T;
export type OnDropModifier<T> = (dropCallback: (droppedData: string) => void) => T;
export type OnRotateModifier<T> = (rotateCallback: (rotationAngle: number) => void) => T;
export type OnScaleModifier<T> = (scaleCallback: (scaleFactor: number) => void) => T;
export type PreferredContentSizeCategoryModifier<T> = (fontSize: string) => T;
export type Rotation3DEffectModifier<T> = (angle: string, x: number, y: number, z: number) => T;
export type TagModifier<T> = (tagValue: string) => T;
export type TextCaseModifier<T> = (textCase: 'uppercase' | 'lowercase' | 'capitalize') => T;
export type TextContentTypeModifier<T> = (contentType: string) => T;
export type TruncationModeModifier<T> = (mode: 'clip' | 'ellipsis') => T;


export interface CoreModifiers<T = any> {

    // Event types
    onClick: OnClickModifier<T>;
    onMouseEnter: OnMouseEnterModifier<T>;
    onMouseLeave: OnMouseLeaveModifier<T>;

    // Style types
    foregroundStyle: ForegroundStyleModifier<T>;
    background: BackgroundModifier<T>;
    margin: MarginModifier<T>;
    padding: PaddingModifier<T>;
    frame: FrameModifier<T>;
    border: BorderModifier<T>;
    opacity: OpacityModifier<T>;
    rotationEffect: RotationEffectModifier<T>;
    clipShape: ClipShapeModifier<T>;
    overlay: OverlayModifier<T>;
    scaleEffect: ScaleEffectModifier<T>;
    shadow: ShadowModifier<T>;
    zIndex: ZIndexModifier<T>;
    offset: OffsetModifier<T>;
    blendMode: BlendModeModifier<T>;
    allowsHitTesting: AllowHitTestingModifier<T>;
    edgesIgnoringSafeArea: EdgesIgnoringSafeAreaModifier<T>;
    flipsForRightToLeftLayoutDirection: FlipsForRightToLeftLayoutDirectionModifier<T>;
    focusable: FocusableModifier<T>;
    position: PositionModifier<T>;
    clipped: ClippedModifier<T>;
    saturation: SaturationModifier<T>;
    brightness: BrightnessModifier<T>;
    contrast: ContrastModifier<T>;
    blur: BlurModifier<T>;
    aspectRatio: AspectRatioModifier<T>;
    font: FontModifier<T>;
    hidden: HiddenModifier<T>;
    keyboardShortcut: KeyboardShortcutModifier<T>;
    hoverEffect: HoverEffectModifier<T>;
    custom: CustomModifier<T>
    multilineTextAlignment: MultilineTextAlignmentModifier<T>;
    onDrag: OnDragModifier<T>;
    onDrop: OnDropModifier<T>;
    onRotate: OnRotateModifier<T>;
    onScale: OnScaleModifier<T>;
    preferredContentSizeCategory: PreferredContentSizeCategoryModifier<T>;
    rotation3DEffect: Rotation3DEffectModifier<T>;
    tag: TagModifier<T>;
    textCase: TextCaseModifier<T>;
    textContentType: TextContentTypeModifier<T>;
    truncationMode: TruncationModeModifier<T>;
}

function applyCSSModifier<T extends View>(view: T, property: keyof typeof view.style, value: MaybeFunctionString): T {
    view.style[property] = evaluate(value);
    return view;
}

export const coreModifiers = {

    onClick: function<T extends View>(this: T, handler: () => void): T {
        this.events.onClick = handler;

        console.log(handler);

        console.log(this.events);

        return this;
    },

    onMouseEnter: function<T extends View>(this: T, handler: () => void): T {
        this.events.onMouseEnter = handler;
        return this;
    },

    onMouseLeave: function<T extends View>(this: T, handler: () => void): T {
        this.events.onMouseLeave = handler;
        return this;
    },

    foregroundStyle: function<T extends View>(this: T, colorOrGradient: SWColor): T {
        const c: Color | Gradient = evaluateSWColor(colorOrGradient);

        const cssValue: string = c.toString();

        if (c instanceof Gradient) {
            // Apply gradient to text
            applyCSSModifier(this, 'background', cssValue);
            applyCSSModifier(this, 'backgroundClip', 'text');
            applyCSSModifier(this, 'textFillColor', 'transparent'); // For Webkit browsers
            applyCSSModifier(this, 'color', 'transparent'); // Fallback for other browsers

            applyCSSModifier(this, 'WebkitBackgroundClip', 'text');
            applyCSSModifier(this,'MozBackgroundClip', 'text');
            applyCSSModifier(this,'WebkitTextFillColor', 'transparent');
            applyCSSModifier(this,'MozTextFillColor', 'transparent');

            return this;

        } else {
            // Apply solid color to text
            return applyCSSModifier(this, 'color', cssValue);
        }
    },

    background: function<T extends View>(this: T, color: SWColor): T {
        const c: Color | Gradient = evaluateSWColor(color)

        // Get css representation
        const cssValue: string = c.toString();

        if (c instanceof Gradient) {
            // Apply gradient to background
            return applyCSSModifier(this, 'backgroundImage', cssValue);
        } else {
            // Apply solid color to background
            return applyCSSModifier(this, 'backgroundColor', cssValue);
        }
    },

    margin: function<T extends View>(this: T, edgeInsets: SWEdgeInsets): T {
        const marginValue: string = evaluateSWEdgeInsets(edgeInsets);

        // Apply css styling
        return applyCSSModifier(this, 'margin', marginValue);
    },

    padding: function<T extends View>(this: T, edgeInsets: SWEdgeInsets): T {

        // Get css representation
        const paddingValue: string = evaluateSWEdgeInsets(edgeInsets);

        // Apply css styling
        return applyCSSModifier(this, 'padding', paddingValue);
    },


    frame: function<T extends View>(this: T, SWSize : SWSize): T {

        // Evaluate edgeInsets (function or value)
        const evaluatedSwSize: SWSize = evaluate(SWSize);

        // Build css representation
        const width: string = `${evaluatedSwSize.width || DEFAULT_SIZE}`;
        const height: string = `${evaluatedSwSize.height || DEFAULT_SIZE}`;

        // Apply css styling
        this.style.width = width;
        this.style.height = height;

        return this;
    },

    border: function<T extends View>(this: T, SWBorder: SWBorder): T {

        // Evaluate border (function or value)
        const evaluatedSWBorder: SWBorder = evaluate(SWBorder);

        // Evaluate width, style, and color
        const width: string = evaluate(evaluatedSWBorder.width);
        const style: BorderStyle = evaluate(evaluatedSWBorder.style);
        const color: SWColor = evaluate(evaluatedSWBorder.color);

        // Apply css styling
        return applyCSSModifier(this, 'border', `${width} ${style} ${color}`);
    },

    // TODO : Implement on reload function capabilities for modifiers below (AKA,  SW...)

    opacity: function<T extends View>(this: T, opacityValue: number): T {
        return applyCSSModifier(this, 'opacity', `${opacityValue}`);
    },

    rotationEffect: function<T extends View>(this: T, angle: string): T {
        return applyCSSModifier(this, 'transform', `rotate(${angle})`);
    },

    clipShape: function<T extends View>(this: T, radius: string): T {
        return applyCSSModifier(this, 'borderRadius', radius);
    },

    overlay: function<T extends View>(this: T, overlayView: View): T {
        // This one is a bit more complex as it involves positioning another view over the current one.
        // You might need to adjust the current view's position to 'relative' and the overlayView's position to 'absolute'.
        // Then, you can adjust the top, left, right, and bottom properties of the overlayView to position it correctly.
        // This is a basic implementation and might need adjustments based on your requirements.
        this.style.position = 'relative';
        overlayView.style.position = 'absolute';
        overlayView.style.top = '0';
        overlayView.style.left = '0';
        overlayView.style.right = '0';
        overlayView.style.bottom = '0';
        return this; // This might need further adjustments to actually "overlay" the view.
    },

    scaleEffect: function<T extends View>(this: T, scaleFactor: number): T {
        return applyCSSModifier(this, 'transform', `scale(${scaleFactor})`);
    },

    shadow: function<T extends View>(this: T, offsetX: number, offsetY: number, blurRadius: number, color: string): T {
        return applyCSSModifier(this, 'boxShadow', `${offsetX}px ${offsetY}px ${blurRadius}px ${color}`);
    },

    zIndex: function<T extends View>(this: T, zValue: number): T {
        return applyCSSModifier(this, 'zIndex', `${zValue}`);
    },

    offset: function<T extends View>(this: T, x: number, y: number): T {
        return applyCSSModifier(this, 'transform', `translate(${x}px, ${y}px)`);
    },

    blendMode: function<T extends View>(this: T, blendMode: string): T {
        return applyCSSModifier(this, 'mixBlendMode', blendMode);
    },

    allowsHitTesting: function<T extends View>(this: T, hit: boolean): T {
        return applyCSSModifier(this, 'pointerEvents', hit ? 'auto' : 'none');
    },

    // TO DO : Need refinements
    edgesIgnoringSafeArea: function<T extends View>(this: T): T {
        this.style.position = 'absolute';
        this.style.top = '0';
        this.style.right = '0';
        this.style.bottom = '0';
        this.style.left = '0';
        return this;
    },

    // TO DO : Not working
    flipsForRightToLeftLayoutDirection: function<T extends View>(this: T): T {
        return applyCSSModifier(this, 'direction', 'rtl');
    },

    focusable: function<T extends View>(this: T, canFocus: boolean): T {
        return applyCSSModifier(this, 'tabindex', canFocus ? '0' : '-1');
    },


    // TO DO : Need refinements
    position: function<T extends View>(this: T, x: number, y: number): T {
        this.style.position = 'absolute';
        this.style.transform = `translate(-50%, -50%)`;
        this.style.top = `${y}%`;
        this.style.left = `${x}%`;
        return this;
    },

    // TO DO : Need testing
    clipped: function<T extends View>(this: T): T {
        return applyCSSModifier(this, 'overflow', 'hidden');
    },

    saturation: function<T extends View>(this: T, amount: number): T {
        return applyCSSModifier(this, 'filter', `saturate(${amount}%)`);
    },

    brightness: function<T extends View>(this: T, amount: number): T {
        return applyCSSModifier(this, 'filter', `brightness(${amount}%)`);
    },

    contrast: function<T extends View>(this: T, amount: number): T {
        return applyCSSModifier(this, 'filter', `contrast(${amount}%)`);
    },

    blur: function<T extends View>(this: T, amount: number): T {
        return applyCSSModifier(this, 'filter', `blur(${amount}px)`);
    },

    aspectRatio: function<T extends View>(this: T, ratio: number): T {
        // This is a simplification. You might need to adjust the width or height based on the parent container.
        return applyCSSModifier(this, 'aspect-ratio', `${ratio}`);
    },

    font: function<T extends View>(this: T, fontFamily: string, fontSize: string): T {
        applyCSSModifier(this, 'font-family', fontFamily);
        return applyCSSModifier(this, 'font-size', fontSize);
    },

    hidden: function<T extends View>(this: T, isHidden: boolean): T {
        return applyCSSModifier(this, 'display', isHidden ? 'none' : 'block');
    },

    keyboardShortcut: function<T extends View>(this: T, key: string, action: () => void): T {
        // Attach the event listener
        document.addEventListener('keydown', function(event) {
            if (event.key === key) {
                action();
            }
        });

        return this;
    },

    hoverEffect: function<T extends View>(this: T, effectType: HoverEffectType = 'default'): T {
        const applyEffect = () => {
            switch (effectType) {
                case 'default':
                    console.log('default');
                    applyCSSModifier(this, "transform", 'translateY(-2px)');
                    applyCSSModifier(this, 'boxShadow', '0 4px 6px rgba(0, 0, 0, 0.1)');
                    break;
                case 'lift':
                    applyCSSModifier(this, "transform", 'translateY(-5px)');
                    applyCSSModifier(this, 'boxShadow', '0 10px 20px rgba(0, 0, 0, 0.2)');
                    break;
                case 'highlight':
                    applyCSSModifier(this, "transform", 'scale(1.05)');
                    break;
                case 'scale':
                    applyCSSModifier(this, "transform", 'scale(1.1)');
                    break;
            }
        };

        const removeEffect = () => {
            this.style.transform = 'none';
            this.style.boxShadow = 'none';
        };

        // Assuming you have a method to add event listeners to your view
        this.events.onMouseEnter =  applyEffect;
        this.events.onMouseLeave = removeEffect;

        console.log(this.events)

        return this;
    },

    custom: function<T extends View>(this: T, customStyles: Record<string, string>): T {
        for (const [key, value] of Object.entries(customStyles)) {
            this.style[key] = value;
        }
        return this;
    },

    multilineTextAlignment: function<T extends View>(this: T, alignment: 'left' | 'center' | 'right' | 'justify'): T {
        return applyCSSModifier(this, 'text-align', alignment);
    },

    onDrag: function<T extends View>(this: T, dragData: string): T {
        this.properties.draggable = 'true';
        this.events.dragStart = (event) => {
            event.dataTransfer.setData('text/plain', dragData);
        };
        return this;
    },


    onDrop: function<T extends View>(this: T, dropCallback: (droppedData: string) => void): T {
        this.events.drop = (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData('text/plain');
            dropCallback(data);
        };

        this.events.dragOver = (event) => event.preventDefault();
        return this;
    },

    onRotate: function<T extends View>(this: T, rotateCallback: (rotationAngle: number) => void): T {
        let initialAngle = 0;
        this.events.touchStart =(event) => {
            if (event.touches.length === 2) {
                initialAngle = Math.atan2(event.touches[1].clientY - event.touches[0].clientY, event.touches[1].clientX - event.touches[0].clientX) * (180 / Math.PI);
            }
        };

        this.events.touchMove = (event) => {
            if (event.touches.length === 2) {
                const angle = Math.atan2(event.touches[1].clientY - event.touches[0].clientY, event.touches[1].clientX - event.touches[0].clientX) * (180 / Math.PI);
                const rotationAngle = angle - initialAngle;
                rotateCallback(rotationAngle);
            }
        };

        return this;
    },

    onScale: function<T extends View>(this: T, scaleCallback: (scaleFactor: number) => void): T {
        let initialDistance = 0;
        this.events.touchStart = (event) => {
            if (event.touches.length === 2) {
                initialDistance = Math.hypot(event.touches[1].clientX - event.touches[0].clientX, event.touches[1].clientY - event.touches[0].clientY);
            }
        };

        this.events.touchMove =  (event) => {
            if (event.touches.length === 2) {
                const distance = Math.hypot(event.touches[1].clientX - event.touches[0].clientX, event.touches[1].clientY - event.touches[0].clientY);
                const scaleFactor = distance / initialDistance;
                scaleCallback(scaleFactor);
            }
        };

        return this;
    },

    preferredContentSizeCategory: function<T extends View>(this: T, fontSize: string): T {
        return applyCSSModifier(this, 'font-size', fontSize);
    },

    rotation3DEffect: function<T extends View>(this: T, angle: string, x: number, y: number, z: number): T {
        return applyCSSModifier(this, 'transform', `rotate3d(${x}, ${y}, ${z}, ${angle})`);
    },

    tag: function<T extends View>(this: T, tagValue: string): T {
        this.properties.dataTag = tagValue;
        return this;
    },

    textCase: function<T extends View>(this: T, textCase: 'uppercase' | 'lowercase' | 'capitalize'): T {
        return applyCSSModifier(this, 'text-transform', textCase);
    },

    textContentType: function<T extends View>(this: T, contentType: string): T {
        this.properties.autocomplete =  contentType;
        return this;
    },

    truncationMode: function<T extends View>(this: T, mode: 'clip' | 'ellipsis'): T {
        if (mode === 'ellipsis') {
            applyCSSModifier(this, 'white-space', 'nowrap');
            applyCSSModifier(this, 'overflow', 'hidden');
            applyCSSModifier(this, 'text-overflow', 'ellipsis');

            return this;
        } else {
            return applyCSSModifier(this, 'overflow', 'hidden');
        }
    },



};

const evaluateSWEdgeInsets = (edgeInsets: SWEdgeInsets) => {
    // Evaluate edgeInsets (function or value)
    const evaluatedEdgeInsets: EdgeInsets = evaluate(edgeInsets);

    // Evaluate top, right, bottom, left (function or value)
    const evaluatedTop: string | undefined = evaluate(evaluatedEdgeInsets.top);
    const evaluatedRight: string | undefined = evaluate(evaluatedEdgeInsets.right);
    const evaluatedBottom: string | undefined = evaluate(evaluatedEdgeInsets.bottom);
    const evaluatedLeft: string | undefined = evaluate(evaluatedEdgeInsets.left);

    // Return css representation
    return `${evaluatedTop || DEFAULT_SIZE} ${evaluatedRight || DEFAULT_SIZE} ${evaluatedBottom || DEFAULT_SIZE} ${evaluatedLeft || DEFAULT_SIZE}`;
}


const evaluateSWColor = (color: SWColor): Color | Gradient => {

    // Evaluate SWColor (function or value)
    const evaluatedColor: Color | Gradient  = evaluate(color);

    return evaluatedColor;
}