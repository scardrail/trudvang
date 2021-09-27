import { registerHandlebarsHelpers } from "./helpers.js";
import { trudvang } from "./config.js";

import trudvangItem from "./trudvangItem.js";
import trudvangActor from "./trudvangActor.js";

import TrudvangItemSheet from "./sheets/trudvangItemSheet.js";
import TrudvangActorSheet from "./sheets/TrudvangActorSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [];
    return loadTemplates(templatePaths);
}

Hooks.once("init", () => {
    console.log("Trudvang | Initialisation du système Trudvang");

    //register Handlebars config
    CONFIG.trudvang = trudvang;
    CONFIG.Item.documentClass = trudvangItem;
    CONFIG.Actor.documentClass = trudvangActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("trudvang", TrudvangItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("trudvang", TrudvangActorSheet, { makeDefault: true });

    // Register Handlebars helpers
    registerHandlebarsHelpers();
    preloadHandlebarsTemplates();
});

Hooks.on("renderChatLog", (app, html, data) => {
    Chat.addChatListeners(html);

    preloadHandlebarsTemplates();
});