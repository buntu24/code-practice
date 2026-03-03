"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
class Node {
    constructor(key, value) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}
class LRUCache {
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        if (capacity < 1)
            throw new Error('Capacity must be >= 1');
        this.capacity = capacity;
        this.map = new Map();
    }
    addToHead(node) {
        node.prev = null;
        node.next = this.head;
        if (this.head)
            this.head.prev = node;
        this.head = node;
        if (!this.tail)
            this.tail = node;
    }
    removeNode(node) {
        if (node.prev)
            node.prev.next = node.next;
        else
            this.head = node.next;
        if (node.next)
            node.next.prev = node.prev;
        else
            this.tail = node.prev;
        node.prev = null;
        node.next = null;
    }
    moveToHead(node) {
        if (this.head === node)
            return;
        this.removeNode(node);
        this.addToHead(node);
    }
    get(key) {
        const node = this.map.get(key);
        if (!node)
            return undefined;
        this.moveToHead(node);
        return node.value;
    }
    put(key, value) {
        const existing = this.map.get(key);
        if (existing) {
            existing.value = value;
            this.moveToHead(existing);
            return;
        }
        const node = new Node(key, value);
        this.addToHead(node);
        this.map.set(key, node);
        if (this.map.size > this.capacity) {
            // evict least recently used (tail)
            if (this.tail) {
                const tailKey = this.tail.key;
                this.removeNode(this.tail);
                this.map.delete(tailKey);
            }
        }
    }
    delete(key) {
        const node = this.map.get(key);
        if (!node)
            return false;
        this.removeNode(node);
        this.map.delete(key);
        return true;
    }
    get size() {
        return this.map.size;
    }
}
exports.LRUCache = LRUCache;
exports.default = LRUCache;
