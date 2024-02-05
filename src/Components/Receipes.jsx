import React from "react";
import Receipe1 from '../Resources/Images/receipe1.jpg';
import Receipe2 from '../Resources/Images/receipe2.jpg';
import Receipe3 from '../Resources/Images/receipe3.jpg';
import Receipe4 from '../Resources/Images/receipe4.jpg';
import Receipe5 from '../Resources/Images/receipe5.jpg';
import Receipe6 from '../Resources/Images/receipe6.jpg';

export function Receipes() {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={ Receipe1} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={ Receipe2} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={ Receipe3} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={ Receipe4} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={ Receipe5} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={ Receipe6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}