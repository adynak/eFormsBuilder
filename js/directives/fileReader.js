eFormsBuilder.directive("filelistBind", [ 'Data',
    function (Data) {
      return {
        link: function ($scope, $elm, $attrs) {

          $elm.on('change', function (changeEvent) {
            var fileName = changeEvent.target.files[0].name;

            var fileReader = new FileReader();

            fileReader.readAsText(changeEvent.target.files[0]);
            fileReader.onloadend = function (evt) {

              $scope.$apply(function(){
                var contents = evt.target.result;
                Data.setTextContents(contents);
              });

            }

          });

        }
      }
    }
]);