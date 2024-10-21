
//função para cirar os dados do usuarios
function adicionar_LISTA(){
	let casa = document.querySelector("input[name='casa']").value;
	let bairro = document.querySelector("input[name='bairro']").value;
	let cidade = document.querySelector("input[name='cidade']").value;
	let area_casa = document.querySelector("input[name='area_casa']").value;
	var dadosUsuario = {
		residencia: casa,
		bairro:bairro,
		cidade:cidade,
		area_casa:area_casa
	};
	alert(`DADOS DO USUARIO
		NUMERO DA CASA :${dadosUsuario.residencia}
		BAIRRO DA CASA :${dadosUsuario.bairro}
		CIDADE DA CASA :${dadosUsuario.cidade}
		AREA DA CASA :${dadosUsuario.area_casa}m²`);
 	criar_LISTA(dadosUsuario);	
};
//função para criar a lista
function criar_LISTA(dados){
	var lista = document.querySelector('.message-body');
	var novoUsuario = document.createElement('div');
	novoUsuario.classList.add('usuario');
	novoUsuario.innerHTML = `
	<p class="has-text-black">RESIDENCIA DA CASA: ${dados.residencia}</p>
	<p class="has-text-black">BAIRRO: ${dados.bairro.toUpperCase()}</p>
	<p class="has-text-black">CIDADE: ${dados.cidade.toUpperCase()}</p>
	<p class="has-text-black">AREA DA CASA: ${dados.area_casa} m²</p>
	<hr class="has-background-black-bis">
	`;
	lista.appendChild(novoUsuario); 
}
//função para removver  o ultimo dados do usuario
function remover_LISTA(){
	var dadosLista = document.querySelector('.message-body');
	if(dadosLista.lastChild){
		dadosLista.removeChild(dadosLista.lastChild);
	}
}