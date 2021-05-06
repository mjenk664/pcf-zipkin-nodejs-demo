import payments from './payments';
import logger from '../lib/logger';
import {ExplicitContext, Tracer} from 'zipkin';

const log = logger({name: 'payments'});
const ctxImpl = new ExplicitContext();
const {recorder} = require('../lib/zipkin_recorder');
const localServiceName = 'payments';
const tracer = new Tracer({ctxImpl, recorder, localServiceName});

payments(localServiceName, log, tracer).listen(process.env.PORT || 3000);