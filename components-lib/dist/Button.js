import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ label, variant = "primary" }) {
    return _jsx("button", { children: label });
}
