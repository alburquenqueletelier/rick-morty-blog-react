import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

export const EpisodeCard = ({ id, name, air_date, episode, characters, url, created }) => {
    const {store, actions} = useContext(Context);
    const {addOrRemove} = actions;
    const [episodeState, setEpisodeState] = useState("");
    
    useEffect(()=>{
        if (!store.favs.episodes.map(item=>item.id).includes(id)) setEpisodeState("success");
        else setEpisodeState("danger");
    },)

    return (
        <div className="card mb-3" style={{maxWidth:"540px"}}>
            <div className="card-body">
                <h5 className="card-title">{!!name && name}</h5>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">Emisión: </div>
                    <div className="col-6">{air_date}</div>
                    <div className="col-6 d-flex justify-content-center">Episodio: </div>
                    <div className="col-6">{episode}</div>
                    <div className="col-6 d-flex justify-content-center">Perosonajes: </div>
                    <div className="col-6 d-flex justify-content-center"><button onClick={()=>actions.setListModal(characters)} className="btn btn-outline-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Ver todos</button></div>
                </div>
            </div>
            <div className="card-footer"></div>
                <button type='button' className={'btn btn-outline-'+episodeState} onClick={()=>addOrRemove({ id, name, air_date, episode, characters, url, created }, "episode")}>{episodeState == "success" ? "Agregar a favoritos" : "Sacar de favoritos"}</button>
        </div>
    );
};
