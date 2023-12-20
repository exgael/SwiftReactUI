import {textModifiers} from "./core/modifers/text/textModifiers";
import {layoutModifiers} from "./core/modifers/layout/layoutModifiers";
import React from "react";
import {ButtonComponent, ForEachComponent, StackComponent, TextComponent} from "./core/types/Components";
import View from "./core/types/View";
import createComponent from "./core/SWElements/componentFactory";
import {SWText, SWButton, SWStack, SWView, SWForEach} from "./core/SWElements/SWElements";

// text
export function Text(text: string) {
    return createComponent<TextComponent>(
        { render: function() { return (<SWText view={this as TextComponent} />); } },
        { text },
        textModifiers
    );
}


// button
export function Button(action: () => void, label: View) {
    return createComponent<ButtonComponent>(
        { render: function() { return <SWButton view={this as ButtonComponent} />; } },
        { action, label }
    );
}

// layouts
export function VStack(...children: View[]) {
    return createComponent<StackComponent>(
        {
            render: function() {
                return <SWStack view={this as StackComponent} />;
            }
        },

        {
            children,
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }
        },
        layoutModifiers
    );
}

export function HStack(...children: View[]) {
    return createComponent<StackComponent>(
        {
            render: function() {
                return <SWStack view={this as StackComponent} />;
            }
        },

        {
            children,
            style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }
        },
        layoutModifiers
    );
}

// Simple View
export function RoundedRectangle() {
    return createComponent<View>(
        { render: function() { return <SWView view={this as View} />; } },
        {},
    );
}

export function Group(...children: View[]): View {
    return {
        render: () => (
            <div>
                {children.map((child, index) => child.render())}
            </div>
        ),
        style: {},
        events: {},
        properties: {},
    };
}

export function ForEach<T>(data: T[], viewBuilder: (item: T, index: number) => View) {
    return createComponent<ForEachComponent>(
        { render: function() { return <SWForEach view={this as ForEachComponent} /> }},
        { data, viewBuilder },
        layoutModifiers
    );
}


type ViewBuilderBlock = (conditions: Record<string, any>) => View | View[];

export function viewBuilder(conditions: Record<string, any>, block: ViewBuilderBlock): React.ReactElement[] {
    const views = block(conditions);
    if (Array.isArray(views)) {
        return views.map(view => view.render());
    } else {
        return [views.render()];
    }
}

// Usage
// function ConditionalComponent(): View {
//     const [condition, setCondition] = React.useState(true);
//
//     return viewBuilder({ condition }, (conditions) => {
//         if (conditions.condition) {
//             return Text("Condition met!")
//                 .fontSize("20px")
//                 .foregroundStyle(Color.hex("#00FF00"))
//                 .onClick(() => setCondition(false));
//         } else {
//             return [
//                 Text("Condition not met!")
//                     .fontSize("20px")
//                     .foregroundStyle(Color.hex("#FF0000")),
//                 Button(() => setCondition(true), Text("Reset"))
//             ];
//         }
//     });
// }
