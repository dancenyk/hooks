const TemplateCharacter = ({name, image, title}) =>{
    return (
        <>
        {title}
        <p>{name}</p>
        <img src={image} alt="" />    
        </>
    )

}


export default TemplateCharacter