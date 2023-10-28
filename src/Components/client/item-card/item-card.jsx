export default function ItemCard(props){

    return(
        <div className="shadow-lg rounded-5 ">
            <a href={props.href}>
                <div className="text-center">
                    <img className="img-fluid" alt={props.alt} src={props.src}  width="200px"/>
                </div>
                <div className="p-5">
                    <h3 className="text-center mb-2">{props.footer}</h3>
                </div>
            </a>
        </div>
    )

}