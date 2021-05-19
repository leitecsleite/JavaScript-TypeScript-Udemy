//Object.defineProperty 
/**
 
Sintaxe 

Object.defineProperty(obj, prop, descriptor)

Parâmetros
obj -> O objeto no qual será definida a propriedade. 
Prop -> o nome da propriedade que será definida ou modificada
descriptor -> o descritor para a propriedade que será definida ou modificada.



Ambos os descritores de dados e de assessor são objetos.Eles compartilham as seguintes chaves 
Obrigatórios: 

configurable: true, se é somente se o tipo deste descritor de propriedade ser alterada e se a propriedade
pode ser deletada do objeto correspondente.
valor padrão é false.


enumrable: true, se está propriedade aparece durante enumeração das propriedades no objeto
correspondente. 
valor padrão é false.

value: true, se o valor associado com a propriedade pode ser modificado
com um operado de atribuição. 
Valor padrão é false. 

tem ainda os get e setter. 
 */
const obj = {};

//declarando explicitamente

Object.defineProperties(obj, 'key', {
    enumrable: false, //não enumerável
    configurable: false, //não configurável; 
    writable: false, //não gravável
    value: 'static'
})


