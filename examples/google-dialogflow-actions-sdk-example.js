// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const Botanalytics = require('botanalytics').GoogleAssistant(process.env.BOTANALYTICS_TOKEN);

//Original sample https://github.com/actions-on-google/dialogflow-silly-name-maker-webhook-nodejs
const app = dialogflow({debug: true});

app.intent('make_name', (conv, {color, number}) => {
    conv.close(`Alright, your silly name is ${color} ${number}! ` +
        `I hope you like it. See you next time.`);
});
// Attach Botanalytics
Botanalytics.attach(app);
exports.sillyNameMaker = functions.https.onRequest(app);
