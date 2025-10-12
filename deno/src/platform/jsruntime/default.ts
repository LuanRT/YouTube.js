import type { VMPrimative } from '../../types/index.ts';
import type { BuildScriptResult } from '../../utils/javascript/JsExtractor.ts';

export default function evaluate(_data: BuildScriptResult, _env: Record<string, VMPrimative>) {
  throw new Error(
    'To decipher URLs, you must provide your own JavaScript evaluator. ' +
    'See https://ytjs.dev/guide/getting-started.html#providing-a-custom-javascript-interpreter for more details.'
  );
}