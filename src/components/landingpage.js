import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                          src="https://maxcdn.icons8.com/Share/icon/p1em/Logos/github1600.png"
                          alt="github"
                          className="github-img"
                        />

                        <div className="banner-text">
                            <h1>Computer Science Student</h1>
                            <hr/>

                            <p>Java | C | C++ | C# | Python | JavaScript | Bash | SQL</p>
                            
                            <div className="social-links"> 
                                {/* My Linkedin Profile */}
                                <a href="https://www.linkedin.com/in/patricia-pirlog/" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* My GitHub Profile */}
                                <a href="https://github.com/PatyPirlog" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;