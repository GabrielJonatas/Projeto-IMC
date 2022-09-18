function escopo () {
    const form = document.querySelector('.form');

    function calculo(e) {
        e.preventDefault();
        const Ipeso = e.target.querySelector('.peso');
        const Ialtura = e.target.querySelector('.altura');
        const peso = Number(Ipeso.value);
        const altura = Number(Ialtura.value);

        if (!peso) {
            result(`Peso invalido.`, false);
            return
        }
        if (!altura) {
            result(`Altura invalida.`, false);
            return
        }

        const IMC = getImc(peso,altura);

        function getImc(peso,altura) {
            const imc = (peso/(altura**2)).toFixed(1);
            return imc
        }

        tipo(IMC);

        function tipo(IMC) {
            if (0 < IMC && IMC < 18.5) return result(`Seu IMC é ${IMC} (Abaixo do peso)`, true);
            if (IMC >= 18.5 && IMC <= 24.9) return result(`Seu IMC é ${IMC} (Peso normal)`, true);
            if (IMC >= 25 && IMC <= 29.9) return result(`Seu IMC é ${IMC} (Sobrepeso)`, true);
            if (IMC >= 30 && IMC <= 34.9) return result(`Seu IMC é ${IMC} (Obesidade de grau 1)`, true);
            if (IMC >= 35 && IMC <= 39.9) return result(`Seu IMC é ${IMC} (Obesidade de grau 2)`, true);
            if (IMC >= 40) return result(`Seu IMC é ${IMC} (Obesidade de grau 3)`, true);
        }
    }

    function criaP () {
        const p = document.createElement('p');
        return p;
    }

    function result (msg,eValido) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP ();
        if (eValido) {
            p.classList.add('resultadoValido');
            p.innerHTML = msg;
            resultado.appendChild(p);
        } else {
            p.classList.add('resultadoInvalido');
            p.innerHTML = msg;
            resultado.appendChild(p);
        }
    }

    form.addEventListener('submit', calculo);
}

escopo();