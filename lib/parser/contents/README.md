# Parser

Sanitizes and standardizes InnerTube responses while maintaining the integrity of the data. Also [drastically improves](https://github.com/LuanRT/YouTube.js/blob/main/lib/parser/youtube/Library.js#L41) how API calls are made and handled. This clever approach was initially implemented and suggested by [Wykerd](https://github.com/Wykerd) (See #44).

Note: 
This will eventually replace the old parser.

## Methods

#### parse(data: object)

Responsible for parsing specifically the `contents` property of the response object.

##### Arguments
  * `data` - the `contents` property.

#### parseResponse(data: object)

Unlike `parse`, this can be used to parse the entire response object.

##### Arguments
  * `data` - raw response from InnerTube.