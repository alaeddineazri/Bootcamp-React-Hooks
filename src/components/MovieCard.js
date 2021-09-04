import {Card} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
    return (

        <div >
            
            <Card className ="box" style={{ width: "400px" ,height:"700px",marginLeft :"30px" ,marginBottom :"30px" ,transition: "1s"}} >
                <Card.Img  style={{height:"450px" }} variant="top" src={movie.Image} />
                <Card.Body>
                <Card.Title   style={{ color: '#FF8C00', fontWeight:'bold' }}>{movie.title} </Card.Title>
                    <StarRatingComponent value={ movie.rate } />
                    <Card.Text>
                    {movie.description}
                    </Card.Text>
                </Card.Body>
            </Card> 

        </div>
    )
}

export default MovieCard













