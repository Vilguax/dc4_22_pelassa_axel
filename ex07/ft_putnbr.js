function ft_putnbr(nb, param = "") {
    if (nb.length == 0) {
      console.log(param);
    } else {
      for (let i = 0; i < nb.length; i++) {
        ft_putnbr(nb.slice(0, i) + nb.slice(i + 1), param + nb[i]);
      }
    }
}

ft_putnbr("234");