define(['knockout'], function (ko) {
    return function appViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.images = ko.observableArray(params.images);
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});