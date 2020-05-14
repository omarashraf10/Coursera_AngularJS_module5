(function () {
"use strict";

angular.module('public')
.service('UserDataService',UserDataService);


function UserDataService() {
  var service = this;
   service.user={
     first_name : "",
     last_name : "",
     email_address : "",
     phone_number : ""

   };
   service.submitted=false;

    service.submit= function(user)
    {
      service.user.first_name=user.first_name;
      service.user.last_name=user.last_name;
      service.user.email_address=user.email_address;
      service.user.phone_number=user.phone_number;
      service.submitted=true;
      
      return true;
    }

}

})();
