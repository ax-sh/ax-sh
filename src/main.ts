export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// @ts-expect-error not a error
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
