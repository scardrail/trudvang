export default class TrudvangItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 600,
            height: 570,
            classes: ["trudvang", "sheet", "item"]
        })
    }

    get template() {
        console.log(`Trudvang | Récupération du fichier hbs ${this.item.data.type}-sheet.hbs`);

        return `systems/trudvang/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.trudvang;

        console.log(data);
        return data;
    }
}