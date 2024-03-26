import "./award.css" ; 
const Award = ({title , image , text }) => {
    return (
        <div className="app__award flex__center">
            <div className="app__award-img ">
                <img src={image}  />
            </div>
            <div className="app__award-content ">
                <h1 className="p__cormorant">{title}</h1>
                <p className="p__opensans "> {text}</p>
            </div>
        </div>
    );
}
 
export default Award;