import React from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import profranchisingAPI from '../../api/products';

function RecipeCard({ props }) {
  const navigate = useNavigate();

  return props.map((item) => {
    const { name, image, price, id } = item;

    return (
      <div className='products' key={nanoid()}>
        <img src={image} alt={name} key={nanoid()} />
        <div>
          <h1 key={nanoid()}>{name}</h1>
          <p>Preço R${price}</p>
          <p>ID:{id}</p>
          <button
            onClick={() => {
              navigate('/editarreceita', { state: item });
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              profranchisingAPI.deleteProduct(id);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    );
  });
}

export default RecipeCard;
