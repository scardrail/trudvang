export default class TrudvangActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            with: 840,
            height: 800,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "carac" }],
            template: "systems/trudvang/templates/sheets/importantCharacter-sheet.hbs",
            classes: ["trudvang", "sheet", "importantCharacter"]
        })
    }

    getData() {
        let data = super.getData();

        data.config = CONFIG.trudvang;
        console.log(data);
        let actorData = data.actor.data;
        console.log(actorData);

        return data;
    }
}