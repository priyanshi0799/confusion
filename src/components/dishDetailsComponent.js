import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';

function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
           <CardImg top src={baseUrl + dish.image} alt={dish.name}></CardImg>
           <CardBody>
             <CardTitle>{dish.name}</CardTitle>
             <CardText>{dish.description}</CardText>
           </CardBody> 
        </Card>
        </div>
    )
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    
        constructor(props) {
            super(props);
            this.state= { 
                modal: false
            };
            this.toggle= this.toggle.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        toggle() { 
            this.setState( 
                {modal: !this.state.modal} 
            ); }
        
        handleSubmit(values){
            this.toggle();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }
    
        render() {
            return (
                <div>
                    <Button outline color="secondary" onClick= {this.toggle}> 
                        <span className="fa fa-sign-in"></span> 
                        Submit Comment
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                        <ModalHeader toggle= {this.toggle}> Submit Comment </ModalHeader>
                        <ModalBody>
                            
                            <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="name" md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text 
                                            model=".name" 
                                            id="name" 
                                            name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{ required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'}}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea 
                                            model=".comment" 
                                            id="comment" 
                                            name="comment"
                                            rows="4"
                                            className="form-control" 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size:12, offset: 0}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                            
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    } 
    

    function RenderComments({comments, addComment, dishId}){
        if(comments!=null){
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="List-unstyled">
                    {comments.map((comment)=>{
                return(
                    <li  key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
                })}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment}/>
            
        </div>
    );
    }
    else{
        return(
            <div></div>
        )
    }
}

    const DishDetail = (props)=>{
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Loading />
                        </div>
                    </div>
                </div>
            )
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else if(props.dish !=null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}></RenderDish>
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}></RenderComments>
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
export default DishDetail;
