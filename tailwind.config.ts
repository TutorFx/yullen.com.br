
/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
              sans: 'DM Mono'
            },
            colors: {
                primary: {
                  DEFAULT: '#ee4469',
                  content: 'white',
                  50: '#fffcfd',
                  100: '#fef3f6',
                  200: '#fde5ea',
                  300: '#fbd0da',
                  400: '#f8b6c4',
                  500: '#f596ab',
                  600: '#f2708c',
                  700: '#ee4469',
                  800: '#960e2c',
                  900: '#490715',
                  950: '#2f040e',
                },
                secondary: {
                  DEFAULT: '#f58c14',
                  content: 'white',
                  50: '#fffdfb',
                  100: '#fef8f0',
                  200: '#feefde',
                  300: '#fde2c4',
                  400: '#fbd2a3',
                  500: '#f9be7b',
                  600: '#f8a74b',
                  700: '#f58c14',
                  800: '#8c4e06',
                  900: '#482803',
                  950: '#311b02',
                },
                success: {
                  DEFAULT: '#50cb20',
                  content: 'black',
                  50: '#fcfefb',
                  100: '#f4fdf0',
                  200: '#e6fade',
                  300: '#d2f6c3',
                  400: '#b8f0a2',
                  500: '#99ea79',
                  600: '#74e349',
                  700: '#50cb20',
                  800: '#2d7312',
                  900: '#183e0a',
                  950: '#112c07',
                },
                info: {
                  DEFAULT: '#65c4e2',
                  content: 'black',
                  50: '#fdfeff',
                  100: '#f5fbfd',
                  200: '#e9f7fb',
                  300: '#d8f0f8',
                  400: '#c3e8f4',
                  500: '#a8deee',
                  600: '#89d2e9',
                  700: '#65c4e2',
                  800: '#1c7692',
                  900: '#0d3845',
                  950: '#08232b',
                },
            },
        }
    }
}