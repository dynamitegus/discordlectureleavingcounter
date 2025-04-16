import fs from 'bun:fs';
import path from 'bun:path';
import type { Client } from 'discord.js';
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance

class ExtendedClient extends Client {

    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds
            ],
            presence: {
                activities: [{
                    name: 'balls for balls'
                }],
                status: 'online'
            }
        })
    }
    
}

export const client: ExtendedClient = new ExtendedClient();

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient: Client<true>) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
