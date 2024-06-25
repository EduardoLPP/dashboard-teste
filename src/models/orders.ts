export interface Order {
    id: number;
    data: string;
    valorTotal: number;
    status: string;
    statusId: number;
    cliente: Client;
    produtos: Product[];
    
}

export interface Client {
    nome: string;
    email: string;
    cpf: string;
}

export interface Product {
    nome: string;
    valor: number;
}