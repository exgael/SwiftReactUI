import React from "react";
import {ButtonComponent, ForEachComponent, StackComponent, TextComponent} from "../types/Components";
import View from "../types/View";

export const SWText: React.FC<{ view: TextComponent }> = React.memo(

    // Lambda function to memoize
    ({ view }) => (
        <span style={view.style} {...view.events}>
            {view.text}
        </span>
    )
);

export const SWButton: React.FC<{ view: ButtonComponent }> = React.memo(
    ({ view }) => (
        <button style={view.style} {...view.events} onClick={view.action}>

            {/* Label render call needed to return the label react element */}
            {view.label.render()}
        </button>
    )
);

export const SWStack: React.FC<{ view: StackComponent }> = React.memo(
    ({ view }) => (
        <div style={view.style} {...view.events}>
            {view.children && view.children.map((child: View) => {
                return (
                    <div key={generateObjectHash(child)}>
                        {child.render()}
                    </div>
                );
            })}
        </div>
    )
);



export const SWForEach: React.FC<{ view: ForEachComponent }> = React.memo(
    ({ view }) => (
        <div style={view.style} {...view.events}>
            {view.data && view.data.map((item: any, index: number) => (
                <div key={generateObjectHash(item + index)}>
                    {view.viewBuilder(item, index).render()}
                </div>
            ))}
        </div>
    )
)

export const SWView: React.FC<{ view: View }> = React.memo(
    ({ view } ) => (
        <div style={view.style} {...view.events} />
    )
)


function generateHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char + Math.random() + Math.random();
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
}

function generateObjectHash(obj: Object) {
    const str = JSON.stringify(obj);
    return generateHash(str);
}