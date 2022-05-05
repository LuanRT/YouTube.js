/**
* This file is auto-generated, DO NOT try to modify it directly.
* If you'd like to contribute you should modify youtube.proto  
* instead.
*/

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

var VisitorData = exports.VisitorData = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var InnertubePayload = exports.InnertubePayload = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var SoundInfoParams = exports.SoundInfoParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var NotificationPreferences = exports.NotificationPreferences = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var LiveMessageParams = exports.LiveMessageParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var GetCommentsSectionParams = exports.GetCommentsSectionParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var CreateCommentParams = exports.CreateCommentParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var CreateCommentReplyParams = exports.CreateCommentReplyParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var PeformCommentActionParams = exports.PeformCommentActionParams = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var SearchFilter = exports.SearchFilter = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineVisitorData()
defineInnertubePayload()
defineSoundInfoParams()
defineNotificationPreferences()
defineLiveMessageParams()
defineGetCommentsSectionParams()
defineCreateCommentParams()
defineCreateCommentReplyParams()
definePeformCommentActionParams()
defineSearchFilter()

function defineVisitorData () {
  VisitorData.encodingLength = encodingLength
  VisitorData.encode = encode
  VisitorData.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.id)) {
      var len = encodings.string.encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.timestamp)) {
      var len = encodings.int32.encodingLength(obj.timestamp)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.timestamp)) {
      buf[offset++] = 40
      encodings.int32.encode(obj.timestamp, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: "",
      timestamp: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 5:
        obj.timestamp = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineInnertubePayload () {
  var Context = InnertubePayload.Context = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  var SoundSearchParams = InnertubePayload.SoundSearchParams = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineContext()
  defineSoundSearchParams()

  function defineContext () {
    var Client = Context.Client = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    defineClient()

    function defineClient () {
      Client.encodingLength = encodingLength
      Client.encode = encode
      Client.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.unkparam)) {
          var len = encodings.int32.encodingLength(obj.unkparam)
          length += 2 + len
        }
        if (defined(obj.client_version)) {
          var len = encodings.string.encodingLength(obj.client_version)
          length += 2 + len
        }
        if (defined(obj.client_name)) {
          var len = encodings.string.encodingLength(obj.client_name)
          length += 2 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.unkparam)) {
          buf[offset++] = 128
          buf[offset++] = 1
          encodings.int32.encode(obj.unkparam, buf, offset)
          offset += encodings.int32.encode.bytes
        }
        if (defined(obj.client_version)) {
          buf[offset++] = 138
          buf[offset++] = 1
          encodings.string.encode(obj.client_version, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.client_name)) {
          buf[offset++] = 146
          buf[offset++] = 1
          encodings.string.encode(obj.client_name, buf, offset)
          offset += encodings.string.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          unkparam: 0,
          client_version: "",
          client_name: ""
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 16:
            obj.unkparam = encodings.int32.decode(buf, offset)
            offset += encodings.int32.decode.bytes
            break
            case 17:
            obj.client_version = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 18:
            obj.client_name = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    Context.encodingLength = encodingLength
    Context.encode = encode
    Context.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.client)) {
        var len = Client.encodingLength(obj.client)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.client)) {
        buf[offset++] = 10
        varint.encode(Client.encodingLength(obj.client), buf, offset)
        offset += varint.encode.bytes
        Client.encode(obj.client, buf, offset)
        offset += Client.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        client: null
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.client = Client.decode(buf, offset, offset + len)
          offset += Client.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  function defineSoundSearchParams () {
    SoundSearchParams.encodingLength = encodingLength
    SoundSearchParams.encode = encode
    SoundSearchParams.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.target_id)) {
        var len = encodings.string.encodingLength(obj.target_id)
        length += 1 + len
      }
      if (defined(obj.query)) {
        var len = encodings.string.encodingLength(obj.query)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.target_id)) {
        buf[offset++] = 18
        encodings.string.encode(obj.target_id, buf, offset)
        offset += encodings.string.encode.bytes
      }
      if (defined(obj.query)) {
        buf[offset++] = 26
        encodings.string.encode(obj.query, buf, offset)
        offset += encodings.string.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        target_id: "",
        query: ""
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 2:
          obj.target_id = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          case 3:
          obj.query = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  InnertubePayload.encodingLength = encodingLength
  InnertubePayload.encode = encode
  InnertubePayload.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.context)) {
      var len = Context.encodingLength(obj.context)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.target)) {
      var len = encodings.string.encodingLength(obj.target)
      length += 1 + len
    }
    if (defined(obj.sound_search_params)) {
      var len = SoundSearchParams.encodingLength(obj.sound_search_params)
      length += varint.encodingLength(len)
      length += 2 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.context)) {
      buf[offset++] = 10
      varint.encode(Context.encodingLength(obj.context), buf, offset)
      offset += varint.encode.bytes
      Context.encode(obj.context, buf, offset)
      offset += Context.encode.bytes
    }
    if (defined(obj.target)) {
      buf[offset++] = 18
      encodings.string.encode(obj.target, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.sound_search_params)) {
      buf[offset++] = 130
      buf[offset++] = 1
      varint.encode(SoundSearchParams.encodingLength(obj.sound_search_params), buf, offset)
      offset += varint.encode.bytes
      SoundSearchParams.encode(obj.sound_search_params, buf, offset)
      offset += SoundSearchParams.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      context: null,
      target: "",
      sound_search_params: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.context = Context.decode(buf, offset, offset + len)
        offset += Context.decode.bytes
        break
        case 2:
        obj.target = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 16:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.sound_search_params = SoundSearchParams.decode(buf, offset, offset + len)
        offset += SoundSearchParams.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineSoundInfoParams () {
  var Sound = SoundInfoParams.Sound = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineSound()

  function defineSound () {
    var Params = Sound.Params = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    defineParams()

    function defineParams () {
      var Ids = Params.Ids = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      }

      defineIds()

      function defineIds () {
        Ids.encodingLength = encodingLength
        Ids.encode = encode
        Ids.decode = decode

        function encodingLength (obj) {
          var length = 0
          if (defined(obj.id_1)) {
            var len = encodings.string.encodingLength(obj.id_1)
            length += 1 + len
          }
          if (defined(obj.id_2)) {
            var len = encodings.string.encodingLength(obj.id_2)
            length += 1 + len
          }
          if (defined(obj.id_3)) {
            var len = encodings.string.encodingLength(obj.id_3)
            length += 1 + len
          }
          return length
        }

        function encode (obj, buf, offset) {
          if (!offset) offset = 0
          if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
          var oldOffset = offset
          if (defined(obj.id_1)) {
            buf[offset++] = 10
            encodings.string.encode(obj.id_1, buf, offset)
            offset += encodings.string.encode.bytes
          }
          if (defined(obj.id_2)) {
            buf[offset++] = 18
            encodings.string.encode(obj.id_2, buf, offset)
            offset += encodings.string.encode.bytes
          }
          if (defined(obj.id_3)) {
            buf[offset++] = 26
            encodings.string.encode(obj.id_3, buf, offset)
            offset += encodings.string.encode.bytes
          }
          encode.bytes = offset - oldOffset
          return buf
        }

        function decode (buf, offset, end) {
          if (!offset) offset = 0
          if (!end) end = buf.length
          if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
          var oldOffset = offset
          var obj = {
            id_1: "",
            id_2: "",
            id_3: ""
          }
          while (true) {
            if (end <= offset) {
              decode.bytes = offset - oldOffset
              return obj
            }
            var prefix = varint.decode(buf, offset)
            offset += varint.decode.bytes
            var tag = prefix >> 3
            switch (tag) {
              case 1:
              obj.id_1 = encodings.string.decode(buf, offset)
              offset += encodings.string.decode.bytes
              break
              case 2:
              obj.id_2 = encodings.string.decode(buf, offset)
              offset += encodings.string.decode.bytes
              break
              case 3:
              obj.id_3 = encodings.string.decode(buf, offset)
              offset += encodings.string.decode.bytes
              break
              default:
              offset = skip(prefix & 7, buf, offset)
            }
          }
        }
      }

      Params.encodingLength = encodingLength
      Params.encode = encode
      Params.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.ids)) {
          var len = Ids.encodingLength(obj.ids)
          length += varint.encodingLength(len)
          length += 1 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.ids)) {
          buf[offset++] = 18
          varint.encode(Ids.encodingLength(obj.ids), buf, offset)
          offset += varint.encode.bytes
          Ids.encode(obj.ids, buf, offset)
          offset += Ids.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          ids: null
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 2:
            var len = varint.decode(buf, offset)
            offset += varint.decode.bytes
            obj.ids = Ids.decode(buf, offset, offset + len)
            offset += Ids.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    Sound.encodingLength = encodingLength
    Sound.encode = encode
    Sound.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.params)) {
        var len = Params.encodingLength(obj.params)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.params)) {
        buf[offset++] = 10
        varint.encode(Params.encodingLength(obj.params), buf, offset)
        offset += varint.encode.bytes
        Params.encode(obj.params, buf, offset)
        offset += Params.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        params: null
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.params = Params.decode(buf, offset, offset + len)
          offset += Params.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  SoundInfoParams.encodingLength = encodingLength
  SoundInfoParams.encode = encode
  SoundInfoParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.sound)) {
      var len = Sound.encodingLength(obj.sound)
      length += varint.encodingLength(len)
      length += 2 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.sound)) {
      buf[offset++] = 242
      buf[offset++] = 5
      varint.encode(Sound.encodingLength(obj.sound), buf, offset)
      offset += varint.encode.bytes
      Sound.encode(obj.sound, buf, offset)
      offset += Sound.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      sound: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 94:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.sound = Sound.decode(buf, offset, offset + len)
        offset += Sound.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineNotificationPreferences () {
  var Preference = NotificationPreferences.Preference = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  definePreference()

  function definePreference () {
    Preference.encodingLength = encodingLength
    Preference.encode = encode
    Preference.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.index)) {
        var len = encodings.int32.encodingLength(obj.index)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.index)) {
        buf[offset++] = 8
        encodings.int32.encode(obj.index, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        index: 0
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.index = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  NotificationPreferences.encodingLength = encodingLength
  NotificationPreferences.encode = encode
  NotificationPreferences.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.channel_id)) {
      var len = encodings.string.encodingLength(obj.channel_id)
      length += 1 + len
    }
    if (defined(obj.pref_id)) {
      var len = Preference.encodingLength(obj.pref_id)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.number_0)) {
      var len = encodings.int32.encodingLength(obj.number_0)
      length += 1 + len
    }
    if (defined(obj.number_1)) {
      var len = encodings.int32.encodingLength(obj.number_1)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.channel_id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.channel_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.pref_id)) {
      buf[offset++] = 18
      varint.encode(Preference.encodingLength(obj.pref_id), buf, offset)
      offset += varint.encode.bytes
      Preference.encode(obj.pref_id, buf, offset)
      offset += Preference.encode.bytes
    }
    if (defined(obj.number_0)) {
      buf[offset++] = 24
      encodings.int32.encode(obj.number_0, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.number_1)) {
      buf[offset++] = 32
      encodings.int32.encode(obj.number_1, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      channel_id: "",
      pref_id: null,
      number_0: 0,
      number_1: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.channel_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.pref_id = Preference.decode(buf, offset, offset + len)
        offset += Preference.decode.bytes
        break
        case 3:
        obj.number_0 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 4:
        obj.number_1 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineLiveMessageParams () {
  var Params = LiveMessageParams.Params = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineParams()

  function defineParams () {
    var Ids = Params.Ids = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    defineIds()

    function defineIds () {
      Ids.encodingLength = encodingLength
      Ids.encode = encode
      Ids.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.channel_id)) {
          var len = encodings.string.encodingLength(obj.channel_id)
          length += 1 + len
        }
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id)
          length += 1 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.channel_id)) {
          buf[offset++] = 10
          encodings.string.encode(obj.channel_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.video_id)) {
          buf[offset++] = 18
          encodings.string.encode(obj.video_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          channel_id: "",
          video_id: ""
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 1:
            obj.channel_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 2:
            obj.video_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    Params.encodingLength = encodingLength
    Params.encode = encode
    Params.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.ids)) {
        var len = Ids.encodingLength(obj.ids)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.ids)) {
        buf[offset++] = 42
        varint.encode(Ids.encodingLength(obj.ids), buf, offset)
        offset += varint.encode.bytes
        Ids.encode(obj.ids, buf, offset)
        offset += Ids.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        ids: null
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 5:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.ids = Ids.decode(buf, offset, offset + len)
          offset += Ids.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  LiveMessageParams.encodingLength = encodingLength
  LiveMessageParams.encode = encode
  LiveMessageParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.params)) {
      var len = Params.encodingLength(obj.params)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.number_0)) {
      var len = encodings.int32.encodingLength(obj.number_0)
      length += 1 + len
    }
    if (defined(obj.number_1)) {
      var len = encodings.int32.encodingLength(obj.number_1)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.params)) {
      buf[offset++] = 10
      varint.encode(Params.encodingLength(obj.params), buf, offset)
      offset += varint.encode.bytes
      Params.encode(obj.params, buf, offset)
      offset += Params.encode.bytes
    }
    if (defined(obj.number_0)) {
      buf[offset++] = 16
      encodings.int32.encode(obj.number_0, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.number_1)) {
      buf[offset++] = 24
      encodings.int32.encode(obj.number_1, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      params: null,
      number_0: 0,
      number_1: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.params = Params.decode(buf, offset, offset + len)
        offset += Params.decode.bytes
        break
        case 2:
        obj.number_0 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 3:
        obj.number_1 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineGetCommentsSectionParams () {
  var Context = GetCommentsSectionParams.Context = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  var Params = GetCommentsSectionParams.Params = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineContext()
  defineParams()

  function defineContext () {
    Context.encodingLength = encodingLength
    Context.encode = encode
    Context.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.video_id)) {
        var len = encodings.string.encodingLength(obj.video_id)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.video_id)) {
        buf[offset++] = 18
        encodings.string.encode(obj.video_id, buf, offset)
        offset += encodings.string.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        video_id: ""
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 2:
          obj.video_id = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  function defineParams () {
    var Options = Params.Options = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    var RepliesOptions = Params.RepliesOptions = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    defineOptions()
    defineRepliesOptions()

    function defineOptions () {
      Options.encodingLength = encodingLength
      Options.encode = encode
      Options.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id)
          length += 1 + len
        }
        if (defined(obj.sort_by)) {
          var len = encodings.int32.encodingLength(obj.sort_by)
          length += 1 + len
        }
        if (defined(obj.type)) {
          var len = encodings.int32.encodingLength(obj.type)
          length += 1 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.video_id)) {
          buf[offset++] = 34
          encodings.string.encode(obj.video_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.sort_by)) {
          buf[offset++] = 48
          encodings.int32.encode(obj.sort_by, buf, offset)
          offset += encodings.int32.encode.bytes
        }
        if (defined(obj.type)) {
          buf[offset++] = 120
          encodings.int32.encode(obj.type, buf, offset)
          offset += encodings.int32.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          video_id: "",
          sort_by: 0,
          type: 0
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 4:
            obj.video_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 6:
            obj.sort_by = encodings.int32.decode(buf, offset)
            offset += encodings.int32.decode.bytes
            break
            case 15:
            obj.type = encodings.int32.decode(buf, offset)
            offset += encodings.int32.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    function defineRepliesOptions () {
      var UnkOpts = RepliesOptions.UnkOpts = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      }

      defineUnkOpts()

      function defineUnkOpts () {
        UnkOpts.encodingLength = encodingLength
        UnkOpts.encode = encode
        UnkOpts.decode = decode

        function encodingLength (obj) {
          var length = 0
          if (defined(obj.unk_param)) {
            var len = encodings.int32.encodingLength(obj.unk_param)
            length += 1 + len
          }
          return length
        }

        function encode (obj, buf, offset) {
          if (!offset) offset = 0
          if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
          var oldOffset = offset
          if (defined(obj.unk_param)) {
            buf[offset++] = 8
            encodings.int32.encode(obj.unk_param, buf, offset)
            offset += encodings.int32.encode.bytes
          }
          encode.bytes = offset - oldOffset
          return buf
        }

        function decode (buf, offset, end) {
          if (!offset) offset = 0
          if (!end) end = buf.length
          if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
          var oldOffset = offset
          var obj = {
            unk_param: 0
          }
          while (true) {
            if (end <= offset) {
              decode.bytes = offset - oldOffset
              return obj
            }
            var prefix = varint.decode(buf, offset)
            offset += varint.decode.bytes
            var tag = prefix >> 3
            switch (tag) {
              case 1:
              obj.unk_param = encodings.int32.decode(buf, offset)
              offset += encodings.int32.decode.bytes
              break
              default:
              offset = skip(prefix & 7, buf, offset)
            }
          }
        }
      }

      RepliesOptions.encodingLength = encodingLength
      RepliesOptions.encode = encode
      RepliesOptions.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.comment_id)) {
          var len = encodings.string.encodingLength(obj.comment_id)
          length += 1 + len
        }
        if (defined(obj.unkopts)) {
          var len = UnkOpts.encodingLength(obj.unkopts)
          length += varint.encodingLength(len)
          length += 1 + len
        }
        if (defined(obj.channel_id)) {
          var len = encodings.string.encodingLength(obj.channel_id)
          length += 1 + len
        }
        if (defined(obj.video_id)) {
          var len = encodings.string.encodingLength(obj.video_id)
          length += 1 + len
        }
        if (defined(obj.unk_param_1)) {
          var len = encodings.int32.encodingLength(obj.unk_param_1)
          length += 1 + len
        }
        if (defined(obj.unk_param_2)) {
          var len = encodings.int32.encodingLength(obj.unk_param_2)
          length += 1 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.comment_id)) {
          buf[offset++] = 18
          encodings.string.encode(obj.comment_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.unkopts)) {
          buf[offset++] = 34
          varint.encode(UnkOpts.encodingLength(obj.unkopts), buf, offset)
          offset += varint.encode.bytes
          UnkOpts.encode(obj.unkopts, buf, offset)
          offset += UnkOpts.encode.bytes
        }
        if (defined(obj.channel_id)) {
          buf[offset++] = 42
          encodings.string.encode(obj.channel_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.video_id)) {
          buf[offset++] = 50
          encodings.string.encode(obj.video_id, buf, offset)
          offset += encodings.string.encode.bytes
        }
        if (defined(obj.unk_param_1)) {
          buf[offset++] = 64
          encodings.int32.encode(obj.unk_param_1, buf, offset)
          offset += encodings.int32.encode.bytes
        }
        if (defined(obj.unk_param_2)) {
          buf[offset++] = 72
          encodings.int32.encode(obj.unk_param_2, buf, offset)
          offset += encodings.int32.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          comment_id: "",
          unkopts: null,
          channel_id: "",
          video_id: "",
          unk_param_1: 0,
          unk_param_2: 0
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 2:
            obj.comment_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 4:
            var len = varint.decode(buf, offset)
            offset += varint.decode.bytes
            obj.unkopts = UnkOpts.decode(buf, offset, offset + len)
            offset += UnkOpts.decode.bytes
            break
            case 5:
            obj.channel_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 6:
            obj.video_id = encodings.string.decode(buf, offset)
            offset += encodings.string.decode.bytes
            break
            case 8:
            obj.unk_param_1 = encodings.int32.decode(buf, offset)
            offset += encodings.int32.decode.bytes
            break
            case 9:
            obj.unk_param_2 = encodings.int32.decode(buf, offset)
            offset += encodings.int32.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    Params.encodingLength = encodingLength
    Params.encode = encode
    Params.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.unk_token)) {
        var len = encodings.string.encodingLength(obj.unk_token)
        length += 1 + len
      }
      if (defined(obj.opts)) {
        var len = Options.encodingLength(obj.opts)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      if (defined(obj.replies_opts)) {
        var len = RepliesOptions.encodingLength(obj.replies_opts)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      if (defined(obj.page)) {
        var len = encodings.int32.encodingLength(obj.page)
        length += 1 + len
      }
      if (defined(obj.target)) {
        var len = encodings.string.encodingLength(obj.target)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.unk_token)) {
        buf[offset++] = 10
        encodings.string.encode(obj.unk_token, buf, offset)
        offset += encodings.string.encode.bytes
      }
      if (defined(obj.opts)) {
        buf[offset++] = 34
        varint.encode(Options.encodingLength(obj.opts), buf, offset)
        offset += varint.encode.bytes
        Options.encode(obj.opts, buf, offset)
        offset += Options.encode.bytes
      }
      if (defined(obj.replies_opts)) {
        buf[offset++] = 26
        varint.encode(RepliesOptions.encodingLength(obj.replies_opts), buf, offset)
        offset += varint.encode.bytes
        RepliesOptions.encode(obj.replies_opts, buf, offset)
        offset += RepliesOptions.encode.bytes
      }
      if (defined(obj.page)) {
        buf[offset++] = 40
        encodings.int32.encode(obj.page, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      if (defined(obj.target)) {
        buf[offset++] = 66
        encodings.string.encode(obj.target, buf, offset)
        offset += encodings.string.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        unk_token: "",
        opts: null,
        replies_opts: null,
        page: 0,
        target: ""
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.unk_token = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          case 4:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.opts = Options.decode(buf, offset, offset + len)
          offset += Options.decode.bytes
          break
          case 3:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.replies_opts = RepliesOptions.decode(buf, offset, offset + len)
          offset += RepliesOptions.decode.bytes
          break
          case 5:
          obj.page = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          case 8:
          obj.target = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  GetCommentsSectionParams.encodingLength = encodingLength
  GetCommentsSectionParams.encode = encode
  GetCommentsSectionParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.ctx)) {
      var len = Context.encodingLength(obj.ctx)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.unk_param)) {
      var len = encodings.int32.encodingLength(obj.unk_param)
      length += 1 + len
    }
    if (defined(obj.params)) {
      var len = Params.encodingLength(obj.params)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.ctx)) {
      buf[offset++] = 18
      varint.encode(Context.encodingLength(obj.ctx), buf, offset)
      offset += varint.encode.bytes
      Context.encode(obj.ctx, buf, offset)
      offset += Context.encode.bytes
    }
    if (defined(obj.unk_param)) {
      buf[offset++] = 24
      encodings.int32.encode(obj.unk_param, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.params)) {
      buf[offset++] = 50
      varint.encode(Params.encodingLength(obj.params), buf, offset)
      offset += varint.encode.bytes
      Params.encode(obj.params, buf, offset)
      offset += Params.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      ctx: null,
      unk_param: 0,
      params: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.ctx = Context.decode(buf, offset, offset + len)
        offset += Context.decode.bytes
        break
        case 3:
        obj.unk_param = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 6:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.params = Params.decode(buf, offset, offset + len)
        offset += Params.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineCreateCommentParams () {
  var Params = CreateCommentParams.Params = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineParams()

  function defineParams () {
    Params.encodingLength = encodingLength
    Params.encode = encode
    Params.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.index)) {
        var len = encodings.int32.encodingLength(obj.index)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.index)) {
        buf[offset++] = 8
        encodings.int32.encode(obj.index, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        index: 0
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.index = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  CreateCommentParams.encodingLength = encodingLength
  CreateCommentParams.encode = encode
  CreateCommentParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.video_id)) {
      var len = encodings.string.encodingLength(obj.video_id)
      length += 1 + len
    }
    if (defined(obj.params)) {
      var len = Params.encodingLength(obj.params)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.number)) {
      var len = encodings.int32.encodingLength(obj.number)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.video_id)) {
      buf[offset++] = 18
      encodings.string.encode(obj.video_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.params)) {
      buf[offset++] = 42
      varint.encode(Params.encodingLength(obj.params), buf, offset)
      offset += varint.encode.bytes
      Params.encode(obj.params, buf, offset)
      offset += Params.encode.bytes
    }
    if (defined(obj.number)) {
      buf[offset++] = 80
      encodings.int32.encode(obj.number, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      video_id: "",
      params: null,
      number: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 2:
        obj.video_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 5:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.params = Params.decode(buf, offset, offset + len)
        offset += Params.decode.bytes
        break
        case 10:
        obj.number = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineCreateCommentReplyParams () {
  var UnknownParams = CreateCommentReplyParams.UnknownParams = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineUnknownParams()

  function defineUnknownParams () {
    UnknownParams.encodingLength = encodingLength
    UnknownParams.encode = encode
    UnknownParams.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.unk_num)) {
        var len = encodings.int32.encodingLength(obj.unk_num)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.unk_num)) {
        buf[offset++] = 8
        encodings.int32.encode(obj.unk_num, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        unk_num: 0
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.unk_num = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  CreateCommentReplyParams.encodingLength = encodingLength
  CreateCommentReplyParams.encode = encode
  CreateCommentReplyParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.video_id)) {
      var len = encodings.string.encodingLength(obj.video_id)
      length += 1 + len
    }
    if (defined(obj.comment_id)) {
      var len = encodings.string.encodingLength(obj.comment_id)
      length += 1 + len
    }
    if (defined(obj.params)) {
      var len = UnknownParams.encodingLength(obj.params)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.unk_num)) {
      var len = encodings.int32.encodingLength(obj.unk_num)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.video_id)) {
      buf[offset++] = 18
      encodings.string.encode(obj.video_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.comment_id)) {
      buf[offset++] = 34
      encodings.string.encode(obj.comment_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.params)) {
      buf[offset++] = 42
      varint.encode(UnknownParams.encodingLength(obj.params), buf, offset)
      offset += varint.encode.bytes
      UnknownParams.encode(obj.params, buf, offset)
      offset += UnknownParams.encode.bytes
    }
    if (defined(obj.unk_num)) {
      buf[offset++] = 80
      encodings.int32.encode(obj.unk_num, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      video_id: "",
      comment_id: "",
      params: null,
      unk_num: 0
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 2:
        obj.video_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 4:
        obj.comment_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 5:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.params = UnknownParams.decode(buf, offset, offset + len)
        offset += UnknownParams.decode.bytes
        break
        case 10:
        obj.unk_num = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function definePeformCommentActionParams () {
  var TranslateCommentParams = PeformCommentActionParams.TranslateCommentParams = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineTranslateCommentParams()

  function defineTranslateCommentParams () {
    var Params = TranslateCommentParams.Params = {
      buffer: true,
      encodingLength: null,
      encode: null,
      decode: null
    }

    defineParams()

    function defineParams () {
      var Comment = Params.Comment = {
        buffer: true,
        encodingLength: null,
        encode: null,
        decode: null
      }

      defineComment()

      function defineComment () {
        Comment.encodingLength = encodingLength
        Comment.encode = encode
        Comment.decode = decode

        function encodingLength (obj) {
          var length = 0
          if (defined(obj.text)) {
            var len = encodings.string.encodingLength(obj.text)
            length += 1 + len
          }
          return length
        }

        function encode (obj, buf, offset) {
          if (!offset) offset = 0
          if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
          var oldOffset = offset
          if (defined(obj.text)) {
            buf[offset++] = 10
            encodings.string.encode(obj.text, buf, offset)
            offset += encodings.string.encode.bytes
          }
          encode.bytes = offset - oldOffset
          return buf
        }

        function decode (buf, offset, end) {
          if (!offset) offset = 0
          if (!end) end = buf.length
          if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
          var oldOffset = offset
          var obj = {
            text: ""
          }
          while (true) {
            if (end <= offset) {
              decode.bytes = offset - oldOffset
              return obj
            }
            var prefix = varint.decode(buf, offset)
            offset += varint.decode.bytes
            var tag = prefix >> 3
            switch (tag) {
              case 1:
              obj.text = encodings.string.decode(buf, offset)
              offset += encodings.string.decode.bytes
              break
              default:
              offset = skip(prefix & 7, buf, offset)
            }
          }
        }
      }

      Params.encodingLength = encodingLength
      Params.encode = encode
      Params.decode = decode

      function encodingLength (obj) {
        var length = 0
        if (defined(obj.comment)) {
          var len = Comment.encodingLength(obj.comment)
          length += varint.encodingLength(len)
          length += 1 + len
        }
        return length
      }

      function encode (obj, buf, offset) {
        if (!offset) offset = 0
        if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
        var oldOffset = offset
        if (defined(obj.comment)) {
          buf[offset++] = 10
          varint.encode(Comment.encodingLength(obj.comment), buf, offset)
          offset += varint.encode.bytes
          Comment.encode(obj.comment, buf, offset)
          offset += Comment.encode.bytes
        }
        encode.bytes = offset - oldOffset
        return buf
      }

      function decode (buf, offset, end) {
        if (!offset) offset = 0
        if (!end) end = buf.length
        if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
        var oldOffset = offset
        var obj = {
          comment: null
        }
        while (true) {
          if (end <= offset) {
            decode.bytes = offset - oldOffset
            return obj
          }
          var prefix = varint.decode(buf, offset)
          offset += varint.decode.bytes
          var tag = prefix >> 3
          switch (tag) {
            case 1:
            var len = varint.decode(buf, offset)
            offset += varint.decode.bytes
            obj.comment = Comment.decode(buf, offset, offset + len)
            offset += Comment.decode.bytes
            break
            default:
            offset = skip(prefix & 7, buf, offset)
          }
        }
      }
    }

    TranslateCommentParams.encodingLength = encodingLength
    TranslateCommentParams.encode = encode
    TranslateCommentParams.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.params)) {
        var len = Params.encodingLength(obj.params)
        length += varint.encodingLength(len)
        length += 1 + len
      }
      if (defined(obj.comment_id)) {
        var len = encodings.string.encodingLength(obj.comment_id)
        length += 1 + len
      }
      if (defined(obj.target_language)) {
        var len = encodings.string.encodingLength(obj.target_language)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.params)) {
        buf[offset++] = 26
        varint.encode(Params.encodingLength(obj.params), buf, offset)
        offset += varint.encode.bytes
        Params.encode(obj.params, buf, offset)
        offset += Params.encode.bytes
      }
      if (defined(obj.comment_id)) {
        buf[offset++] = 18
        encodings.string.encode(obj.comment_id, buf, offset)
        offset += encodings.string.encode.bytes
      }
      if (defined(obj.target_language)) {
        buf[offset++] = 34
        encodings.string.encode(obj.target_language, buf, offset)
        offset += encodings.string.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        params: null,
        comment_id: "",
        target_language: ""
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 3:
          var len = varint.decode(buf, offset)
          offset += varint.decode.bytes
          obj.params = Params.decode(buf, offset, offset + len)
          offset += Params.decode.bytes
          break
          case 2:
          obj.comment_id = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          case 4:
          obj.target_language = encodings.string.decode(buf, offset)
          offset += encodings.string.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  PeformCommentActionParams.encodingLength = encodingLength
  PeformCommentActionParams.encode = encode
  PeformCommentActionParams.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.type)) {
      var len = encodings.int32.encodingLength(obj.type)
      length += 1 + len
    }
    if (defined(obj.unk_num)) {
      var len = encodings.int32.encodingLength(obj.unk_num)
      length += 1 + len
    }
    if (defined(obj.comment_id)) {
      var len = encodings.string.encodingLength(obj.comment_id)
      length += 1 + len
    }
    if (defined(obj.video_id)) {
      var len = encodings.string.encodingLength(obj.video_id)
      length += 1 + len
    }
    if (defined(obj.unk_num_1)) {
      var len = encodings.int32.encodingLength(obj.unk_num_1)
      length += 1 + len
    }
    if (defined(obj.unk_num_2)) {
      var len = encodings.int32.encodingLength(obj.unk_num_2)
      length += 1 + len
    }
    if (defined(obj.unk_num_3)) {
      var len = encodings.string.encodingLength(obj.unk_num_3)
      length += 1 + len
    }
    if (defined(obj.unk_num_4)) {
      var len = encodings.int32.encodingLength(obj.unk_num_4)
      length += 1 + len
    }
    if (defined(obj.unk_num_5)) {
      var len = encodings.int32.encodingLength(obj.unk_num_5)
      length += 2 + len
    }
    if (defined(obj.channel_id)) {
      var len = encodings.string.encodingLength(obj.channel_id)
      length += 2 + len
    }
    if (defined(obj.unk_num_6)) {
      var len = encodings.int32.encodingLength(obj.unk_num_6)
      length += 2 + len
    }
    if (defined(obj.translate_comment_params)) {
      var len = TranslateCommentParams.encodingLength(obj.translate_comment_params)
      length += varint.encodingLength(len)
      length += 2 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.type)) {
      buf[offset++] = 8
      encodings.int32.encode(obj.type, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.unk_num)) {
      buf[offset++] = 16
      encodings.int32.encode(obj.unk_num, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.comment_id)) {
      buf[offset++] = 26
      encodings.string.encode(obj.comment_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.video_id)) {
      buf[offset++] = 42
      encodings.string.encode(obj.video_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.unk_num_1)) {
      buf[offset++] = 48
      encodings.int32.encode(obj.unk_num_1, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.unk_num_2)) {
      buf[offset++] = 56
      encodings.int32.encode(obj.unk_num_2, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.unk_num_3)) {
      buf[offset++] = 74
      encodings.string.encode(obj.unk_num_3, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.unk_num_4)) {
      buf[offset++] = 80
      encodings.int32.encode(obj.unk_num_4, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.unk_num_5)) {
      buf[offset++] = 168
      buf[offset++] = 1
      encodings.int32.encode(obj.unk_num_5, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.channel_id)) {
      buf[offset++] = 186
      buf[offset++] = 1
      encodings.string.encode(obj.channel_id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.unk_num_6)) {
      buf[offset++] = 240
      buf[offset++] = 1
      encodings.int32.encode(obj.unk_num_6, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.translate_comment_params)) {
      buf[offset++] = 250
      buf[offset++] = 1
      varint.encode(TranslateCommentParams.encodingLength(obj.translate_comment_params), buf, offset)
      offset += varint.encode.bytes
      TranslateCommentParams.encode(obj.translate_comment_params, buf, offset)
      offset += TranslateCommentParams.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      type: 0,
      unk_num: 0,
      comment_id: "",
      video_id: "",
      unk_num_1: 0,
      unk_num_2: 0,
      unk_num_3: "",
      unk_num_4: 0,
      unk_num_5: 0,
      channel_id: "",
      unk_num_6: 0,
      translate_comment_params: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.type = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 2:
        obj.unk_num = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 3:
        obj.comment_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 5:
        obj.video_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 6:
        obj.unk_num_1 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 7:
        obj.unk_num_2 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 9:
        obj.unk_num_3 = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 10:
        obj.unk_num_4 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 21:
        obj.unk_num_5 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 23:
        obj.channel_id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 30:
        obj.unk_num_6 = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 31:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.translate_comment_params = TranslateCommentParams.decode(buf, offset, offset + len)
        offset += TranslateCommentParams.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineSearchFilter () {
  var Filter = SearchFilter.Filter = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineFilter()

  function defineFilter () {
    Filter.encodingLength = encodingLength
    Filter.encode = encode
    Filter.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.param_0)) {
        var len = encodings.int32.encodingLength(obj.param_0)
        length += 1 + len
      }
      if (defined(obj.param_1)) {
        var len = encodings.int32.encodingLength(obj.param_1)
        length += 1 + len
      }
      if (defined(obj.param_2)) {
        var len = encodings.int32.encodingLength(obj.param_2)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.param_0)) {
        buf[offset++] = 8
        encodings.int32.encode(obj.param_0, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      if (defined(obj.param_1)) {
        buf[offset++] = 16
        encodings.int32.encode(obj.param_1, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      if (defined(obj.param_2)) {
        buf[offset++] = 24
        encodings.int32.encode(obj.param_2, buf, offset)
        offset += encodings.int32.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        param_0: 0,
        param_1: 0,
        param_2: 0
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.param_0 = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          case 2:
          obj.param_1 = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          case 3:
          obj.param_2 = encodings.int32.decode(buf, offset)
          offset += encodings.int32.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  SearchFilter.encodingLength = encodingLength
  SearchFilter.encode = encode
  SearchFilter.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.number)) {
      var len = encodings.int32.encodingLength(obj.number)
      length += 1 + len
    }
    if (defined(obj.filter)) {
      var len = Filter.encodingLength(obj.filter)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.number)) {
      buf[offset++] = 8
      encodings.int32.encode(obj.number, buf, offset)
      offset += encodings.int32.encode.bytes
    }
    if (defined(obj.filter)) {
      buf[offset++] = 18
      varint.encode(Filter.encodingLength(obj.filter), buf, offset)
      offset += varint.encode.bytes
      Filter.encode(obj.filter, buf, offset)
      offset += Filter.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      number: 0,
      filter: null
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.number = encodings.int32.decode(buf, offset)
        offset += encodings.int32.decode.bytes
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.filter = Filter.decode(buf, offset, offset + len)
        offset += Filter.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}
