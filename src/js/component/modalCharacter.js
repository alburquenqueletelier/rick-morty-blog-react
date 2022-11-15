import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";

export const Modal = (props) => {
  const {store, actions} = useContext(Context);
  const {addOrRemove} = actions;
  const [favsState, setFavsState] = useState("");

  useEffect(()=>{
    if (store?.favs?.characters?.map(item=>item.id).includes(props?.data?.id)){
      setFavsState("danger");
    } else {
      setFavsState("success");
    }
  })
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <img className="img-fluid" src={props.data?.image} alt="character-image" />
          </div>
          <div className="modal-body">
            <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">{props.data?.name}</h1>
            {!!props.data && Object.keys(props?.data)?.map((key, index) => {
              if (key !== "origin" && key !== "location" && key !== "episode" && key !== "image" && key !== "url" && key !== "id" && key !== "name" && key !== "created") {
                return (
                  <div className="row" key={index}>
                    <div className="col-6 d-flex justify-content-center">{key + ":"}</div>
                    <div className="col-6 d-flex justify-content-center">{props.data[key] ? props.data[key] : props.data[key] == "" ? "-" : "Unknown"}</div>
                  </div>
                );
              } else if (key == "origin" || key == "location") {
                return (
                  <div className="row" key={index}>
                    <div className="col-6 d-flex justify-content-center">{key + ":"}</div>
                    <div className="col-6 d-flex justify-content-center">{props.data[key].name ? props.data[key].name : "Unknown"}</div>
                  </div>
                )
              } else if (key == "episode") {
                return(
                <div className="row" key={index}>
                    <div className="col-6 d-flex justify-content-center">{key + ":"}</div>
                    <div className="col-6 d-flex justify-content-center"><button onClick={()=>actions.setListModal("")} className="btn btn-outline-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Ver todos</button></div>
                </div>
                )
              }
            })

            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className={"btn btn-"+ favsState} onClick={()=>addOrRemove(props?.data, "character")}>{favsState == "danger" ? "Sacar de favoritos" : "Agregar a favoritos"}</button>
          </div>
        </div>
      </div>
    </div>
  )
};
