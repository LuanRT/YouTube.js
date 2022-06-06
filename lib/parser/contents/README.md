# Parser

Sanitizes and standardizes InnerTube responses while maintaining the integrity of the data. This clever approach was initially implemented and suggested by [Wykerd](https://github.com/Wykerd) (See #44).

Note: 
This will eventually replace the old parser.

## Methods

#### parse(object: data)

Responsible for parsing especially the `contents` property of the response object.

##### Arguments
  * `data` - the `contents` property.

#### parseResponse(object: data)

Unlike `parse`, this can be used to parse the entire response object.

##### Arguments
  * `data` - raw response from InnerTube.