# Recall

<h2> Como utilizar o github com o Unity </h2>
<p> <b> Importante: </b> Não mexer na mesma scene ao mesmo tempo com outra pessoa! </p>
<p> Desenvolver/colocar tudo que necessário dentro das pastas em Asseets </p>
<p> Caso você deseje fazer testes, scripts diferenciados ou qualquer outra coisas que não deva ir para o projeto final, vá ate Assets/testes-pessoais/pasta-com-seu-nome e adicione o que desejar. (Ela vai ser ignorada pelo git, então qualquer coisa que você fizer nela, ficará só para você </p>

<h2> Git workflow </h2>
<p> > Desenvolva sua parte no projeto usando o <b> develop </b> branch. </p>
<p> > Ao terminar, salve suas alterações para o branch de <b> testing </b> </p>
<p> > Caso esteja tudo ok, salve suas alterações no branch <b> master </b> </p>
<p> > Saia de qualquer branch para corrigir um bug utilzando o <b> bugfix </b> Lembre-se de salvar as alterações pro mesmo branch que você saiu! </p>

<h2> Branchs </h3>
<ul>
  <li>Develop</li>
  <p> É o branch onde você vai desenvolver o seu projeto, básicamente, a maior parte do tempo você ficará por aqui </p>
  
  <li>Testing</li>
  <p> Branch de teste, após terminar o que você estava fazendo em develop, caso deseje testar o que você fez, deve-se utilizar esse
  branch </p>
  
  <li>Bugfix</li>
  <p> Caso tenha algum bug em algum branch (normalmente o master) deve-se utilizar esse branch para fazer a correção </p>
  
  <li>Master</li>
  <p> Branch final, aqui só irá o projeto. <b> IMPORTANTE: </b> Só pode colocar as alterações nesse branch caso tenha certeza que está pronto (deploy de uma versão estável) </p> 
</ul>

<h2> Links uteis </h2>

<p><a href="https://git-scm.com/book/pt-br/v1/Primeiros-passos-No%C3%A7%C3%B5es-B%C3%A1sicas-de-Git">Noções de git</a></p>
<p><a href="https://git-scm.com/doc">Documentação do git</a></p>
<p><a href="http://nvie.com/posts/a-successful-git-branching-model/">Modelo de workflow do Git</a></p>
