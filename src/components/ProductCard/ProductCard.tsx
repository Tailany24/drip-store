import React, { useState } from "react";
import './ProductCard.css';
import Group1 from '../Logo/Group1.png';
import Group2 from '../Logo/Group2.png';
import Group3 from '../Logo/Group3.png';
import Group4 from '../Logo/Group4.png';
import Group5 from '../Logo/Group5.png';
import Avaliacao from '../Logo/avaliacao.png';
import Stars from '../Logo/Stars.png';


const Breadcrumb: React.FC = () => {
    return (
        <nav className="breadcrumb">
            <span> Home </span> / 
            <span> Produtos </span> / 
            <span> Tênis </span> /  
            <span> Nike </span> / 
            <span> Tênis Nike Revolution 6 Next Nature Masculino </span>
        </nav>
    );
};

const ProductCard: React.FC = () => {
    const thumbnailImages = [Group1, Group2, Group3, Group4, Group5];
    const [mainImageIndex, setMainImageIndex] = useState(0);

    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const sizes = [39, 40, 41, 42, 43];

    const [selectedColor, setSelectedColor] = useState<number | null>(null);

    const colors = [
        { id: 1, background: "#6FEEFF" },
        { id: 2, background: "#FF6969" },
        { id: 3, background: "#5E5E5E" },
        { id: 4, background: "#6D70B7" },
    ];

    const handleNextImage = () => {
        setMainImageIndex((prevIndex) => (prevIndex + 1) % thumbnailImages.length);
    };

    const handlePrevImage = () => {
        setMainImageIndex((prevIndex) => (prevIndex - 1 + thumbnailImages.length) % thumbnailImages.length);
    };

    return (
        
        
        <div className="product-card">
            <Breadcrumb />
            <div className="product-image-container">
                
                <div className="product-image">
                    <button className="arrow-button" onClick={handlePrevImage}>{"<"}</button>
                    <img src={thumbnailImages[mainImageIndex]} alt="Produto" />
                    <button className="arrow-button" onClick={handleNextImage}>{">"}</button>
                </div>
                <div className="thumbnail-gallery">
                    {thumbnailImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Miniatura ${index + 1}`}
                            className={`thumbnail-image ${index === mainImageIndex ? "selected" : ""}`}
                            onClick={() => setMainImageIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-info">
                <h1 className="product-title">Tênis Nike Revolution</h1>
                <h2 className="product-subtitle">6 Next Nature Masculino</h2>
                <p className="product-reference">Casual | Nike | REF:38416711</p>
                <div className="image-container">
                    <img src={Stars} alt="Estrelas" className="side-by-side" />
                    <img src={Avaliacao} alt="Avaliação" className="side-by-side" />
                </div>
                <span className="product-price">
                    <span className="current-price">R$ <span className="price-big">219</span>,00</span>
                    <span className="old-price">216,00</span>
                </span>

                <h3 className="product-description">Descrição do produto</h3>
                <p className="product-text">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <h4 className="size-number">Tamanho</h4>
                <div className="size-options">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`size-button ${selectedSize === size ? "selected" : ""}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                <h5 className="size-color">Tamanho</h5>

                <div className="color-options">
                    {colors.map((color) => (
                        <div
                            key={color.id}
                            className={`color-circle ${selectedColor === color.id ? "selected" : ""}`}
                            style={{ backgroundColor: color.background }}
                            onClick={() => setSelectedColor(color.id)}
                        ></div>
                    ))}
                </div>



                <button className="btn-comprar">Comprar</button>

            </div>
            
        </div>
       
    );
};

export default ProductCard;
