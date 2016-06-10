import java.util.*;

public class merge {

    public static int[] mergeTwo(int[] one, int[] two) {

        int[] target = new int[one.length + two.length];

        int i = 0;
        int j = 0;
        int k = 0;

        while (i < one.length && j < two.length) {
            if (one[i].compareTo(two[j]) < 0) {
                target[k] = one[i];
                i++;
            } else {
                target[k] = two[j];
                j++;
            }
            k++;
        }

        System.arraycopy(one, i, target, k, one.length - i);
        System.arraycopy(two, j, target, k, two.length - j);

        return target;
    }

}
