require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        text: 'js/libs/text/text',
        jquery: 'js/libs/jquery/dist/jquery',
        jqueryui: 'js/libs/jquery-ui/ui/',
        galleriaio: 'js/libs/galleria/src/galleria',
        galleria: 'js/viewModels/galleria'
    },
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        },
        'galleriaio': ['jquery']
    }
});
require(['knockout', 'galleria'], function (ko, galleria) {
    ko.applyBindings(new galleria());
});