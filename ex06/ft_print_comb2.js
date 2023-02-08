function ft_print_comb2() {
    for (var i = 0; i < 100; i++) {
        for (var j = i + 1; j < 100; j++) {
            console.log(String(i).padStart(2, '0') + ' ' + String(j).padStart(2, '0'));
        }
    }
}
ft_print_comb2();