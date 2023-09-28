/// <reference types="../index" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<ClForm.Item[]>;
        default: () => never[];
    };
    title: StringConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    op: {
        type: ArrayConstructor;
        default: () => string[];
    };
    onSearch: FunctionConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "reset")[], "clear" | "reset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<ClForm.Item[]>;
        default: () => never[];
    };
    title: StringConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    op: {
        type: ArrayConstructor;
        default: () => string[];
    };
    onSearch: FunctionConstructor;
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
}, {
    items: ClForm.Item[];
    op: unknown[];
    size: string | number;
}, {}>;
export default _default;
