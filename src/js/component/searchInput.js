import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const SearchInput = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="form-floating mb-3 mx-auto" style={{ width: '18rem' }}>
            <input type="text" className="form-control" list="browsers" name="browser" id="browser" placeholder="Nombre o episodio" onChange={(e) => actions.setSearch(e.target.value)} />
            <label htmlFor="browser">Nombre personaje o episodio</label>
            <datalist id="browsers">
                {window.location.href.includes('episodes') &&
                    !!store?.episodes &&
                        
                        store?.episodes?.results?.map((item, index) => {
                            return <option key={index} value={item.name} />
                        })

                }
                {window.location.href.includes('favs') &&
                    store?.favs?.characters.concat(store?.favs?.episodes).map((item,index)=>{
                        return <option key={index} value={item.name}/>
                    })
                }
                {!window.location.href.includes('favs', 'episodes') &&
                    store?.characters?.results?.map((item, index)=>{
                        return <option key={index} value={item.name}/>
                    })
                }
            </datalist>
        </div>
    );
};

