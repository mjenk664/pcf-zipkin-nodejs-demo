# PCF Zipkin Express/NodeJS Sample App

This is a nodejs repository with three apps: shopping-cart, orders, and payments.
These apps use [Zipkin](https://github.com/openzipkin/zipkin-js) to trace the calls between them. 

The traces can then be viewed using tools such as PCF AppMetrics, Zipkin Server, and Splunk.

## Using the sample apps

### DEPLOY
To use the script, you must login as a user that has the ability to assign space permissions and make spaces.
It will create a given shopping-cart, orders, and payments app that can be used to preview an example trace.

To deploy, run:
```
cf push
```

### TEST APPS
In your browser, navigate to `https://shopping-cart.cfapps.io/checkout` or curl the `/checkout` endpoint for the given shopping cart app.

#### For example
```
curl https://shopping-cart.cfapps.io/checkout
```

### CLEANUP

To cleanup, run:
```
cf delete payments -f -r
cf delete orders -f -r
cf delete shopping-cart -f -r
```