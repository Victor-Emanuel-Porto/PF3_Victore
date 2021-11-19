const calcular = document.getElementById('enviar');
function a() {

    const salario = parseFloat(document.getElementById('v').value);
    const juros = parseFloat(document.getElementById('j').value);
    const parcelas = parseInt(document.getElementById('p').value);
    const nome = document.getElementById('n').value;

    if (salario !== '' && juros !== '' && parcelas !== '')
    {

        const total = (salario)*(((1+juros/100)**parcelas)-1) / (juros/100).toFixed(2);

        alert( nome+ ", se você aplicar  R$" + salario+ ", à taxa de juros de "+juros+"% ao mês, durante "+parcelas+" meses, acumulará uma poupança de R$"+ total.toFixed(2));



    }
    else {
        alert("campos vazios");
    }








}
calcular.addEventListener('click', a);