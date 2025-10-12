[youtubei.js](../README.md) / Context

# Type Alias: Context

> **Context**: `object`

## Type declaration

### client

> **client**: `object`

### client.androidSdkVersion?

> `optional` **androidSdkVersion**: `number`

### client.browserName?

> `optional` **browserName**: `string`

### client.browserVersion?

> `optional` **browserVersion**: `string`

### client.clientFormFactor

> **clientFormFactor**: `string`

### client.clientName

> **clientName**: `string`

### client.clientScreen?

> `optional` **clientScreen**: `string`

### client.clientVersion

> **clientVersion**: `string`

### client.configInfo?

> `optional` **configInfo**: `object`

### client.configInfo.appInstallData?

> `optional` **appInstallData**: `string`

### client.configInfo.coldConfigData?

> `optional` **coldConfigData**: `string`

### client.configInfo.coldHashData?

> `optional` **coldHashData**: `string`

### client.configInfo.hotHashData?

> `optional` **hotHashData**: `string`

### client.deviceExperimentId?

> `optional` **deviceExperimentId**: `string`

### client.deviceMake

> **deviceMake**: `string`

### client.deviceModel

> **deviceModel**: `string`

### client.gl

> **gl**: `string`

### client.hl

> **hl**: `string`

### client.kidsAppInfo?

> `optional` **kidsAppInfo**: `object`

### client.kidsAppInfo.categorySettings

> **categorySettings**: `object`

### client.kidsAppInfo.categorySettings.enabledCategories

> **enabledCategories**: `string`[]

### client.kidsAppInfo.contentSettings

> **contentSettings**: `object`

### client.kidsAppInfo.contentSettings.corpusPreference

> **corpusPreference**: `string`

### client.kidsAppInfo.contentSettings.kidsNoSearchMode

> **kidsNoSearchMode**: `string`

### client.mainAppWebInfo?

> `optional` **mainAppWebInfo**: `object`

### client.mainAppWebInfo.graftUrl

> **graftUrl**: `string`

### client.mainAppWebInfo.isWebNativeShareAvailable

> **isWebNativeShareAvailable**: `boolean`

### client.mainAppWebInfo.pwaInstallabilityStatus

> **pwaInstallabilityStatus**: `string`

### client.mainAppWebInfo.webDisplayMode

> **webDisplayMode**: `string`

### client.memoryTotalKbytes?

> `optional` **memoryTotalKbytes**: `string`

### client.originalUrl?

> `optional` **originalUrl**: `string`

### client.osName

> **osName**: `string`

### client.osVersion

> **osVersion**: `string`

### client.platform

> **platform**: `string`

### client.remoteHost?

> `optional` **remoteHost**: `string`

### client.rolloutToken?

> `optional` **rolloutToken**: `string`

### client.screenDensityFloat?

> `optional` **screenDensityFloat**: `number`

### client.screenHeightPoints?

> `optional` **screenHeightPoints**: `number`

### client.screenPixelDensity?

> `optional` **screenPixelDensity**: `number`

### client.screenWidthPoints?

> `optional` **screenWidthPoints**: `number`

### client.timeZone

> **timeZone**: `string`

### client.userAgent

> **userAgent**: `string`

### client.userInterfaceTheme?

> `optional` **userInterfaceTheme**: `string`

### client.utcOffsetMinutes

> **utcOffsetMinutes**: `number`

### client.visitorData?

> `optional` **visitorData**: `string`

### request?

> `optional` **request**: `object`

### request.internalExperimentFlags

> **internalExperimentFlags**: `any`[]

### request.useSsl

> **useSsl**: `boolean`

### thirdParty?

> `optional` **thirdParty**: `object`

### thirdParty.embedUrl

> **embedUrl**: `string`

### user

> **user**: `object`

### user.enableSafetyMode

> **enableSafetyMode**: `boolean`

### user.lockedSafetyMode

> **lockedSafetyMode**: `boolean`

### user.onBehalfOfUser?

> `optional` **onBehalfOfUser**: `string`

## Defined in

[src/core/Session.ts:38](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/Session.ts#L38)
