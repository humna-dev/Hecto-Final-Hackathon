import * as Sentry from '@sentry/nextjs';


const moduleExports = {
  // Yahan apni existing Next.js configuration add karein
};

const SentryWebpackPluginOptions = {
  silent: true, // Yeh sabhi logs suppress kar deta hai
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
