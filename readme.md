# [Formatador (PWA)](https://henriqf.github.io/pwa-formatador/)

### Membros do grupo:
<ul>
    <li>Henrique de Figueiredo Reinaldi
    <li>Marcelo Henrique Miyazaki
</ul>

Uma PWA (Progressive Web Application) simple que permite formatar pequenos trechos de texto rapidamente.<br>

## Modos de uso:

    inverter            -> inverte o texto...
    binário             -> traduz o texto para binário.
    texto pequeno       -> transforma o texto em superscript.
    morse               -> traduz o texto para morse.
    ponta cabeça        -> faz o texto ficar de ponta cabeça.
    demoniado           -> inefável.
    chave entre letras  -> insere uma chave entre os caracteres.
    dados               -> serve para gerar numeros aleatórios.
    contador            -> conta quantia de caracteres do texto.
    fato                -> te da um fato aleatório.
    

## Como instalar no Chrome:

<ol>
    <li>Abra o site da PWA (que é o titulo deste readme) no navegador.  
    <li>No canto superior direito, na barra de pesquisa, clique no ícone de instalação para instalar a PWA.
</ol>

## Funcionamento:

    pwa-formatador/
    ├── icons/
    ├── imagens/
    ├── mapas/
    ├── app.js
    ├── index.html
    ├── manifest.webmanifest
    ├── styles.css
    └── sw.js

`mapas` armazena arquivos .json com hashes usadas para formatações de substituição.<br>
`app.js` é o código que faz a extensão rodar.<br>
`index.html` e `styles.css` são a parte visual da extensão.<br>
`sw.js` e `manifest.webmanifest` são usado para fazer a PWA funcionar.<br>