export const componentMetadata = {
    Button: {
        description: "Triggers an action",
        accessibility: {
            role: "button",
            ariaLabelRequired: true
        },
        props: {
            label: { type: "string", required: true },
            variant: { type: "primary | secondary", default: "primary" }
        }
    },
    Card: {
        description: "Displays grouped content",
        props: {
            title: { type: "string", required: true },
            children: { type: "string", required: true },
        },
    },
};
