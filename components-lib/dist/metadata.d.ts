export declare const componentMetadata: {
    Button: {
        description: string;
        accessibility: {
            role: string;
            ariaLabelRequired: boolean;
        };
        props: {
            label: {
                type: string;
                required: boolean;
            };
            variant: {
                type: string;
                default: string;
            };
        };
    };
    Card: {
        description: string;
        props: {
            title: {
                type: string;
                required: boolean;
            };
            children: {
                type: string;
                required: boolean;
            };
        };
    };
};
