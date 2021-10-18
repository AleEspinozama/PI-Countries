import './Pagination.css'

function Pagination({perPage, total, paginate, prevPag, nextPag, current}) {
    const pageNum= [];
    for(let i=1; i<=Math.ceil(total/perPage); i++){
        pageNum.push(i);
    }

    return (
        <div >
                <div className="pages">
                {current> 1 ?
                <button className="boton" 
                    onClick={()=> prevPag()}
                    >Prev
                </button>: ""
                }
                {pageNum.map(n=> {
                        return <button key={n} 
                        className={`boton ${n === current ? 'act' : ''}`}
                        onClick={()=>paginate(n)}
                        >{n}</button>
                })}
                {current<pageNum.length ?
                 <button className="boton"
                 onClick={()=> nextPag()}
                 >Next
                </button> : ""
                }
                </div>
                
        </div>
    )
}

export default Pagination
