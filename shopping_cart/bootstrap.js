import shoppingCart from './shopping_cart';
import logger from '../lib/logger';
import {ExplicitContext, Tracer} from 'zipkin';

const log = logger({name: 'shopping-cart'});
const ctxImpl = new ExplicitContext();
const {recorder} = require('../lib/zipkin_recorder')
const localServiceName = 'shopping-cart';
const tracer = new Tracer({ctxImpl, recorder, localServiceName});

shoppingCart(localServiceName, log, tracer).listen(process.env.PORT || 3000);