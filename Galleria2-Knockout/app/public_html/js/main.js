require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        text: 'js/libs/text/text',
        galleria: 'js/viewModels/galleria'
    }
});
require(['knockout', 'galleria'], function (ko, galleria) {
    ko.applyBindings(new galleria());
});