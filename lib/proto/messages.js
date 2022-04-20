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

defineNotificationPreferences()
defineLiveMessageParams()
defineCreateCommentParams()
defineCreateCommentReplyParams()
definePeformCommentActionParams()
defineSearchFilter()

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
      unk_num_6: 0
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
