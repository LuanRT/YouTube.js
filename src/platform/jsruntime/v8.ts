import { VMPrimative } from '../../types/PlatformShim.js';

async function getRT() {
  try {
    const ivm = await import('isolated-vm');
    return async function (code: string, env: Record<string, VMPrimative>) {
      const isolate = new ivm.Isolate({ memoryLimit: 128 });
      const context = await isolate.createContext();
      const jail = context.global;
      for (const [ key, value ] of Object.entries(env)) {
        await jail.set(key, value);
      }
      const result = await context.eval(code, {
        timeout: 1000
      });
      isolate.dispose();
      return result;
    };
  } catch (error) {
    const mod = await import('./jinter.js');
    return mod.default;
  }
}

export default async function evaluate(code: string, env: Record<string, VMPrimative>) {
  const runtime = await getRT();
  return await runtime(code, env);
}