export const headerLinks = [
    {
        label: 'HOME',
    },
    {
        label: 'ABOUT_MICROTECH',
        items: [
            {
                label: 'ABOUT_MICROTECH',
            },
            {
                label: 'ABOUT_MICROTECH',
            },
            {
                label: 'ABOUT_MICROTECH',
            },
        ],
    },
    {
        label: 'PRODUCTS',
        items: [
            {
                label: 'PRODUCTS',
            },
            {
                label: 'PRODUCTS',
            },
            {
                label: 'PRODUCTS',
            },
        ],
    },
    {
        label: 'OUR_NETWORK',
        items: [
            {
                label: 'OUR_NETWORK',
            },
            {
                label: 'OUR_NETWORK',
            },
        ],
    },
    {
        label: 'MEDIA_CENTER',
        items: [
            {
                label: 'MEDIA_CENTER',
            },
            {
                label: 'MEDIA_CENTER',
            },
            {
                label: 'MEDIA_CENTER',
            },
        ],
    },
    {
        label: 'COMMON_QUESTIONS',
    },
    {
        label: 'CALL_US',
    },
];

export interface NavLink {
    label: string;
    items?: NavLink[];
}
