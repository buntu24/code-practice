function findKRotation(arr: number[], n: number): number {
    // We basically find index of minimum
    // element
    let min: number = arr[0];
    let minIndex: number = 0;

    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

// Driver Code
const arr: number[] = [15, 18, 2, 3, 6, 12];
const n: number = arr.length;

console.log(findKRotation(arr, n));