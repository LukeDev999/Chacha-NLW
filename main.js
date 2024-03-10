// minuto 50:00 ou menos da aula 3 pra rever sobre variavel//
//variavel const e let const nao se mud,let se muda//
//pra pegar algo dentro do objeto,coloque o ponto//
//demtro de funcao nao precisa de let ou const//

const LinksSocialMedia = {
  //dentro do objeto sao dois pontos(:)
  //dentro do objeto salve com virgula apos algo
  //dentro do objeto no ultimo "item" nao precisara da virgula
  //nao pode usar espaco dps do const ou let (variavel)
  //camelCase,PascalCase,snake_case sao as formas permitidas pra se separar algo!//
  github: 'LukeDev999',
  youtube: 'Toicin_yT',
  instagram: 'Luke.ozk',
}
//function nomedafuncao(argumentos){
//code
//}
//para criar uma funcao,é obrigatorio colocar parenteses.//

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
  // aqui o const depende do for pra funcionar//
  // i = i + 1//
  // i++ //
}

changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
