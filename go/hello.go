package main

import (
  "fmt"
  "math"
)

func add(x int, y int) int {
  return x + y
}

func swap(x, y string) (string, string) {
  return y, x
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
  fmt.Printf("You have %g problems.\n",  math.Sqrt(16))
  fmt.Printf("Using the add function we get %d as the answer.\n", add(7, 20))
  a, b := swap("hello", "world")
  fmt.Println(a, b)
  fmt.Println(split(17))
}
