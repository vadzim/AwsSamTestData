# AwsSamTestData

`template.yaml` contains a reference to non-existing file `Z.js`

### actions:
- run `npm run build`

### actual behaviour:
- command runs successfully and show neither erros nor warnings.

### expected behaviour:
- command shows some info about wrong entry in `template.yaml`

