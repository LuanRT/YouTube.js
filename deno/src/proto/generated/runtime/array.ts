// @ts-ignore
export type PojoSet<T extends string | number> = { [key in T]: T };
export function toPojoSet<T extends string | number>(
  arr: readonly T[],
): PojoSet<T> {
  const result: any = {};
  for (const item of arr) result[item] = item;
  return result;
}

export function removeItem<T>(arr: T[], item: T): T[] {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
  return arr;
}

export function groupBy<T, U extends keyof T>(arr: T[], by: U): Map<T[U], T[]> {
  const result = new Map<T[U], T[]>();
  for (const item of arr) {
    const key = item[by];
    if (result.has(key)) result.get(key)!.push(item);
    else result.set(key, [item]);
  }
  return result;
}
