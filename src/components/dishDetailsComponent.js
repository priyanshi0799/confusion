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
                    --{dishComments.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(dishComments.date)))}
                </div>
                );
            }
        )
        );
    } 

    return(
        <div className="container">
            <div className="row">
                {renderDish(this.props.dish)}
            </div>
        </div>
    );

    function renderDish(dish){
        if(dish!=null){
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                   <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                   </CardBody> 
                </Card>
                </div>

                <div className="col-md-5 m-1">
                    <h5>Comments</h5>
                    {renderComments(dish.comments)}
                </div>
            </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
}
export default DishSelected;