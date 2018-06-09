import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Explore from '../components/Explore'
import { withRouter } from 'react-router-dom'
import { loadTodos, addTodo, removeTodo, toggleDone } from '../actions/loadtodos';

let inputValue;

class App extends Component{
	static propTypes = {
	    errorMessage: PropTypes.string,
	    todos: PropTypes.array,
	    dispatch: PropTypes.func.isRequired
	}
	constructor(props){
		super(props);
		var height = '100%';
		this.state = {
			height: height
		}
	}
	async componentWillMount(props){
		const { dispatch } = this.props
		dispatch(loadTodos());
	}
	componentDidMount(){
		this.setState({height: window.innerHeight});
	}
	handleDismissClick = e => {
		this.props.resetErrorMessage();
		e.preventDefault();
	}
	handleChange = nextValue => {
		inputValue = nextValue;
	}
	renderErrorMessage() {
		const { errorMessage } = this.props
		if (!errorMessage) {
		  return null
		}
		return (
		  <p style={{ backgroundColor: '#e99', padding: 10 }}>
		    <b>{errorMessage}</b>
		    {' '}
		    <button onClick={this.handleDismissClick}>
		      Dismiss
		    </button>
		  </p>
		)
	}
	addTodo(){
		if(inputValue && inputValue.length > 0){
			const { dispatch } = this.props
			dispatch(addTodo(inputValue));
		}

	}
	toggleDone(id){
		const { dispatch } = this.props;
		dispatch(toggleDone(id));
	}
	removeTodo(id){
		const { dispatch } = this.props;
		dispatch(removeTodo(id));
	}
	render() {
		var that = this;
		const { todos, inputValue } = that.props;
		if(todos && todos.length > 0){
			return (
				<div>
				    <main id="main_vid_wrapper" style={{height: that.state.height}}>
				    	<video autoPlay muted loop id="myVideo">
						  <source src="/vids/w.mp4" type="video/mp4" />
						</video>
					  <div id="main_text">
					  	<h1 className="text-center">codalyze</h1>
					  	<h4 className="text-center">a startup for the startups</h4>
					  </div>
					</main>
					<h1 className="text-center" style={{height: '150px', padding: '40px'}}>
						stats tell the stories
					</h1>
					<div className="container-fluid">
						<div className="row intro">
							<div className="col-md-5">
								<div className="float-right text-center" style={{width:'300px'}}>
									<h2>2</h2>
									<h4>succesful years</h4>
								</div>
							</div>
							<div className="col-md-2 text-center">
								<div className="text-center" >
									<h2>12</h2>
									<h4>awesome products</h4>
								</div>
							</div>
							<div className="col-md-5">
								<div className="float-left text-center" style={{width:'300px'}}>
									<h2>19</h2>
									<h4>techies</h4>
								</div>
							</div>
						</div>
					</div>
					<h5 className="text-center" style={{padding: '20px'}}>so far and counting ...</h5>
					
					<div className="container-fluid">
					<section className="what-we-do row" style={{ backgroundColor: '#5886C4 '}}>
						<div className="col-md-4" style={{padding: '80px'}}>
							<h3 className="text-right">what</h3>
							<h3 className="text-right">we</h3>
							<h3 className="text-right">do?</h3>
						</div>
						<div className="col-md-8">
							<div className="col-md-11" style={{backgroundColor: '#fff', height: '100%'}}>
								<div className="row" style={{height:'100%'}}>
								
								<div className="col-md-3 text-center" style={{display: 'table', padding: '12px',  height: '100%'}}>
								<div style={{display: 'table-cell', verticalAlign: 'middle'}}>	
									<div style={{fontSize:'2em', color:'#555'}}>
									  <i className="fas fa-paint-brush"></i>
									</div>
									<h5>UI/UX</h5>
									<h6>designs and flow</h6>
								</div>
								</div>

								<div className="col-md-3 text-center" style={{display: 'table', padding: '12px', height: '100%'}}>
								<div style={{display: 'table-cell', verticalAlign: 'middle'}}>	
									<div>
									  <i className="fas fa-desktop" style={{fontSize:'1.6em', color:'#555'}}></i>
									  &nbsp;
									  <i className="fas fa-mobile" style={{fontSize:'1em', color:'#555'}}></i>
									</div>
									<h5>Mobile and Web Applications</h5>
									<h6>web/android/iOS</h6>
								</div>
								</div>
								<div className="col-md-3 text-center" style={{display: 'table', padding: '12px', height: '100%'}}>
								<div style={{display: 'table-cell', verticalAlign: 'middle'}}>
									<div>
									  <i className="fab fa-cloudversify" style={{fontSize:'2.5em', color:'#555'}}></i>
									</div>
									<h5>Cloud Computing</h5>
									<h6>with AWS and Azure</h6>
								</div>
								</div>

								<div className="col-md-3 text-center" style={{display: 'table', padding: '12px', height: '100%'}}>
								<div style={{display: 'table-cell', verticalAlign: 'middle'}}>
									<div>
									  <i className="fas fa-robot" style={{fontSize:'2.5em', color:'#555'}}></i>
									</div>
									<h5>Chat Bots</h5>
									<h6>integration</h6>
								</div>
								</div>

								
								</div>
							</div>
							<div className="col-md-1" ></div>
						</div>
					</section>
					</div>

					<div className="container-fluid" style={{marginTop:'50px'}}>
						<div className="row">
							<div className="col-md-12 text-center">
							<h2 style={{fontWeight:600}}>why us?</h2>
							<h6>
								being a startup we know the importance of first mvp, tight deadlines, last minute changes, quick releases and anytime supports
							</h6>
							<h6>
								we work in small dedicated self managed tech teams who are techies, devops and qa
							</h6>
							<h6>
								we follow the best software practices to fit the right process and architecture
							</h6>
							<h6>
								we are techies at core who love working with emerging tools and hottest tech
							</h6>
							</div>
						</div>
					</div>

					<div className="container-fluid" style={{marginTop:'50px'}}>
						<div className="row">
							<div className="col-md-12 text-center">
							<h2 style={{fontWeight:600}}>few products</h2>
							</div>
						</div>
						<section className="what-we-do row" style={{ backgroundColor: '#e74a32', marginTop: '30px'}}>
							<div className="col-md-4" style={{padding: '50px'}}>
							<div style={{fontSize:'15em', color:'#555', position: 'relative', left: '320px', zIndex: '9', height: '310px'}}>
							<div style={{position: 'relative'}}>
								<img src="/img/bk.jpg" style={{position: 'absolute', width: '280px', zIndex: 9, top: '15px', left: '25px'}} />
							  	<i className="fas fa-desktop" style={{position: 'absolute'}}></i>
							</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="col-md-11" style={{backgroundColor: '#222', height: '100%', padding: '20px'}}>
								<div className="row" style={{height:'100%'}}>
									<h3 style={{width: '100%'}} className="text-center">
										<img style={{width: '150px'}} src="/img/logo.bk.png" />
									</h3>
									<h6 style={{padding: '0 120px 0 220px', color: '#eee'}} className="text-center">
										 betking from september 2014 to december 2016 was the biggest crowdfunded bitcoin gambling site on the market. in that short period it made 7,391 bitcoins in profit and had the biggest crowdfunded bankroll of 6,000 bitcoins.
									</h6>
								</div>
							</div>
							<div className="col-md-1" ></div>
						</div>
						</section>
					</div>

					<ul className="carousel-dots">
					    <li className="dot active" data-index="0">
					    	<i className="fas fa-circle"></i>
					    </li>
					    <li className="dot" data-index="1">
					    	<i className="fas fa-circle"></i>
					    </li>
					    <li className="dot" data-index="2">
					    	<i className="fas fa-circle"></i>
					    </li>
					    <li className="dot" data-index="3">
					    	<i className="fas fa-circle"></i>
					    </li>
					</ul>

					<div className="container-fluid" style={{marginTop:'50px'}}>
						<div className="row">
							<div className="col-md-12 text-center">
								<h2 style={{fontWeight:600}}>happy clients</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-2">
							<div style={{fontSize:'16em', color:'#ddd'}}>
							  <i className="fas fa-quote-left" style={{position: 'relative', left: '-100px', top: '-60px'}}></i>
							</div>
							</div>
							<div className="col-md-10">
								<div className="row">
								<div className="col-md-5 card-1" style={{width: '400px', backgroundColor: '#46cfb0', padding: '12px', position: 'relative', marginTop: '120px'}}>
									<div className="avatar" style={{backgroundColor: '#34bc9d', position: 'absolute', top: '-50px', padding: '5px'}}>
									<img src="https://www.codalyze.com/assets/img/bryce.jpg"/>
									</div>
									<h6 style={{color:'#fff'}}>
										Working with Naisheel and Codalyze has been a great experience. Communication has been great and he’s always been willing to go the extra mile to get things done the way we want them - even when there’s some kind of misunderstanding. We’ve worked with Naisheel for about two years now and we’ll continue to work together going forward.
									</h6>
									<div className="signature" style={{position: 'absolute', bottom: '-65px', right: '-18px', backgroundColor: '#ddd', padding: '10px'}}>
									<h6>bryan acton</h6>
									<h6>CTO, RadFrame</h6>
									</div>
								</div>

								<div className="col-md-4">
								<div className="card-1" style={{marginLeft: '20px', backgroundColor: '#ffcd69', padding: '12px', position: 'relative', marginTop: '180px'}}>
									<div className="avatar" style={{backgroundColor: '#ffcd69', position: 'absolute', top: '-50px', padding: '5px'}}>
									<img src="https://www.codalyze.com/assets/img/lucas.jpg"/>
									</div>
									<h6 style={{color:'#fff'}}>
										Naisheel knows his stuff, is both open to giving and receiving feedback, an collaborating on problems. Communicative and willing to both learn and use expertise. Awesome job!
									</h6>
									<div className="signature" style={{position: 'absolute', bottom: '-65px', right: '-18px', backgroundColor: '#ddd', padding: '10px'}}>
									<h6>Lucas K Allmon</h6>
									<h6>CTO, The Culture List</h6>
									</div>
								</div>
								</div>

								<div className="col-md-2">
								<div className="card-1" style={{marginLeft: '20px', backgroundColor: '#ed5565', padding: '12px', position: 'relative', marginTop: '120px'}}>
									<div className="avatar" style={{backgroundColor: '#ed5565', position: 'absolute', top: '-50px', padding: '5px'}}>
									<img src="https://www.codalyze.com/assets/img/melvyn.jpg"/>
									</div>
									<h6 style={{color:'#fff'}}>
										Great developers. Only ending this to proceed with more tasks. Looking forward to working with you again!
									</h6>
									<div className="signature" style={{position: 'absolute', bottom: '-65px', right: '-18px', backgroundColor: '#ddd', padding: '10px'}}>
									<h6>Melvin Kim</h6>
									<h6>Founder, Plan XYZ</h6>
									</div>
								</div>
								</div>

								</div>

							</div>
						</div>
					</div>					

					<div className="footer" style={{padding: '50px', backgroundColor: '#333'}}>
						<h6 className="text-center">
							<img style={{height:'24px'}} className="img-responsive" src="https://www.codalyze.com/assets/img/site-footer-logo.png" />
							<span style={{color: '#ddd'}}>Codalyze Tech Pvt. Ltd</span>
						</h6>
						<h3 className="text-center">
							<a href="http://www.codalyze.com">
								<div style={{fontSize:'1em', color:'#0077B5'}}>
								  <i className="fab fa-linkedin"></i>
								</div>
							</a>
						</h3>
					</div>

				  </div>
			)	
		}else{
			return null;
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	const todos = state.todos;
  	const errorMessage = state.errorMessage;
  	const inputValue = ownProps.location.pathname.substring(1);
	return {
		todos,
		errorMessage,
		inputValue	
	}
}
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
export default withRouter(connect(mapStateToProps)(App))