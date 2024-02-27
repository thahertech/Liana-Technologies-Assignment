import React from "react";
import CompanyImg from './Assets/sisallontuotantoa.png';
import ProductsImg from './Assets/markkinoinninautomaatio.png';
import ContactImg from './Assets/yini.png';
import './Styles/ColumnImageBanner.css';

export default function ColumnBanner() {
    return (
        <div className="columnbanner-container">
            <div className="column">
                <div className="image-container">
                    <img src={CompanyImg} alt="CompanyColumnBanner" />
                    <h2>Company</h2>
                </div>
                <div className="columnbanner-content">
                    <h2>Company</h2>
                </div>
            </div>
            <div className="column">
                <div className="image-container">
                    <img src={ProductsImg} alt="ProductsColumnBanner" />
                </div>
                <div className="columnbanner-content">
                    <h2>Products</h2>
                </div>
            </div>
            <div className="column">
                <div className="image-container">
                    <img src={ContactImg} alt="ContactColumnBanner" />
                </div>
                <div className="columnbanner-content">
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
    );
}
