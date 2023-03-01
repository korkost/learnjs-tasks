function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));


function aclean(array) {
    let map = new Map();
    for (let word of array) {
        let sorted = word
            .toLowerCase()
            .split("")
            .sort()
            .join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let anagrams = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(anagrams));


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);