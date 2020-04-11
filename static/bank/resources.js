(function (angular) {
    "use strict";
    angular.module("BankFinder").factory("BranchIFSCResource",
        ["$resource", function ($resource) {
          
            return $resource("/api/branch-ifsc/:ifsc_code", {});
        }]);
})(angular);

(function (angular) {
    "use strict";
    angular.module("BankFinder").factory("BankBranchResource",
        ["$resource", function ($resource) {
           

            return $resource("/api/bank-branch/", {});
        }]);
})(angular);