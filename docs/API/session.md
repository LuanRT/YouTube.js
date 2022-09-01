# Session

Represents an InnerTube session.

## API

* Session
  * [.signIn(credentials?)](#signin) ⇒ `function`
  * [.signOut()](#signout) ⇒ `function`
  * [.key](#key) ⇒ `getter`
  * [.api_version](#api_version) ⇒ `getter`
  * [.client_version](#client_version) ⇒ `getter`
  * [.client_name](#client_name) ⇒ `getter`
  * [.context](#context) ⇒ `getter`
  * [.player](#player) ⇒ `getter`
  * [.lang](#lang) ⇒ `getter`

<a name="signin"></a>
### signIn(credentials?)

Signs in with given credentials. 

**Returns:** `Promise<void>`

| Param | Type | Description |
| --- | --- | --- |
| credentials? | `Credentials` | OAuth credentials |

<a name="signout"></a>
### signOut()

Signs out of the current account.

**Returns:** `Promise<ActionsResponse>`

<a name="key"></a>
### key

InnerTube API key.

**Returns:** `string`

<a name="api_version"></a>
### key

InnerTube API version.

**Returns:** `string`

<a name="client_version"></a>
### client_version

InnerTube client version.

**Returns:** `string`

<a name="client_name"></a>
### client_name

InnerTube client name.

**Returns:** `string`

<a name="context"></a>
### context

InnerTube context.

**Returns:** `Context`

<a name="player"></a>
### player

Player script object.

**Returns:** `Player`

<a name="lang"></a>
### lang

Client language.

**Returns:** `string`