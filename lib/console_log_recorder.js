export default class CustomRecorder {
  /* eslint-disable no-console */
  constructor(logger = console.log) {
    this.logger = logger;
  }
  record(rec) {
    const {spanId, traceId} = rec.traceId;
    this.logger(
      `[spanId: ${spanId}, traceId: ${traceId}] ${rec.annotation.toString()}`
    );
  }

  toString() {
    return 'consoleTracer';
  }
}