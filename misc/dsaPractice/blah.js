// ES6

var a = [];
a[5] = 'Wtf';

for (each in a) {
  console.log(each)
}

console.log(a);

for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

function createNestingGround() {
    // create the polygon using the builder class
    nestingGroundPolygonBuilder.addPointXY(-2.643077012566659, 56.077125346044475);
    nestingGroundPolygonBuilder.addPointXY(-2.6428195210159444, 56.07717324600376);
    nestingGroundPolygonBuilder.addPointXY(-2.6425405718360033, 56.07774804087097);
    nestingGroundPolygonBuilder.addPointXY(-2.6427122328698127, 56.077927662508635);
    nestingGroundPolygonBuilder.addPointXY(-2.642454741319098, 56.07829887790651);
    nestingGroundPolygonBuilder.addPointXY(-2.641853927700763, 56.078526395253725);
    nestingGroundPolygonBuilder.addPointXY(-2.6409741649024867, 56.078801809192434);
    nestingGroundPolygonBuilder.addPointXY(-2.6399871139580795, 56.07881378366685);
    nestingGroundPolygonBuilder.addPointXY(-2.6394077579689705, 56.07908919555142);
    nestingGroundPolygonBuilder.addPointXY(-2.638764029092183, 56.07917301616904);
    nestingGroundPolygonBuilder.addPointXY(-2.638485079912242, 56.07896945149566);
    nestingGroundPolygonBuilder.addPointXY(-2.638570910429147, 56.078203080726844);
    nestingGroundPolygonBuilder.addPointXY(-2.63878548672141, 56.077568418396);
    nestingGroundPolygonBuilder.addPointXY(-2.6391931816767085, 56.077197195961084);
    nestingGroundPolygonBuilder.addPointXY(-2.6399441986996273, 56.07675411934114);
    nestingGroundPolygonBuilder.addPointXY(-2.6406523004640934, 56.076730169108444);
    nestingGroundPolygonBuilder.addPointXY(-2.6406737580933193, 56.07632301287509);
    nestingGroundPolygonBuilder.addPointXY(-2.6401802326211157, 56.075999679860494);
    nestingGroundPolygonBuilder.addPointXY(-2.6402446055087943, 56.075844000034046);
    nestingGroundPolygonBuilder.addPointXY(-2.640416266542604, 56.07578412301025);
    nestingGroundPolygonBuilder.addPointXY(-2.6408883343855822, 56.075808073830935);
    nestingGroundPolygonBuilder.addPointXY(-2.6417680971838577, 56.076239186057734);
    nestingGroundPolygonBuilder.addPointXY(-2.642197249768383, 56.076251161328514);
    nestingGroundPolygonBuilder.addPointXY(-2.6428409786451708, 56.07661041772168);
    nestingGroundPolygonBuilder.addPointXY(-2.643077012566659, 56.077125346044475);

    return nestingGroundPolygonBuilder.geometry;
}


function reallyCreateNestingGround() {
    var path = [
        [-2.643077012566659,  56.077125346044475],
        [-2.6428195210159444, 56.07717324600376],
        [-2.6425405718360033, 56.07774804087097],
        [-2.6427122328698127, 56.077927662508635],
        [-2.642454741319098,  56.07829887790651],
        [-2.641853927700763,  56.078526395253725],
        [-2.6409741649024867, 56.078801809192434],
        [-2.6399871139580795, 56.07881378366685],
        [-2.6394077579689705, 56.07908919555142],
        [-2.638764029092183,  56.07917301616904],
        [-2.638485079912242,  56.07896945149566],
        [-2.638570910429147,  56.078203080726844],
        [-2.63878548672141,   56.077568418396],
        [-2.6391931816767085, 56.077197195961084],
        [-2.6399441986996273, 56.07675411934114],
        [-2.6406523004640934, 56.076730169108444],
        [-2.6406737580933193, 56.07632301287509],
        [-2.6401802326211157, 56.075999679860494],
        [-2.6402446055087943, 56.075844000034046],
        [-2.640416266542604,  56.07578412301025],
        [-2.6408883343855822, 56.075808073830935],
        [-2.6417680971838577, 56.076239186057734],
        [-2.642197249768383,  56.076251161328514],
        [-2.6428409786451708, 56.07661041772168],
        [-2.643077012566659,  56.077125346044475],
    ];

    for (var i = 0; i < path.length; i++) {
        nestingGroundPolygonBuilder.addPointXY(...path[i]);
    }

    return nestingGroundPolygonBuilder.geometry;
}
