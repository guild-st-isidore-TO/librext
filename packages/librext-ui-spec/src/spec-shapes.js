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
        /** Tiny font size * line height + 0.75rem space */
        xs: {
            height: '1.6875rem',
        },
        /** Small font size * line height + 1rem space */
        sm: {
            height: '2.04125rem',
        },
        /** Body font size * line height + 1.5rem space */
        md: {
            height: '2.75rem',
        },
        /** 2 lines of Body text * line height + 1.5rem space */
        lg: {
            height: '4rem',
        },
        /** 3 lines of Body text * line height + 1.5rem space */
        xl: {
            height: '5.25rem',
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

// module.exports = {
//     theme: themeShape,
// }

export default themeShape