class Node<K, V> {
	key: K
	value: V
	prev: Node<K, V> | null = null
	next: Node<K, V> | null = null

	constructor(key: K, value: V) {
		this.key = key
		this.value = value
	}
}

export class LRUCache<K, V> {
	private capacity: number
	private map: Map<K, Node<K, V>>
	private head: Node<K, V> | null = null
	private tail: Node<K, V> | null = null

	constructor(capacity: number) {
		if (capacity < 1) throw new Error('Capacity must be >= 1')
		this.capacity = capacity
		this.map = new Map()
	}

	private addToHead(node: Node<K, V>) {
		node.prev = null
		node.next = this.head
		if (this.head) this.head.prev = node
		this.head = node
		if (!this.tail) this.tail = node
	}

	private removeNode(node: Node<K, V>) {
		if (node.prev) node.prev.next = node.next
		else this.head = node.next

		if (node.next) node.next.prev = node.prev
		else this.tail = node.prev

		node.prev = null
		node.next = null
	}

	private moveToHead(node: Node<K, V>) {
		if (this.head === node) return
		this.removeNode(node)
		this.addToHead(node)
	}

	get(key: K): V | undefined {
		const node = this.map.get(key)
		if (!node) return undefined
		this.moveToHead(node)
		return node.value
	}

	put(key: K, value: V): void {
		const existing = this.map.get(key)
		if (existing) {
			existing.value = value
			this.moveToHead(existing)
			return
		}

		const node = new Node(key, value)
		this.addToHead(node)
		this.map.set(key, node)

		if (this.map.size > this.capacity) {
			// evict least recently used (tail)
			if (this.tail) {
				const tailKey = this.tail.key
				this.removeNode(this.tail)
				this.map.delete(tailKey)
			}
		}
	}

	delete(key: K): boolean {
		const node = this.map.get(key)
		if (!node) return false
		this.removeNode(node)
		this.map.delete(key)
		return true
	}

	get size(): number {
		return this.map.size
	}
}

export default LRUCache

