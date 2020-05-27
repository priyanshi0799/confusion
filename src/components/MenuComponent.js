import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderMenuItem({dish, onClick}){
        return(
            <Card>   
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>  
        );
    }

    const Menu = (props)=>{
        const menu = props.dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });

        if(props.dishes.isLoading){
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
        else if(props.dishes.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        }
    }
export default Menu;

// import React, {Component} from 'react';
// import {Media,Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText} from 'reactstrap';

// class Menu extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             selected: null
//         };
//     }

//     onDishSelect(dish){
//         this.setState({
//             selected:dish
//         });
//     }

//     renderDish(dish){
//         if(dish!=null){
//             return(
//                 <Card>
//                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                    <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                    </CardBody> 
//                 </Card>
//             )
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     }

//     render(){
//         const menu=this.props.dishes.map((dish)=>{
//             return(
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick={()=>this.onDishSelect(dish)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                             <CardImgOverlay>
//                                 <CardTitle>{dish.name}</CardTitle>
//                             </CardImgOverlay>
//                     </Card>
//                 </div>
//             )
//         });
//         return(
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                     {this.renderDish(this.state.selected)}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Menu;