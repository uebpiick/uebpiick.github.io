import {atobURL} from "/lib.js";

atobURL(new URL(location.href).searchParams.get("url"));
