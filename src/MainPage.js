import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

class ProjectPage extends Component {

  state = {
    expanded: null,
    flipped: false,
    bioContainer: null,
    portfolioContainer: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: panel
    });
  };

  componentDidMount() {
    // const portfolioTimeline = gsap.timeline()
    // portfolioTimeline.from("#portfolio-header", { autoalpha: 0.1 })
    //   .from("#cardswap", { xPercent: 105, autoalpha: 0, ease: "circ.out" }, ">-0.4") //">-0.7"
    //   .from("#reciperiot", { xPercent: -105, autoalpha: 0, ease: "circ.out" }, ">0.3")
    //   .from("#todo", { xPercent: 105, autoalpha: 0, ease: "circ.out" }, ">0.2")
    //   .from("#bookkeeper", { xPercent: -105, autoalpha: 0, ease: "circ.out" })

    // ScrollTrigger.create({
    //   animation: portfolioTimeline,
    //   trigger: "#portfolio-container",//this.state.portfolioContainer,
    //   start: "top +=60%",
    //   end: "top -=225%",
    //   // end: "bottom +=10%",
    //   scrub: true,
    //   markers: true
    // })

    ScrollTrigger.batch(".project-container", {
      //interval: 0.1, // time window (in seconds) for batching to occur. 
      onEnter: batch => gsap.to(batch, { opacity: 1, x: 0, overwrite: true }),
      onLeave: batch => gsap.set(batch, { opacity: 0, x: -100, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true })
    });

    gsap.to(this.state.bioContainer, {
      background: 'rgb(45, 45, 45)',
      scrollTrigger: {
        trigger: "#bio-container", //this.state.bioContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true
      },
    })

    gsap.to(this.state.portfolioContainer, {
      background: 'rgb(45, 45, 45)',
      scrollTrigger: {
        trigger: "#bio-container", //this.state.bioContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    })

    // gsap.from(".project-container", {
    //   xPercent: 105, autoalpha: 0, ease: "circ.out", 
    //   scrollTrigger: {
    //     // animation: portfolioTimeline,
    //     trigger: ".project-container", //this.state.bioContainer,
    //     start: "top bottom",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true,
    //   }
    // })

    //this.props.dispatch({type: 'GET_PROJECT_TAGS', payload: 1})
    //this.getPortfolio();
  }

  // getPortfolio = () => {
  //    this.props.dispatch({type: 'GET_PORTFOLIO'})
  // }

  getProjectTags = (id) => {
    return (event) => {
      this.props.dispatch({ type: 'GET_PROJECT_TAGS', payload: id })

    }
  }

  flip = (event) => {
    if (this.state.flipped) {
      document.getElementById("flip-note-inner").style.transform = "rotateY(360deg)"
      this.setState({ flipped: false })
    }
    else {
      document.getElementById("flip-note-inner").style.transform = "rotateY(180deg)"
      this.setState({ flipped: true })
    }
    console.log(event.target)
  }

  toAdminPage = () => {
    this.props.history.push('/admin');
  }

  render() {

    const { classes } = this.props

    return (
      <section id="">

        <div className="parallax-stpaul-main">
          <img className="myPic" src="images/malikg.png" alt="Picture of Malik Glass" />
          <h1 id="name-header">Malik Glass</h1>
        </div>

        <div className="parallax-stpaul-trans"></div>

        <div id="bio-container" ref={div => this.state.bioContainer = div}>
          <h1 id="bio-header">Bio</h1>
          <div id="flip-note" onClick={this.flip}>
            <div id="flip-note-inner">
              <div id="flip-note-front">
                <p id="greeting">Dear visitor,</p>
                <p>Welcome! My name is Malik.</p>
                <p>I am a software developer from Saint Paul, Minnesota.</p>
                <p>I won't force you to read my bio.</p>
                <p> Click this message if you care to know more.</p>
              </div>
              <div id="flip-note-back">
                <p className="note-back-header">Education</p>
                <ul>
                  <li>
                    <p className="note-back-body">Prime Digital Academy</p>
                  </li>
                  <li>
                    <p className="note-back-body">Augustana University: B.A. Philosophy</p>
                  </li>
                </ul>
                <p className="note-back-header">Work Experience</p>
                <ul>
                  <li>
                    <p className="note-back-body">Central Minnesota Educational Research & Development Council (current)</p>
                  </li>
                  <li>
                    <p className="note-back-body">Lutheran Social Services</p>
                  </li>
                  <li>
                    <p className="note-back-body">Cold Creator</p>
                  </li>
                  <li>
                    <p className="note-back-body">Conscious Youth Solutions</p>
                  </li>
                </ul>
                <p className="note-back-header">Interests</p>
                <ul>
                  <li>
                    <p className="note-back-body">History</p>
                  </li>
                  <li>
                    <p className="note-back-body">Economics</p>
                  </li>
                  <li>
                    <p className="note-back-body">Global affairs</p>
                  </li>
                  <li>
                    <p className="note-back-body">Writing</p>
                  </li>
                  <li>
                    <p className="note-back-body">Sports</p>
                  </li>
                  <li>
                    <p className="note-back-body">Anime/Manga</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio-container" ref={div => this.state.portfolioContainer = div}>
          <h1 id="portfolio-header">Portfolio</h1>
          <div id="cardswap" className="project-container">
            <img id="cardswap-img" className="project-img" src="https://firebasestorage.googleapis.com/v0/b/photo-storage-96fec.appspot.com/o/Screen%20Shot%202018-12-07%20at%206.04.45%20PM.png?alt=media&token=86a85405-b336-4e63-a9fa-b2f1256d1654" alt="" />
            <h2 id="cardswap-header" className="project-header">CardSwap</h2>
            <div id="cardswap-text" className="description">
              <text>
                This app is what I chose to create for my solo project at Prime Digital Academy.
                It was made to eventually be an extension of an already existing e-commerce site called CardsAwaySports.
                CardSwap is still in development, with messaging and a payment method being the major priorities in future releases.
                To explore the app, login with <span className="highlight">USERNAME: malik</span> and <span className="highlight">PASSWORD: malikg1</span> or register a new account.
              </text>
            </div>
            <div id="cardswap-links" className="project-links">
              <div className="link" >
                <a href="https://github.com/Malik-G/solo-project-cs" title="Github Link" rel="noopener noreferrer" target="_blank"><img id="cardswap-github" src="images/github-logo-gold.png" /></a>
              </div>
              <div className="link">
                <a href="https://young-sea-76614.herokuapp.com/#/home" title="CardSwap Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="cardswap-techs" className="project-techs">
              <p>JavaScript | Node | Express | React | Redux | Material-UI | PostgreSQL | Firebase | Heroku</p>
            </div>
          </div>
          <hr />
          <div id="reciperiot" className="project-container">
            <img id="reciperiot-img" className="project-img" src="https://firebasestorage.googleapis.com/v0/b/photo-storage-96fec.appspot.com/o/Screen%20Shot%202020-02-14%20at%205.44.20%20PM.png?alt=media&token=3192ddef-ce9c-4ac7-a6e4-5a72fc1cc5d2" alt="" />
            <h2 id="reciperiot-header" className="project-header">Recipe Riot</h2>
            <div id="reciperiot-text" className="description">
              <text>
                This is a proof of concept recipe app that pulls data from multiple APIs based on a keyword search.
                At the moment, the searches return a limited amount of results due to the costs of making requests to these different APIs.
                There are still a few features that I would like to implement - mainly pagination and some styling choices. When you visit the site, FEEL FREE TO INTERACT with any of the Sources.
              </text>
            </div>
            <div id="reciperiot-links" className="project-links">
              <div className="link" >
                <a href="https://github.com/Malik-G/recipe-site/" title="Github Link" rel="noopener noreferrer" target="_blank"><img id="cardswap-github" src="images/github-logo-gold.png" /></a>
              </div>
              <div className="link">
                <a href="https://powerful-sea-84064.herokuapp.com/" title="CardSwap Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="reciperiot-techs" className="project-techs">
              <p>JavaScript | Node | Express | React | Redux | Material-UI | Heroku</p>
            </div>
          </div>
          <hr />
          <div id="todo" className="project-container">
            <img id="todo-img" className="project-img" src="https://firebasestorage.googleapis.com/v0/b/photo-storage-96fec.appspot.com/o/to_do_list.png?alt=media&token=8452492b-ee09-42af-a980-c2018539edb1" alt="" />
            <h2 id="todo-header" className="project-header">To-Do App</h2>
            <div id="todo-text" className="description">
              <text>
                Here's a classic! This is my first fullstack to-do list. I know some say you shouldn't have a to-do app
                on your portfolio, but hey. User authentication and some UI upgrades will be the next features
                added to this project. Give it a try.
              </text>
            </div>
            <div id="todo-links" className="project-links">
              <div className="link" >
                <a href="https://github.com/Malik-G/to-do-list" title="Github Link" rel="noopener noreferrer" target="_blank"><img id="cardswap-github" src="images/github-logo-gold.png" /></a>
              </div>
              <div className="link">
                <a href="https://obscure-ridge-59300.herokuapp.com/" title="CardSwap Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="todo-techs" className="project-techs">
              <p>JavaScript | Node | Express | jQuery | Bootstrap | PostgreSQL | Heroku</p>
            </div>
          </div>
          <hr />
          <div id="bookkeeper" className="project-container">t
            <img id="bookkeeper-img" className="project-img" src="https://firebasestorage.googleapis.com/v0/b/photo-storage-96fec.appspot.com/o/book_list.png?alt=media&token=c89c195f-4180-4ec3-89b2-5ac62ea38d10" alt="" />
            <h2 id="bookkeeper-header" className="project-header">Book Keeper</h2>
            <div id="bookkeeper-text" className="description">
              <text>
                This is another one of my early fullstack CRUD projects. It is a app that allows users to enter basic information about a book. Upgrades to this app will include user authentication for personal book collections, connection to an API to search for books by keyword, and a mechanism for users to record notes on a given book.
              </text>
            </div>
            <div id="todo-links" className="project-links">
              <div className="link" >
                <a href="https://github.com/Malik-G/book-keeper-app" title="Github Link" rel="noopener noreferrer" target="_blank"><img id="cardswap-github" src="images/github-logo-gold.png" /></a>
              </div>
              <div className="link">
                <a href="https://thawing-sands-98647.herokuapp.com/" title="CardSwap Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="bookkeeper-techs" className="project-techs">
              <p>JavaScript | Node | Express | jQuery | Bootstrap | PostgreSQL | Heroku</p>
            </div>
          </div>
        </div>


        <div id="social-container">
          <h1 id="social-header">My Social</h1>
          <div id="social-links">
            <div className="social-link">
              <a id="github-link" href="https://github.com/Malik-G" rel="noopener noreferrer" target="_blank"><img src="images/github-logo-medium.png" />
              </a>
              <h3>GitHub</h3>
            </div>
            <div className="social-link">
              <a id="linkedin-link" href="https://www.linkedin.com/in/malik-glass-9b7533104/" rel="noopener noreferrer" target="_blank"><img className="social-link" src="images/linkedin-logo3.png" />
              </a>
              <h3>LinkedIn</h3>
            </div>
            <h4>EMAIL: malikglass11@gmail.com</h4>
          </div>
        </div>

      </section>
    )
  }
}

const mapReduxStateToProps = (reduxState) => {
  return { reduxState };
}

//put inside of an object to use withStyles object
// const myPic = {
//    borderRadius: 50,
//    height: 150,
//    width: 200,
//    marginTop: 40,
//    marginLeft: 'auto',
//    marginRight: 'auto'
// }


export default connect(mapReduxStateToProps)(ProjectPage);
//export default withRouter(connect(mapReduxStateToProps)(withStyles(styling)(ProjectPage)));

{/* <div className="parallax-reciperiot"></div>


  <div className="infoContainer">
    <h2 className="colorOrange">Description</h2>
  </div>
  <div className="infoContainer">
    <h2 className="colorSeaGreen">See Online</h2>
    <a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
    <a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
  </div>
  <div className="infoContainer">
    <h2 className="colorTomato">Technologies</h2>
  </div>

  <div className="parallax-rgb"></div>

  <div className="infoContainer">
    <h2 className="colorOrange">Description</h2>
  </div>
  <div className="infoContainer">
    <h2 className="colorSeaGreen">See Online</h2>
    <a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
    <a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
  </div>
  <div className="infoContainer">
    <h2 className="colorTomato">Technologies</h2>
  </div>

  <div className="parallax-todo"></div>

  <div className="infoContainer">
    <h2 className="colorOrange">Description</h2>

    <p>"".description}</p>
  </div>
  <div className="infoContainer">
    <h2 className="colorSeaGreen">See Online</h2>
    <a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
    <a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
  </div>
  <div className="infoContainer">
    <h2 className="colorTomato">Technologies</h2>
  </div>

  <div className="parallax-book"></div> */}