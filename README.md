# vue-facebook-oauth
Handling Facebook sign-in and sign-out for Vue.js applications

## Installation
```
npm install vue-facebook-oauth
```

## Initialization
```
import FacebookAuth from 'vue-facebook-oauth'

Vue.use(FacebookAuth, { appId: 'xxxxxxxxxxxxxx', version: 'xx.xx' });
Vue.facebookAuth().load();
```

