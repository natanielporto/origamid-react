import React, { useState, useEffect, useContext } from "react";
import Product from "./Components/Product5/Product";
import { GlobalItems } from "./Components/GlobalContext";

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

const App = () => {
  return (
    <GlobalItems>
      <Product />
    </GlobalItems>
  );
};

export default App;
