import './Country.css'


function Country({name, image, continent}) {
    return (
        <div className={`containerA ${continent}`}>
            <img src={image} alt={"flag img"} className="flag" />
            <h3 className="name">{name}</h3>
            <p className="name">{continent}</p>        
        </div>
    )
}

export default Country
