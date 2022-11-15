import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";
import { Modal } from "../component/modalCharacter";
import { ModalList } from "../component/modalList";
import { EpisodeCard } from "../component/episodeCard";


export const Favs = () => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    return(
        <div className="container-fluid">
            <Modal data={character}/>
            {!!store?.listModal && <ModalList data={store.listModal} />}
            {!!character && <ModalList data={character.episode} />}
            {/* <ModalList data={store?.listModal ? store.listModal : character} /> */}
            <div className="row">
                <div className="col-6">
                    <h2 className="text-center">Personajes Favoritos</h2>
                    {(!!store?.favs && store.search == "" ) ?
                        !!store?.favs?.characters &&
                        store?.favs?.characters?.map((item, index)=>{
                            return <div className="col-12" key={index} onClick={()=>{setCharacter(item);actions.setListModal("")}}>
                            <CharacterCard {...item} />
                            </div>
                        })
                        : !!store.search ?
                        store?.favs.characters.filter(char => char.name == store.search).map((char) => {
                            return (
                                <div className="col-12" key={char.id} onClick={() => setCharacter(char)}>
                                    <CharacterCard {...char} />
                                </div>
                            )
                        })
                        : (
                            <div className="col-md-12 text-center">
                                <Loading />
                            </div>
                        )
                    }
                </div>
                <div className="col-6">
                    <h2 className="text-center">Episodios Favoritos</h2>
                    {(!!store?.favs && store.search == "" ) ?
                        !!store?.favs?.episodes &&
                        store?.favs?.episodes?.map((item, index)=>{
                            return <div className="col-12" key={index}>
                            <EpisodeCard {...item} />
                            </div>
                        })
                        : !!store.search ?
                        store?.favs.episodes.filter(item => item.name == store.search).map((item) => {
                            return (
                                <div className="col-12" key={item.id} onClick={() => setCharacter(item)}>
                                    <EpisodeCard data={item}/>
                                </div>
                            )
                        })
                        : (
                            <div className="col-md-12 text-center">
                                <Loading />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};