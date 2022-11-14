import React from "react"

export const Modalepisodes = (props) => {

  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Lista de episodios</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <ul className="list-group list-group-numbered">
        {!!props.data && props.data?.map((item, index)=>{
            return <li key={index} className="list-group-item">{item}</li>
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


