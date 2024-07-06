const CustomIcon = ({ name, color }) => {

    return (
        <i className={`icon icon-${name}`} style={{ color: color }}></i>
    )

}

export default CustomIcon