import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MainPage.css';

gsap.registerPlugin(ScrollTrigger);

class MainPage extends Component {

  state = {
    expanded: null,
    flipped: false,
    bioContainer: null,
    portfolioContainer: null,
    socialContainer: null
  };

  componentDidMount() {
    ScrollTrigger.batch(".project-container", {
      // interval: 0.8, // time window (in seconds) for batching to occur. 
      onEnter: batch => gsap.fromTo(batch, { opacity: 0, x: 100 }, { opacity: 1, x: 0}),
      // onLeave: batch => gsap.set(batch, { opacity: 0, x: -100, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true })
    });

    gsap.fromTo(this.state.bioContainer, {background: 'white'}, {
      background: 'rgb(45, 45, 45)',
      scrollTrigger: {
        trigger: "#bio-container", //this.state.bioContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.fromTo(this.state.portfolioContainer, { background: 'white' }, {
      background: 'rgb(45, 45, 45)',
      scrollTrigger: {
        trigger: "#bio-container", //this.state.bioContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.to('#my-pic', {
      y: 300,
      x: 500,
      opacity: 0.2,
      scrollTrigger:{
        scrub:true,
        end: "top -=150%",
      }
    })

    gsap.from(["#social-header", "#social-links"], {
      opacity: 0,
      scrollTrigger: {
        trigger: "#social-container", //this.state.socialContainer,
        start: "top +=50%",
        end: "top top",
        scrub: true,
      },
    })
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

  render() {
    return (
      <section>

        <div className="parallax-stpaul-main">
          <img id="my-pic" src="images/malikg.png" alt="Malik Glass" />
          <h1 id="name-header">Malik Glass</h1>
        </div>

        <div className="parallax-stpaul-trans"> </div>

        <div className="sm-screen-header">
          <h1 id="name-header">Malik Glass</h1>
          <img id="my-pic-sm" src="images/malikg2.png" alt="Malik Glass" />
        </div>

        <div id="bio-container" ref={div => this.state.bioContainer = div}>
          <h1 id="bio-header">Bio</h1>
          <div id="flip-note" onClick={this.flip}>
            <div id="flip-note-inner">
              <div id="flip-note-front">
                <p id="greeting">Dear visitor,</p>
                <p>Welcome! My name is Malik.</p>
                <p>I am a software developer from Saint Paul, Minnesota.</p>
                <p> <span id="animated-word">Click this</span> message if you care to know more.</p>
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
                CardSwap is still in development, with messaging, a payment system, and better responsive design being the major priorities in future releases.
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
                <a href="https://powerful-sea-84064.herokuapp.com/" title="Recipe Riot Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
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
                <a href="https://obscure-ridge-59300.herokuapp.com/" title="To-Do App Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="todo-techs" className="project-techs">
              <p>JavaScript | Node | Express | jQuery | Bootstrap | PostgreSQL | Heroku</p>
            </div>
          </div>
          <hr />
          <div id="bookkeeper" className="project-container">
            <img id="bookkeeper-img" className="project-img" src="https://firebasestorage.googleapis.com/v0/b/photo-storage-96fec.appspot.com/o/book_list.png?alt=media&token=c89c195f-4180-4ec3-89b2-5ac62ea38d10" alt="" />
            <h2 id="bookkeeper-header" className="project-header">Book Keeper</h2>
            <div id="bookkeeper-text" className="description">
              <text>
                This is another one of my early fullstack CRUD projects. It is an app that allows users to enter basic information about a book. Upgrades to this app will include user authentication for personal book collections, connection to an API to search for books by keyword, and a mechanism for users to record notes on a given book.
              </text>
            </div>
            <div id="bookkeeper-links" className="project-links">
              <div className="link" >
                <a href="https://github.com/Malik-G/book-keeper-app" title="Github Link" rel="noopener noreferrer" target="_blank"><img id="cardswap-github" src="images/github-logo-gold.png" /></a>
              </div>
              <div className="link">
                <a href="https://thawing-sands-98647.herokuapp.com/" title="Book Keeper Website" rel="noopener noreferrer" target="_blank"><img id="cardswap-site" src="images/web-logo.png" /></a>
              </div>
            </div>
            <div id="bookkeeper-techs" className="project-techs">
              <p>JavaScript | Node | Express | jQuery | Bootstrap | PostgreSQL | Heroku</p>
            </div>
          </div>
        </div>

        <div id="social-container" ref={div => this.state.socialContainer = div}>
          <h1 id="social-header">My Social</h1>
          <div id="social-links">
            <div className="social-link">
              <a href="https://www.linkedin.com/in/malik-glass-9b7533104/" title="Linkedin Link" rel="noopener noreferrer" target="_blank"><img id="linkedin-link" src="images/linkedin-logo4.png" />
              </a>
              <h3>LinkedIn</h3>
            </div>
            <div className="social-link">
              <a href="https://github.com/Malik-G" title="GitHub Link" rel="noopener noreferrer" target="_blank"><img id="github-link" src="images/github-logo-medium.png" />
              </a>
              <h3>GitHub</h3>
            </div>
          </div>
          <div id="email">
            <h3>EMAIL: malikglass11@gmail.com</h3>
          </div>
        </div>

      </section>
    )
  }
}

export default withRouter(MainPage);