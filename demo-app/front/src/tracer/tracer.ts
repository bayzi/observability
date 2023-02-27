import { WebTracerProvider } from '@opentelemetry/sdk-trace-web'
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { W3CTraceContextPropagator } from '@opentelemetry/core'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { Resource } from '@opentelemetry/resources'
import { ZoneContextManager } from '@opentelemetry/context-zone'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

export const initInstrumentation = () => {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

  const exporter = new OTLPTraceExporter({
    url: "http://localhost:4318/v1/traces",
  })

  const resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'frontend',
    application: 'frontend',
  })
  

  const provider = new WebTracerProvider({ resource })
  provider.addSpanProcessor(new BatchSpanProcessor(exporter))

  // Initialize the provider
  provider.register({
    propagator: new W3CTraceContextPropagator(),
    contextManager: new ZoneContextManager(),
  })

  // Registering instrumentations / plugins
  registerInstrumentations({
    instrumentations: [
      new FetchInstrumentation({
        propagateTraceHeaderCorsUrls: [/.+/g], // this is too broad for production
        clearTimingResources: true,
      }),
    ],
  })
}