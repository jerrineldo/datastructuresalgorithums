/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    //head of the sum array 
    let newList = null;
    //node to traverse the sum array
    let temp = null;
    let totalsum = 0,carry = 0;
    
    while(l1!=null || l2!=null || carry != 0){
        totalsum = 0;
        
        if(l1!=null){
            totalsum += l1.val;
            l1 = l1.next;
        }
        
        if(l2!=null){
            totalsum += l2.val;
            l2 = l2.next;
        }
        
        totalsum += carry;
        let node = new ListNode(totalsum%10);
        
        if(temp === null ){
            temp = newList = node;
        }
        else {
            temp.next = node;
            temp = temp.next;
        }
        
        carry = Math.floor(totalsum/10);
        
        
    }
    
    return newList;
    
};  