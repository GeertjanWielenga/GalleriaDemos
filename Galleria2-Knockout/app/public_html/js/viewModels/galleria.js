define(['knockout', 'jqueryui/accordion'], function (ko) {
    return function galleriaViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.uniqueID = ko.observable('galleria'+params.uniqueID);
                this.images = ko.observableArray(params.images);
                setTimeout(function () {
                    $('#galleria'+params.uniqueID).accordion({
                        header: "> div > h3",
                        collapsible: true,
                        active: false,
                        heightStyle: "content"
                    });
                }, 1000);
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});
//http://stackoverflow.com/questions/18695395/knockout-causing-dysfunctional-accordion