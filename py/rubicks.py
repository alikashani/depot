#!/usr/bin/python
# cloned from jklaw90 (Julian Lawrence)

class RubicksCube2x2:
    squares = 2

    def __init__(self):
        # self.sides = []
        # for i in range(6):
        #     sides.append(CubeFace(i,self.squares))
        # Perhaps slopier but easier to read
        self.front_face = CubeFace(0,2)
        self.left_face = CubeFace(1,2)
        self.right_face = CubeFace(2,2)
        self.top_face = CubeFace(3,2)
        self.bottom_face = CubeFace(4,2)
        self.back_face = CubeFace(5,2)

    ##### moves ######
    def rotate_right_up():
        self.right_face.rotate_right()


    def rotate_right_down():
        self.right_face.rotate_left()

    def rotate_left_up():
        pass

    def rotate_left_down():
        pass

    def rotate_top_right():
        tmp = self.front_face[0]
        self.front_face[0] = self.left_face[0]
        self.left_face[0] = self.back_face[0]
        self.back_face[0] = self.right_face[0]
        self.right_face[0] = tmp
        self.top_face.rotate_left()

    def rotate_top_left():
        tmp = self.front_face[0]
        self.front_face[0] = self.right_face[0]
        self.right_face[0] = self.back_face[0]
        self.back_face[0] = self.left_face[0]
        self.left_face[0] = tmp
        self.top_face.rotate_right()

    def rotate_bottom_right():
        self.bottom_face.rotate_right()

    def rotate_bottom_left():
        self.bottom_face.rotate_left()

    #def is_solved():


    def set_sides(sides=None):
        if sides:
            pass

class CubeFace:
    # red, green, blue, yellow, white, orange = range(6)
    def __init__(self, color, squares):
        self.face = [[color]*squares,[color]*squares]

    def is_one_color(self):
        color = self.face[0][0]
        for row in self.face:
            for single_square_color in row:
                if color is not single_square_color:
                    return False
        return True

    def rotate_right(self):
        single_tmp = self.face[0][0]
        self.face[0][0] = self.face[1][0]
        self.face[1][0] = self.face[1][1]
        self.face[1][1] = self.face[0][1]
        self.face[0][1] = single_tmp

    def rotate_left(self):
        single_tmp = self.face[0][0]
        self.face[0][0] = self.face[0][1]
        self.face[0][1] = self.face[1][1]
        self.face[1][1] = self.face[1][0]
        self.face[1][0] = single_tmp

    def __str__(self):
        resp = ""
        for row in self.face:
            resp += str(row.__str__()) + "\n"
        return resp


if __name__ == "__main__":
    print("work in progress")
    temp = CubeFace(1,2)
    print temp
    temp.face[0][1] = 12
    #print temp.one_color()
