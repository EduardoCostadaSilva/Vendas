import React, { useState, useEffect } from "react";
import { fetchMenuItems } from "../services/api";
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error("Erro ao carregar itens do menu:", error);
      }
    };

    loadMenuItems();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {" "}
        {menuItems.map((data) => (
          <li key={data.id}>
            {data.nome} - R$ {data.valor}
          </li>
        ))}
      </ul>
      {/*caso queira ver os pedidos é só ir na api.js e trocar a URL de "/produtos" para "/pedidos,
      em data.nome trocar para data.hora, data.valor para data.status. terá o estatus 1,2 e 3. Onde 1
      "anotado", 2 é "sendo feito" e 3 é "pedido concluido "*/}
      {/*Humilde demonstração de como cosumir um dos serviços da api da lanchonete.*/}
    </div>
  );
};
export default Menu;
