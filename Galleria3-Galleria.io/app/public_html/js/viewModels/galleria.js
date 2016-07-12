define(['knockout', 'galleriaio'], function (ko) {
    return function galleriaViewModel() {
        ko.components.register("galleria", {
            viewModel: function (params) {
                this.uniqueID = ko.observable('galleria'+params.uniqueID);
                this.images = ko.observableArray(params.images);
                setTimeout(function () {
                    Galleria.loadTheme('js/libs/galleria/src/themes/classic/galleria.classic.js');
                    Galleria.run('#galleria'+params.uniqueID, {
                        width:params.width,
                        height:params.height
                    });
//                    $('#galleria'+params.uniqueID).galleria({
////                        header: "> div > h3",
////                        collapsible: true,
////                        active: false,
////                        heightStyle: "content"
//                    });
                }, 1000);
            },
            template: {require: 'text!js/views/galleria.html'}
        });
    };
});
//http://stackoverflow.com/questions/18695395/knockout-causing-dysfunctional-accordion