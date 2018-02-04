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

var c, python, java bool

var (
  ToBe   bool   = false
  MaxInt uint64 = 1<<64 - 1
)

const (
  // create huge number by shifting 1 bit left 100 places
  // aka binary number that is 1 followed by 100 zeroes
  BIG = 1 << 100
  // shift right another 99 places gives 1<<1, or 2
  SMALL = BIG >> 99
)

func needInt(x int) int { return x * 10 + 1 }
func needFloat(x float64) float64 {
  return x * 0.1
}

func def() {
  fmt.Println("counting")

  for i := 0; i < 10; i++ {
  	defer fmt.Println(i)
  }

	fmt.Println("done")
}

func main() {
  fmt.Printf("You have %g problems.\n",  math.Sqrt(16))
  fmt.Printf("Using the add function we get %d as the answer.\n", add(7, 20))
  a, b := swap("hello", "world")
  fmt.Println(a, b)
  fmt.Println(split(17))
  var i int
  fmt.Println(c, i, python, java)
  const f = "%T(%v)\n"
  fmt.Printf(f, ToBe, ToBe)
  fmt.Printf(f, MaxInt, MaxInt)

  fmt.Println(needInt(SMALL))
  fmt.Println(needFloat(SMALL))
  fmt.Println(needFloat(BIG))

  sum := 0
  for i := 0; i < 10; i++ {
    sum += i
  }
  fmt.Println(sum)
  def()
}
