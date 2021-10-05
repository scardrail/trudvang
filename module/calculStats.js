export function setCharacterCaracs(data) {
    console.log(data);

    data = setIsHybridCharacter(data);

    return data;
}

function setIsHybridCharacter(data){
    switch (data.affiliations.race) {
        case "halfTrolls":
            data.affiliations.isHybrid = true;
            data.affiliations.isHalfTrolls = true;
            break;
        case "halfElves":
            data.affiliations.isHybrid = true;
            data.affiliations.isHalfElves = true;
            break;
        case "dwarfTrolls":
            data.affiliations.isHybrid = true;
            data.affiliations.isDwarfTrolls = true;
            break;
        default:
            data.affiliations.hybrid = "none";
            data.affiliations.isHybrid = false;
            data.affiliations.isHalfTrolls = false;
            data.affiliations.isHalfElves = false;
            data.affiliations.isDwarfTrolls = false;
            break;
    }

    return data;
}