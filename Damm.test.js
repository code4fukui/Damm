import * as t from "https://deno.land/std/testing/asserts.ts";
import { Damm } from "./Damm.js";

Deno.test("calc", () => {
  t.assertEquals(Damm.calc(572), 4);
  t.assertEquals(Damm.calc("572"), 4);
});
Deno.test("check", () => {
  t.assert(Damm.check(5724));
  t.assert(Damm.check("5724"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Damm.addCheckDigit(572), 5724);
  t.assertEquals(Damm.addCheckDigit("572"), "5724");
  t.assertEquals(Damm.addCheckDigit("000572"), "0005724");
});
Deno.test("algorithm", () => {
  t.assertEquals(Damm.calc("1"), 3);
  t.assertEquals(Damm.calc("11"), 7);
  t.assertEquals(Damm.calc("111"), 9);
  t.assertEquals(Damm.calc("1111"), 5);
  t.assertEquals(Damm.calc("00001111"), 5);
  t.assertEquals(Damm.calc("11110"), 3);
});
