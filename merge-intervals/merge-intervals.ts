function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    let [currentStart, currentEnd] = intervals[0];
    const result:number[][]=[];
    for(let i = 1; i < intervals.length; i++) {
        if(currentEnd < intervals[i][0]) {
           result.push([currentStart, currentEnd]);
           [currentStart, currentEnd] = intervals[i];
        } else {
            currentEnd = Math.max(currentStart, intervals[i][1]);
        }
    }
    result.push([currentStart, currentEnd]);
    return result;
};

merge([[1,3],[2,6],[8,10],[15,18]]); // [[1,6],[8,10],[15,18]]
merge([[1,4],[4,5]]); // [[1,5]]
merge([[1,4],[0,4]]); // [[0,4]]