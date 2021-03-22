import {
  assertEquals,
} from "/deps.ts";

import { upcase } from "./upcase.ts";

Deno.test("should keep already upercased letters intact", () => {
  assertEquals(upcase("TOMB RAIDER 1996"), "TOMB RAIDER 1996");
});

Deno.test("should uppercase the input", () => {
  assertEquals(upcase("Résumé"), "RÉSUMÉ");
});

