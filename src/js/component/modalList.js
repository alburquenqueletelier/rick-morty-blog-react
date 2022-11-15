import React, { useContext } from "react"
import { Context } from "../store/appContext";

export const ModalList = (props) => {
  const { store } = useContext(Context);

  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">{props?.data && props?.data[0]?.includes('character') ? "Lista de personajes" : "Lista de capitulos"}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul className="list-group list-group-numbered">
              {!!props.data && props.data?.map((item, index) => {
                return <li key={index} className="list-group-item"><a target="blank" href={item}>{item}</a></li>
              })}

            </ul>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal">Volver</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

  );
};


