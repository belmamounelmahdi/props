import Photo from '../ME.jpg'
export default function Profile ({ name, bio, profession }) {
    const stylePhoto = {
        width: '250px',
        borderRadius: '15px'
    };
    const styleContent = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
    }
    const styleButton = {
        margin: '10px',
        backgroundColor: '#467EFD',
        border: '1px solid #467EFD',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer'
    }
    const handleName = () => {
        alert(`Voulez-vous vraiment contacter ${name}`)
    }
    return (
        <div style={styleContent}>
            <h3>je m'appelle {name}, {bio} et {profession} </h3>
            <img style={stylePhoto} src={Photo} alt="" />
            <button style={styleButton} onClick={handleName}>Contactez</button>
        </div>
    )
}