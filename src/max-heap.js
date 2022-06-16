class MaxHeap {
    /**
     * The `MaxHeap` constructor. You may provide an unsorted array of numbers
     * which it clones and then heapifies in linear time (faster than
     * individually pushing each number into an empty heap which takes
     * O(n*log(n)) time). If the `size` parameter is defined the length of the
     * heap is limited to `size`. If limited the heap will only keep the
     * smallest `size` count of the numbers provided and will only add new
     * numbers that are lesser than the maximum value. Note that limiting the
     * heap increases the time complexity to O((n-size)*log(n)).
     *
     * @param {number[]=} nums = `[]`
     *     If `nums` is type `number` the `size` parameter is set to `nums`
     *     value, and `nums` is set to `[]`.
     * @param {number=} size = `Infinity`
     *     Must be greater than or equal to zero.
     * @constructor
     */
    constructor(nums = [], size = Infinity) {
        if (typeof nums === 'number') {
            size = nums;
            nums = [];
        }
        if (size < 0) {
            size = 0;
        }
        this.size = size;
        this.heap = nums.slice();
        this.length = nums.length;
        for (let i = Math.floor((nums.length - 2) / 2); i >= 0; --i) {
    	    this.siftDown(i);
        }
        while (this.length > size) {
            this.pop();
        }
    }
    
    /**
     * @return {number}
     */
    getMax() {
        return this.length
            ? this.heap[0]
            : NaN;
    }
    
    /**
     * @return {number}
     */
    pop() {
        if (!this.length) {
            return NaN;
        }
        const heap = this.heap;
        const last = this.length - 1;
        const max = heap[0];
        --this.length;
        [ heap[0], heap[last] ] = [ heap[last], heap[0] ];
        heap.pop();
        this.siftDown(0);
        return max;
    }
    
    /**
     * @param {number} num
     * @return {void}
     */
    push(num) {
        if (this.length < this.size) {
    	    ++this.length;
    	    this.heap.push(num);
    	    this.siftUp(this.length - 1);
        } else if (num < this.heap[0]) {
    	    this.heap[0] = num;
    	    this.siftDown(0);
        }
    }
    
    /**
     * @param {number} i
     * @return {void}
     */
    siftDown(i) {
        const length = this.length;
        const heap = this.heap;
        let k = i * 2 + 1;
        while (k < length) {
    	if (k + 1 < length && heap[k + 1] > heap[k]) {
    	    ++k;
    	}
    	if (heap[i] >= heap[k]) {
    	    return;
    	}
    	[ heap[i], heap[k] ] = [ heap[k], heap[i] ];
    	i = k;
    	k = i * 2 + 1;
        }
    }
    
    /**
     * @param {number} i
     * @return {void}
     */
    siftUp(i) {
        const heap = this.heap;
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && heap[i] > heap[p]) {
    	    [ heap[i], heap[p] ] = [ heap[p], heap[i] ];
    	    i = p;
    	    p = Math.floor((i - 1) / 2);
        }
    }
}
