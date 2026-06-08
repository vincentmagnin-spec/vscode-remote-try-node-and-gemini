/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello remote world!\n');
});

/**
 * GET /api/health
 * 
 * Simple health check endpoint to verify that the application is running and responsive.
 * 
 * @returns {object} JSON object containing service status and confirmation message.
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is healthy' });
});

app.listen(PORT, HOST, () => {  console.log(`Running on http://${HOST}:${PORT}`);
});
