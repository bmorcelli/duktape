function test() {
    var i;
    var x = 123.1;
    var y = 234.2;
    var t;

    for (i = 0; i < 1e7; i++) {
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
    }
}

test();
