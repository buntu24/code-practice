class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pointA: ListNode | null = headA;
  let pointB: ListNode | null = headB;
  while (pointA !== pointB) {
    pointA = pointA ? pointA.next : headB;
    pointB = pointB ? pointB.next : headA;
  }
  return pointA;
}

console.log(
  getIntersectionNode(
    new ListNode(
      4,
      new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5)))),
    ),
    new ListNode(
      5,
      new ListNode(
        6,
        new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5)))),
      ),
    ),
  ),
);
