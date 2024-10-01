import { createContext, useState } from "react"; 

export const AppContext = createContext();

export const AppProvider = ({ children }) => { //componente filho, pois após os itens serem encapsulados dentro do context, todos se tornam "filhos" dele
    const [contador, setContador] = useState(0);
    const [itens, setItens] = useState([]);

    const adicionarItem = (item) => {
        const [nome, preco] = item.split('     '); // Divide o item em nome e preço
        const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.')); // Converte o preço para número

        setContador(prev => prev + 1);
        setItens(prev => [...prev, { nome, preco: precoNumerico }]); // Armazena o preço como objeto após a divisão
    };

    return (
        <AppContext.Provider value={{ contador, itens, adicionarItem }}>
            {children}
        </AppContext.Provider>
    );
};

