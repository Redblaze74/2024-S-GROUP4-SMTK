// PLEASE BE ADVISED
// DICTIONARY OF VULGAR LANGUAGE BELOW
// VIEW AT OWN DISCRETION

// generated with AI
const swearWords = [
    "fuck",
    "shit",
    "bitch",
    "asshole",
    "cunt",
    "damn",
    "bastard",
    "motherfucker",
    "cock",
    "dick",
    "pussy",
    "whore",
    "slut",
    "fag",
    "faggot",
    "nigger",
    "dyke",
    "retard",
    "twat",
    "ass",
    "bollocks",
    "wanker",
    "prick",
    "arsehole",
    "asswipe",
    "goddamn",
    "crap",
    "shithead",
    "fucker",
    "douchebag",
    "jackass",
    "douche",
    "fuckwit",
    "freaking",
    "bitchy",
    "bloody",
    "screw",
    "bugger",
    "darn",
    "sod",
    "git",
    "piss",
    "idiot",
    "moron",
    "numbnuts",
    "wank",
    "jerk",
    "cockhead",
    "pissed",
    "dipshit",
    "arse",
    "turd",
    "crazy",
    "sucker",
    "cuss",
    "scumbag",
    "fudge",
    "nutjob",
    "sissy",
    "pissant",
    "twit",
    "dumbass",
    "bullshit",
    "fucking",
    "son of a bitch",
    "fuckface",
    "shitstorm",
    "asshat",
    "butthead",
    "douche canoe",
    "shitshow",
    "cockwomble",
    "crapulence",
    "assclown",
    "cockbite",
    "shitfuck",
    "clusterfuck",
    "dickweed",
    "shitfaced",
    "asskisser",
    "pissed off",
    "cunt nugget",
    "dumb motherfucker",
    "shit eating grin",
    "fucktard",
    "dick cheese",
    "cockholster",
    "assgoblin",
    "shitbag",
    "asslicker",
    "asscrack",
    "shitforbrains",
    "fuck nugget",
    "assmunch",
    "cocknugget",
    "cocknose",
    "douchecanoe",
    "cockwad",
    "fucknugget",
    "fuckwad",
    "dickhead"
];

export default async function vulgar(input) {
    const inputinput = input.toLowerCase(); // make sure check for all cases
    for (let swearWord of swearWords) { // check for all swear words
        if (inputinput.includes(swearWord)) {
            return true; // bad lang detected
        }
    }
    return false;
}
