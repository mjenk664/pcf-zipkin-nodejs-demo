import express from 'express';
import {expressMiddleware as zipkin} from 'zipkin-instrumentation-express';

export default function(serviceName, log, tracer) {
  const app = express();
  
  app.use(zipkin({tracer}));

  app.get('/charge-card', (req, res) => {
    log.info('/charge-card called');
    // res.status(200).send('card successfully charged!');
    res.status(503).send('card could not be charged!');
  });

  return app;
}