const themeShape = {
    radii: ['0', '2px', '4px', '6px', '8px', '10px'],
    shadows: {
        xs: '1px 1px 2px #24292f',
        sm: '2px 2px 2px #24292f',
        md: '3px 3px 3px #24292f',
        lg: '4px 4px 4px #24292f',
        xl: '5px 5px 4px #24292f',
    },
    /**
     * VARIANTS - Standard sizes for widget/input elements
     */
    widgetHeights: {
        xs: {
            height: 5,
        },
        sm: {
            height: 7,
        },
        md: {
            height: 9,
        },
        lg: {
            height: 11,
        },
        xl: {
            height: 13,
        }
    },
    /**
     * VARIANTS - Collection of box styles for cards
     */
    cards: {
        xs: {
            height: 5,
            padding: 0,
            boxShadow: 'xs',
            borderRadius: 1,
        },
        sm: {
            height: 7,
            padding: 1,
            boxShadow: 'sm',
            borderRadius: 2,
        },
        md: {
            height: 9,
            padding: 2,
            boxShadow: 'md',
            borderRadius: 3,
        },
        lg: {
            height: 11,
            padding: 3,
            boxShadow: 'lg',
            borderRadius: 4,
        },
        xl: {
            height: 13,
            padding: 4,
            boxShadow: 'xl',
            borderRadius: 5,
        }
    }
}

module.exports = {
    theme: themeShape,
}
