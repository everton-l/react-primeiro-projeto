import React from 'react'

export default function AtividadeLista(props) {

    function prioridadeLabel(param) {
        switch(param) {
            case '1' : return "Baixa"
            case '2' : return "Moderada"
            case '3' : return "Alta"
            default : return "Indefinido"
        }
    }

    function prioridadeStyle(param) {
        switch(param) {
            case '1' : return "smile"
            case '2' : return "meh"
            case '3' : return "frown"
            default : return "Indefinido"
        }
    }

    function prioridadeColor(param){
        switch(param) {
            case '1' : return "success"
            case '2' : return "warning"
            case '3' : return "danger"
            default : return "Indefinido"
        }
    }

  return (
    
    <div className="card mb-2 shadow">
                <div className={"card-body border border-" + prioridadeColor(props.ativ.prioridade)}>
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title"><span className="badge bg-secondary me-1">{props.ativ.id}</span>- {props.ativ.titulo}</h5>
                    <h6>
                      Prioridade: 
                      <span className={'ms-1 text-' + prioridadeColor(props.ativ.prioridade)}>
                        <i className={"me-1 fa-regular fa-face-" + prioridadeStyle(props.ativ.prioridade)}></i>
                        {prioridadeLabel(props.ativ.prioridade)}
                      </span>
                    </h6>
                  </div>

                  <p className="card-text">{props.ativ.descricao}</p>
                  <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.editar(props.ativ.id)}>
                      <i className="fas fa-pen me-2"></i>
                      Editar
                    </button>

                    <button className='btn btn-sm btn-outline-danger' onClick={() => props.excluir(props.ativ.id)}>
                      <i className="fas fa-trash me-2"></i>
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
  )
}
