define(['knockout'], function (ko) {
    return function appViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.firstName = ko.observable('Bert');
                this.firstNameCaps = ko.pureComputed(function () {
                    return this.firstName().toUpperCase();
                }, this);
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});