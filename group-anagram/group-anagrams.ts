function groupAnagrams(strs: string[]): string[][] {
    const map: Map<number, string[]> = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sum = strs[i].split("").reduce((a, b) => { return a + Number(b.charCodeAt(0)) }, 0);
        if (map.get(sum) != undefined) {
            map.get(sum).push(strs[i])
        } else {
            map.set(sum, [strs[i]])
        }
    }
    return [...map.values()];
};