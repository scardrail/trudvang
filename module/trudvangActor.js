import * as calculStats from "./calculStats.js"
export default class trudvangActor extends Actor {
    prepareData() {
        super.prepareData();

        let actorData = this.data.data;
        actorData = calculStats.setCharacterCaracs(actorData);
    }
}