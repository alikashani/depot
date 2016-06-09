/**
 * Linked list practice
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *     }
 * }
 */

public class Solution {

    public ListNode addTwo(ListNode one, ListNode two) {

        // ListNode dummyHead = new ListNode(0),
        //          p = one,
        //          q = two,
        //          curr = dummyHead;
        //
        // int carry = 0;
        //
        // // check if one or both lists are null
        // (one == null) ? two : (two == null) ? one : null;
        //
        // while (p != null || q != null) {
        //     int x = (p != null) ? p.val : 0;
        //     int y = (q != null) ? q.val : 0;
        //     int sum = carry + x + y;
        //     carry = sum / 10;
        //
        //     curr.next = new ListNode(carry % 10);
        //     curr = curr.next;
        //
        //     if (p != null) p = p.next;
        //     if (q != null) q = q.next;
        // }
        //
        // if (carry > 0) {
        //     curr.next = new ListNode(carry);
        // }
        //
        // return dummyHead.next;

        ListNode dummyHead = new ListNode(0);
        ListNode p = one, q = two, curr = dummyHead;
        int carry = 0;

        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;
            int sum = carry + x + y;

            carry = sum / 10;
            curr.next = new ListNode(carry % 10);
            curr = curr.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }

        if (carry > 0) curr.next = new ListNode(carry);

        return dummyHead.next;


    }

    public static void main(String[] args) {
        ListNode one = new ListNode(2);
        ListNode two = new ListNode(3);


    }
}
