class Conta{
    constructor(nome, titular, cpf, senha,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.titular = titular;
        this.saldo = saldo;
        this.extrato = [];
    }

    criarConta(nome, cpf,senha){
        console.log(`Conta criada com sucesso! Nome: ${nome}, CPF: ${cpf}\n`);
    }

    depositar(valor){
        this.saldo += valor;
        this.extrato.push({ tipo: 'depósito', valor });
        console.log(`Depósito de R$${valor} realizado com sucesso!\n`);
    }

    sacar(valor){
    if(valor > this.saldo){
        console.log('Saldo insuficiente para realizar o saque.\n');
    } 
    
    else {
        this.saldo -= valor;
        this.extrato.push({ tipo: 'saque', valor });
        console.log(`Saque de R$${valor} realizado com sucesso!\n`);
        }
    }

    consultarSaldo(){
        return console.log(`Saldo: R$${this.saldo}`);
    }
}

const caixa = new Conta('João', 'Econômica', '12345678901', 'senha123', 0);

caixa.criarConta('João', '12345678901', 'senha123');
caixa.depositar(200);
caixa.sacar(300);
caixa.consultarSaldo();