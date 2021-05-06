import orders from './orders';
import logger from '../lib/logger';
import {ExplicitContext, Tracer} from 'zipkin'

const log = logger({name: 'orders'});
const ctxImpl = new ExplicitContext();
const {recorder} = require('../lib/zipkin_recorder');
const localServiceName = 'orders';
const tracer = new Tracer({ctxImpl, recorder: recorder(localServiceName), localServiceName});

orders(localServiceName, log, tracer).listen(process.env.PORT || 3000);
