import mainImage from "../img/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.png";

function MainBackground() {
    return (
        <div className="main-bg"
             style={{ backgroundImage: "url(" + mainImage + ")"}}>
        </div>
    );
}
export default MainBackground;
