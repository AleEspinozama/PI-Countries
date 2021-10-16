
function Pagination({perPage, total, paginate, prevPag, nextPag, current}) {
    const pageNum= [];
    for(let i=1; i<=Math.ceil(total/perPage); i++){
        pageNum.push(i);
    }

    return (
        <div>
                {current> 1 ?
                <button className="boton" 
                    onClick={()=> prevPag()}
                    >Prev
                </button>: <h1></h1>
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
                </button> : <h1></h1>
                }
                
        </div>
    )
}

export default Pagination
