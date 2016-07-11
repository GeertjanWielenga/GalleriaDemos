require.config({
    baseUrl: './',
    paths: {
        knockout: 'js/libs/knockout/dist/knockout',
        text: 'js/libs/text/text',
        jquery: 'js/libs/jquery/dist/jquery',
        jqueryui: 'js/libs/jquery-ui/ui/',
        galleria: 'js/viewModels/galleria'
    }
});
require(['knockout', 'galleria'], function (ko, galleria) {
    ko.applyBindings(new galleria());
});