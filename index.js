(function () {
    'use strict';

    var rulesConfiguration = require('./rules/utils/rulesConfiguration.js')

    rulesConfiguration.addRule('angularelement', 1);
    rulesConfiguration.addRule('controller-as', 2);
    rulesConfiguration.addRule('controller-as-route', 2);
    rulesConfiguration.addRule('controller-as-vm', [2, 'vm']);
    rulesConfiguration.addRule('controller-name', [2, /[A-Z].*Controller$/]);
    rulesConfiguration.addRule('deferred', 0);
    rulesConfiguration.addRule('definedundefined', 2);
    rulesConfiguration.addRule('di', [2, 'function']);
    rulesConfiguration.addRule('di-order', 0);
    rulesConfiguration.addRule('di-unused', 0);
    rulesConfiguration.addRule('directive-name', 0);
    rulesConfiguration.addRule('document-service', 2);
    rulesConfiguration.addRule('empty-controller', 0);
    rulesConfiguration.addRule('foreach', 0);
    rulesConfiguration.addRule('file-name', 0);
    rulesConfiguration.addRule('filter-name', 0);
    rulesConfiguration.addRule('function-type', 0);
    rulesConfiguration.addRule('interval-service', 2);
    rulesConfiguration.addRule('json-functions', 2);
    rulesConfiguration.addRule('module-getter', 2);
    rulesConfiguration.addRule('module-name', 0);
    rulesConfiguration.addRule('module-setter', 2);
    rulesConfiguration.addRule('no-angular-mock', 0);
    rulesConfiguration.addRule('no-controller', 0);
    rulesConfiguration.addRule('no-cookiestore', 2);
    rulesConfiguration.addRule('no-digest', 0);
    rulesConfiguration.addRule('no-jquery-angularelement', 2);
    rulesConfiguration.addRule('no-private-call', 2);
    rulesConfiguration.addRule('no-services', [2, ['$http', '$resource', 'Restangular', '$q']]);
    rulesConfiguration.addRule('no-service-method', 2);
    rulesConfiguration.addRule('on-watch', 2);
    rulesConfiguration.addRule('rest-service', 0);
    rulesConfiguration.addRule('service-name', 0);
    rulesConfiguration.addRule('timeout-service', 2);
    rulesConfiguration.addRule('typecheck-array', 2);
    rulesConfiguration.addRule('typecheck-date', 2);
    rulesConfiguration.addRule('typecheck-function', 2);
    rulesConfiguration.addRule('typecheck-number', 2);
    rulesConfiguration.addRule('typecheck-object', 2);
    rulesConfiguration.addRule('typecheck-regexp', 2);
    rulesConfiguration.addRule('typecheck-string', 2);
    rulesConfiguration.addRule('watchers-execution', [0, '$destroy']);
    rulesConfiguration.addRule('window-service', 2);

    module.exports = rulesConfiguration.moduleExports();
})();
