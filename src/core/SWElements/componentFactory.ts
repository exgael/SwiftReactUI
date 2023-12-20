import View from "../types/View";
import {coreModifiers} from "../modifers/core/coreModifers";

const createComponent = <T extends View>(render: Partial<View>, overrides: Partial<T>, ...modifiers: any[]): T => {

    let component: T = {
        style: {},
        events: {},
        ...render,
        ...overrides,
        ...coreModifiers,
        ...Object.assign({}, ...modifiers),
    } as T;
    return new Proxy(component, autoRenderProxyHandler) as T;
};

const autoRenderProxyHandler: ProxyHandler<View> = {
    get(target: View, prop: string | symbol): any {
        if (prop === "valueOf" || prop === "toString") {
            return target.render.bind(target);
        }
        return target[prop as keyof View];
    },
};

export default createComponent;