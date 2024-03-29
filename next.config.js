const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
        return config;
    },
    env: {
        API_BASE_URL: process.env.BASE_URL,
    },
});
