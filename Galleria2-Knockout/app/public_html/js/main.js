require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        text: 'js/libs/text/text',
        galleria: 'js/viewModels/galleria'
    }
});
require(['knockout', 'galleria'], function (ko, galleria, text) {
    ko.applyBindings(new galleria());
});