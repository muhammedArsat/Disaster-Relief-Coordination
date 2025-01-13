/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-20%)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },
                },
            },
            animation: {
                bounce: 'bounce 3s infinite',
            },
        },
    },
    plugins: [],
};
