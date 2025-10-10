import type { VMPrimative } from '../../types/PlatformShim.js';
import type { BuildScriptResult } from '../../utils/javascript/JsExtractor.js';

export default function evaluate(_data: BuildScriptResult, _env: Record<string, VMPrimative>) {
  throw new Error(
    'The default JavaScript evaluator is currently disabled. ' +
    'To decipher URLs, you must provide your own implementation. See the documentation for more details.'
  );
}