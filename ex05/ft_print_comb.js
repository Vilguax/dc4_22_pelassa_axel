function ft_print_comb()
{
    var i = 0;
    var j = 1;
    var k = 2;
    while (i < 7)
    {
        while (j < 8)
        {
            while (k < 9)
            {
                console.log(i, j, k);
                k++;
            }
            j++;
            k = j + 1;
        }
        i++;
        j = i + 1;
        k = j + 1;
    }
}
ft_print_comb();