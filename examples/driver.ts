import { driver } from '@smartlyio/oats';

// generate type definitions for schemas from an external openapi spec
driver.generate({
  generatedValueClassFile: './tmp/openapi.types.generated.ts',
  header: '/* tslint:disable variable-name only-arrow-functions*/',
  openapiFilePath: './examples/openapi.yaml'
});
