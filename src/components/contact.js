import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends Component {
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                  <h2>CONTACT</h2>
                  <hr/>
                  <p style={{ width: '80%', margin: 'auto', paddingTop: '1em'}}>Please feel free to ask me any questions about the information 
                  presented in this portfolio or if you want to discuss about a job position that would suit me.
                  </p>

                  
                  <div>
                    <h2>Current Location:</h2>
                    <p>Braila, Romania</p>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=13pEdgEmWLDcagedReJw0rcRJS2wtzK8O"
                    title="Title"
                    width="400" height="400"
                    frameborder="0"
                    style={{ border:0 }}></iframe>
                  </div>  
                    <br />
                </Cell>

              <Cell col={6}>
                <div className="contact-list">
                  <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            (+40) 743366848
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            patricia.pirlog19@gmail.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                          paty.vhenan
                        </ListItemContent>
                    </ListItem>
                  </List>
                </div>
                  
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Contact;