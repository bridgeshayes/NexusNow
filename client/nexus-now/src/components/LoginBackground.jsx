import img from "../assets/node-bg.jpg"

export default function LoginBackground() {
    return (
        <div className="vh-100 hero-image" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}></div>
    )
}