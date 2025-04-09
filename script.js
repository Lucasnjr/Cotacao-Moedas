const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

async function buscarCotacao() {
    const resposta = await fetch(URL);
    if (resposta.status === 200) {
        const result = await resposta.json();
        const USD = result.USDBRL;
        const EUR = result.EURBRL;
        const BTC = result.BTCBRL;

        const agora = new Date();
        const horaFormatada = agora.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dataFormatada = agora.toLocaleDateString('pt-BR'); // ex: 09/04/2025

        document.getElementById("conteudo").innerHTML = `
            <p style="font-size: 18px; margin: 15px 0;">💵 <strong>Dólar:</strong> 
                ${Number(USD.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style="font-size: 18px; margin: 15px 0;">💶 <strong>Euro:</strong> 
                ${Number(EUR.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style="font-size: 18px; margin: 15px 0;">₿ <strong>Bitcoin:</strong> 
                ${Number(BTC.bid).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <p style="margin-top: 120px; font-size: 14px; color: #333;">
                Atualizado em: ${dataFormatada} às ${horaFormatada}
            </p>
        `;
    } else {
        document.getElementById("conteudo").textContent = "Erro ao buscar cotações.";
    }
}
