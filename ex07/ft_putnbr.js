function ft_putnbr(n) {
    let nbChiffres = n.toString().length;
    let max = Math.pow(10, nbChiffres) - 1;

    for (let i = 0; i <= max; i++) {
        let valeur = i.toString().padStart(nbChiffres, '0');
        console.log(valeur);
    }
}
ft_putnbr(42);

