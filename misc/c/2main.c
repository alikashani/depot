#include <stdio.h>

int main() {
	//
	// Let's get this shit up
	//
	printf("Hello, World!\n");

	//
	// Loop thru and push ints to array
	//
	int arr[200];
	for (int i = 0; i < 20; i++) {
		// printf("%d\n", i);
		arr[i] = i;
	}

	// Output array we constructed
	printf("\n\nArray is as follows:\n");
	// printf(sizeof(arr));
		// for (int k = 0; k < ( sizeof(arr) / sizeof(foo[0]) ); k++) {
		// 	printf("%d", arr[k]);
		// }
	printf("\n");

	//
	// Decrement
	//
	int orange = 500,
		half;
	while (orange--) {
		half = orange / 2;
		printf("%d, ", half*half);
	}

	//
	// Bitwise operation
	//
	int a = 101 & 1001,
			bit = 01 | 10;
	printf("\n\nValue of bitwise operation: %d\n", a);
	printf("Value of other bitwise: %d\n", bit);

	return 0;
}
