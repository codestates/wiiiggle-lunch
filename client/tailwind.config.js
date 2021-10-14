module.exports = {
  theme: {
    extend: {
      colors: {
        // eslint-disable-next-line
        // prettier-ignore
        'primary': '#ea4622',
        'primary-light': '#ff7a4e',
        'primary-dark': '#b00000',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pingonce: 'ping 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
