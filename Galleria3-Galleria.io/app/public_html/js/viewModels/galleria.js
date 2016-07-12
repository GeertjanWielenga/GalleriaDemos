define(['knockout', 'galleriaio'], function (ko) {
    return function galleriaViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.uniqueID = ko.observable('galleria' + params.uniqueID);
                this.images = ko.observableArray(params.images);
                Galleria.loadTheme('js/libs/galleria/src/themes/classic/galleria.classic.js');
                Galleria.run('#galleria' + params.uniqueID, {
                    width: params.width,
                    height: params.height
                });
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});