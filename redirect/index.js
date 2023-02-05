import { atobURL } from "/lib.js";

const url = new URL(location.href).searchParams.get("url");
if (url) location.href = atobURL(url);
