define(['knockout', 'jqueryui/accordion'], function (ko) {
    return function galleriaViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.images = ko.observableArray(params.images);
                $("#accordion").accordion();
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});
//http://stackoverflow.com/questions/18695395/knockout-causing-dysfunctional-accordion