/**
 * Compresses a string using the LZW compression algorithm.
 * @param input - The data to compress.
 */
export function compress(input: string): string {
  const output: number[] = [];
  const dictionary: Record<string, number> = {};

  for (let i = 0; i < 256; i++) {
    dictionary[String.fromCharCode(i)] = i;
  }

  let current_string = '';
  let dictionary_size = 256;

  for (let i = 0; i < input.length; i++) {
    const current_char = input[i];
    const combined_string = current_string + current_char;

    if (dictionary.hasOwnProperty(combined_string)) {
      current_string = combined_string;
    } else {
      output.push(dictionary[current_string]);
      dictionary[combined_string] = dictionary_size++;
      current_string = current_char;
    }
  }

  if (current_string !== '') {
    output.push(dictionary[current_string]);
  }

  return output.map((code) => String.fromCharCode(code)).join('');
}

/**
 * Decompresses data that was compressed using the LZW compression algorithm.
 * @param input - The data to be decompressed.
 */
export function decompress(input: string): string {
  const dictionary: Record<number, string> = {};
  const input_data = input.split('');
  const output: string[] = [ input_data.shift() as string ];
  const input_length = input_data.length >>> 0; // Convert to unsigned 32-bit integer

  let dictionary_code = 256;
  let current_char = output[0];
  let current_string = current_char;

  for (let i = 0; i < input_length; ++i) {
    const current_code = input_data[i].charCodeAt(0);
    const entry =
      current_code < 256 ? input_data[i] : (dictionary[current_code] ?
        dictionary[current_code] : (current_string + current_char));

    output.push(entry);

    current_char = entry.charAt(0);
    dictionary[dictionary_code++] = current_string + current_char;
    current_string = entry;
  }

  return output.join('');
}