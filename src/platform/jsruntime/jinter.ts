import Jinter from 'jintr';
import { VMPrimative } from '../../types/PlatformShim.js';

export default async function evaluate(code: string, env: Record<string, VMPrimative>) {
  const runtime = new Jinter.default(code);
  for (const [ key, value ] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }
  return await runtime.interpret();
}