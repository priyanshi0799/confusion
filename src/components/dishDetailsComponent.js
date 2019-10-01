import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishSelected extends Component{
    constructor(props){
        super(props);
    }
    render(){
    function renderComments(commentArray){
        return(
            commentArray.map((dishComments)=>{
                return(
                <div  key={dishComments.id}>
                        {dishComments.comment} <br></br>
                        --{dishComments.author} , {dishComments.date}
                </div>
                );
            }
            
        )
        );
    } 
        return(
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody> 
                
            </Card>
            </div>

            <div className="col-md-5 m-1">
                <h5>Comments</h5>
                <ul className="list-unstyled">
                    {renderComments(this.props.dish.comments)}
                </ul>
            </div>
            </div>
        )
    }
}


export default DishSelected;