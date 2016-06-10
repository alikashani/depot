import java.util.*;

public class mergeSort {

    public static int[] merge(int[] a, int[] b) {
        int[] target = new int[a.length + b.length];
        int i = 0, j = 0, k = 0;
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                target[k] = a[i];
                i++;
            } else {
                target[k] = b[j];
                j++;
            }
            k++;
        }
        System.arraycopy(a, i, target, k, a.length - i);
        System.arraycopy(b, j, target, k, b.length - j);
        return target;
    }

    public static int[] fancyMerge(int[] a, int[] b) {
        int[] answer = new int[a.length + b.length]
        int i = a.length - 1, j = b.length - 1, k = answer.length;
        while (k > 0)
            answer[--k] = (j < 0 || (i >= 0 && a[i] >= b[j])) ? a[i--] : b[j--];
    }

    public static void mergeSort(int[] list) {

        if (list.length <= 1) return list;

        int[] first = new int[list.length / 2];
        int[] secnd = new int[list.length - first.length];
        System.copyarray(list, 0, first, 0, first.length);
        System.copyarray(list, first.length, second, 0, second.length);

        mergeSort(first);
        mergeSort(secnd);
        merge(first, second, list);
        return list;
    }

    public static void main(String[] args) {
      System.out.println();
    }
}
