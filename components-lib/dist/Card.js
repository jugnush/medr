import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ title, children }) {
    return (_jsxs("div", { style: { border: "1px solid #ddd", padding: 16 }, children: [_jsx("h3", { children: title }), children] }));
}
