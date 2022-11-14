import React from 'react';

const CharacterCard = ({ id, name, status, species, type, image }) => {

    const style = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    }

    return (
        <div className="card mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." style={style} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Species: {species}</p>
                        <p className="card-text">Status: {status}</p>
                        <p className="card-text"><small className="text-muted">{type ? type : "S/I"}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;