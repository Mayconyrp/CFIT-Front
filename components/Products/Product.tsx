//'use client'

import Link from "next/link";
import './styles.css'
import Image from "next/image";
import Button from "../Button/button";
import Img from "../../public/imglogincfit.png"
interface ProductProps {
  id: number; // Alterando para corresponder ao campo 'id' da API
  image: string;
  nomeServico: string; // Renomeando para corresponder a 'nomeServico'
  preco: string; // Alterando para corresponder a 'preco'
  descricao: string; // Mantendo como 'descricao'
  duracao: 30; // Mantendo como 'duracao'
  etapasProcedimento: string;
  recomendations: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({products}: Props) => {
  
  return <div className="card-grid">
    {
      products.map((item) => (
        <Link className="link" href={{pathname: "/agendamento"}}>
          <div className="card">
            <div className="card-image" >
              <Image 
                src={Img} 
                width={140} height={119} 
                alt="" 
              />
            </div>
            <div className="card-informations">
              <h3 className="card-title" >{item?.nomeServico}</h3>
              <p className="card-description" >{item?.d}</p>
              <p className="card-price">R${item?.preco}</p>
            </div>
            <Button label="Agendar" type="submit" variant="small" />
          </div>
        </Link>
      ))
    }
  </div>
}

export default Products;