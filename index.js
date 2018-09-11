;(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory)
    } else if (typeof exports === 'object') {
        module.exports = factory()
    } else {
        global.Index = factory()
    }
}(this, function () {
    var config = null
    var fAuth = {
        install: function (Vue, options) {
            Vue.facebookAuth = facebookAuth
            Vue.prototype.$facebookAuth = facebookAuth
            if (typeof options === 'object') {
                config = Object.assign(options)
            }
        }
    }

    function facebookAuth() {
        return{
            load: function (appId, version) {
                return new Promise(resolve => {
                    window.fbAsyncInit = function () { // eslint-disable-line func-names
                        FB.init({
                            appId: config.appId,
                            xfbml: false,
                            version: config.version,
                            cookie: true
                        });
                        FB.AppEvents.logPageView();
                        resolve('SDK Loaded!');
                    };
                    (function (d, s, id) { // eslint-disable-line func-names
                        const fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) { return; }
                        const js = d.createElement(s); js.id = id;
                        js.src = '//connect.facebook.net/en_US/sdk.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                });
            },

            signIn: function (options) {
                return new Promise(resolve => {
                    window.FB.login(response => resolve(response), options);
                });
            }
            ,

            signOut: function () {
                return new Promise(resolve => {
                    window.FB.logout(response => resolve(response));
                });
            }
            ,
            getLoginStatus: function () {
                return new Promise(resolve => {
                    window.FB.getLoginStatus(responseStatus => {
                        resolve(responseStatus);
                    });
                });
            }
        }

    }

return fAuth
}))
