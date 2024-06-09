function CardComponent({header, subHeader, img, text, link, linkText, position, bgColor}) {
    return (
    <div className= {`tile ${position} ${bgColor}`}>
        <h2>{header}</h2>
        <h3>{subHeader}</h3>
        <div className="img-parent">
        <img src={img} alt="tile-img"/>
        </div>
        <div className="text">
        {text}
        </div>
        <div className="link-parent">
        <a href={link} className="link">{ linkText}</a>
        </div>
    </div>
    )
}
export default CardComponent;
