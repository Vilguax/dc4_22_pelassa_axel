function ft_print_comb() {
    var n = 0;
    var h = 1;
    var t = 2;
    while (n < 7) {
        while (h < 8) {
            while (t < 10) {
                console.log(n.toString() + h.toString() + t.toString());
                t++;
            }
            h++;
            t = h + 1;
        }
        n++;
        h = n + 1;
        t = h + 1;
    }
}
ft_print_comb();