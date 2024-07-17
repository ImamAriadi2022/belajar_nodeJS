console.log('hello world!');

const name = 'imam';
function nameSpace(name) {
    return `halo, nama saya ${name}`;
}

console.log(nameSpace(name));


let umur = 12;
function usia(umur){
    return `umur saya ${umur}`;
}

module.exports = usia;