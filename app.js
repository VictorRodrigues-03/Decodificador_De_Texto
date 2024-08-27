function encrypt() {
    let text = document.getElementById('Texto').value;

    // Verificação básica para garantir que o texto seja apenas letras minúsculas e sem acentos
    if (/[^a-z\s]/.test(text)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        return;
    }

    // As substituições das letras para a versão criptografada
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayOutput(encryptedText);
}

function decrypt() {
    let text = document.getElementById('Texto').value;

    // Verificação básica para garantir que o texto seja apenas letras minúsculas e sem acentos
    if (/[^a-z\s]/.test(text)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        return;
    }

    // As substituições das palavras criptografadas para as letras originais
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayOutput(decryptedText);
}

function copy() {
    // Seleciona o elemento que contém o texto
    let text = document.querySelector('.Resultado__Texto').textContent;

    // Cria um elemento temporário de texto
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;

    // Adiciona o elemento temporário ao corpo do documento
    document.body.appendChild(tempTextArea);

    // Seleciona o texto no elemento temporário
    tempTextArea.select();

    // Executa o comando de cópia
    document.execCommand('copy');

    // Remove o elemento temporário do documento
    document.body.removeChild(tempTextArea);

    // Notifica o usuário que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
}


function displayOutput(message) {
    const outputSection = document.getElementById('Texto__Encriptado');
    outputSection.innerHTML = `
        <section class="Pagina__Container__Direita" id="Texto__Encriptado__Filho">
            <p class="Resultado__Texto" id="Resultado__Texto">${message}</p>
            <button class="Botao_3" onclick="copy()">Copiar</button>
        </section>
    `;
    document.getElementById('Texto__Encriptado').style.justifyContent = 'space-between';
    document.getElementById('Texto__Encriptado__Filho').style.flexGrow = 1;
}
