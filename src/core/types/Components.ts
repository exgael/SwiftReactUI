import View from "./View";
import {TextModifiers} from "../modifers/text/textModifiers";
import {CoreModifiers} from "../modifers/core/coreModifers";
import {LayoutModifiers} from "../modifers/layout/layoutModifiers";

export type TextComponent = View & CoreModifiers<TextComponent> & TextModifiers<TextComponent> & {
    text: string;
};

export type ButtonComponent = View & CoreModifiers<ButtonComponent> & {
    action: () => void;
    label: View;
};

export type StackComponent = View & CoreModifiers<StackComponent> & LayoutModifiers<StackComponent> & {
    children?: View[];
}

export type ForEachComponent = View & CoreModifiers<ForEachComponent> & LayoutModifiers<ForEachComponent> & {
    data: any[];
    viewBuilder: (item: any, index: number) => View;
}