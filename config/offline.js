module.exports = {
    safeToUseOptionalCaches: true,
    caches: {
        main: [
            '/',
            '**/*.js.gz',
            '**/*.css',
            '**/*.png',
            '**/*.ico',
            'manifest.json',
        ],
        additional: [
            ':externals:',
        ],
        optional: [
            ':rest:',
        ],
    },
    externals: [
        '/',
    ],
    ServiceWorker: {
        events: true,
        navigateFallbackURL: '/',
    },
    AppCache: {
        events: true,
    },
}
