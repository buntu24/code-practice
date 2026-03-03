"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lru_1 = require("./lru");
function runSample() {
    const cache = new lru_1.default(2);
    console.log('PUT 1 -> one');
    cache.put(1, 'one');
    console.log('PUT 2 -> two');
    cache.put(2, 'two');
    console.log('GET 1 (expected "one") ->', cache.get(1));
    console.log('PUT 3 -> three (evicts key 2)');
    cache.put(3, 'three');
    console.log('GET 2 (expected undefined) ->', cache.get(2));
    console.log('GET 3 (expected "three") ->', cache.get(3));
    console.log('PUT 4 -> four (evicts least recently used)');
    cache.put(4, 'four');
    console.log('GET 1 (expected undefined) ->', cache.get(1));
    console.log('GET 3 (expected "three" or undefined depending on usage) ->', cache.get(3));
    console.log('DELETE 3 (expected true) ->', cache.delete(3));
    console.log('GET 3 (expected undefined) ->', cache.get(3));
    console.log('Final size (expected 1) ->', cache.size);
}
runSample();
