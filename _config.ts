import lume from "lume/mod.ts";
import sheets from "lume/plugins/sheets.ts";

const site = lume();

site.use(sheets());

export default site;
