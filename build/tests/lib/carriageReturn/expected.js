define('modules/login/loginController',{
  name: 'loginController'
});


define('modules/login/loginService',{
  name: 'loginService'
});


/**
 * This is the loginModule.
 * The loginModule require {@link module:modules/login/loginController}, {@link module:modules/login/loginService}
 * It also requires the ui.require, ngMaterial and ngMessages libs.
 * @requires module:modules/login/loginController
 * @requires module:modules/login/loginService
 * @requires module:ui.require
 * @requires module:ngMaterial
 * @requires module:ngMessages
 * @requires module:ngStorage
 */
define('loginModule',['modules/login/loginController',
    'modules/login/loginService'],
        function (loginController,
                loginService) {
            var loginModule = angular.module('loginModule', ['ui.router', 'ngMaterial', 'ngMessages', 'ngStorage']);
            loginModule.controller('loginController', loginController);
            loginModule.service('loginService', loginService);
            return loginModule;
        });

