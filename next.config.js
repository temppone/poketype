/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require('next-with-less');

// eslint-disable-next-line no-undef
module.exports = withLess({
    reactStrictMode: true,
    lessLoaderOptions: {},
});
