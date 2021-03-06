/*
Copyright 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/fluid-project/co-occurrence-engine/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

var fluid = require("infusion");

fluid.module.register("co-occurrence-engine", __dirname, require);
require("./src/CoOccurrenceEngine.js");
require("./src/NexusWithCoOccurrenceEngine.js");
