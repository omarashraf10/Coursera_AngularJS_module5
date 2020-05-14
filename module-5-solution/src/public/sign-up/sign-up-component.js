(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/sign-up/sign-up-component.html',
  controller: RegController
})

RegController.$inject = ['UserDataService'];
function RegController(UserDataService) {
  var $ctrl = this;
  $ctrl.user = {
    first_name : "",
    last_name : "",
    email_address : "",
    phone_number : ""

  };
  $ctrl.submitted  =false;
  $ctrl.submit= function(){
  //  console.log('submitted', $ctrl.submitted );
    $ctrl.submitted = UserDataService.submit($ctrl.user);
  //  console.log('submitted', $ctrl.submitted );
  };


}



})();
