# Instruções para leitura do arquivo texto

## Ao solicitar exportação do arquivo txt através do endpoint http://localhost:8080/api/export serão exibidas as informações dos livros armazenados.

#### Cada linha representará a informação de um livro seguindo as seguintes regras:

1. Código do livro: 7 caracteres de 0000001 a 9999999, representando um número natural a partir de 1.
2. Título do livro: 30 caracteres livres.
3. Editora: 30 caracteres livres.
4. Author: 30 caracteres livres.
5. Quantidade: 4 caracteres, representando um número natural de 0001 a 9999.

 - As informações serão demonstradas restritivamente nesta ordem.
 - Caso o número de caracteres de um campo seja menor do que o especificado o mesmo receberá caracteres em branco após o preenchimento dos caracteres necessários.
