import fs from "node:fs";
import { export_specta_types } from "./pkg/specta_bindgen.js";

fs.writeFileSync("./bindings.ts", export_specta_types());
