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
        addTwo(one, two);
    }
}


public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode p = l1, q = l2, curr = dummyHead;
        int carry = 0;
        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
}

public twoSum(int[] nums) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int compl = target - nums[i];
        if (map.containsKey(compl)) {
            return new int[] { map.get(compl), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No solution found");
}

public int maxDepth(Treenode root) {

  if (root == null) return 0;
  int depth = 1,
      depL = 0,
      depR = 0;
  if (root.left != null) {
    depL = maxDepth(root.left);
  }
  if (root.right != null) {
    depR = maxDepth(root.left);
  }
  depth += depL > depR ? depL : depR;
  return depth;
}
