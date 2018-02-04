#include <stdio.h>

int main() {
    printf("Here we go...");

    int flag = 0;
    for (int i = 0; i < 10; i++) {
      for (int j = 0; j < 10; j++) {
        printf("*\n");
      }
      printf("\n");
      flag++;
    }
    printf("________________");
}
