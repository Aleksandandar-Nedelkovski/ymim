import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Col,
  Button,
  InputGroup,
  FormControl, 
  Row,
  Label, 
  Input,
  FormGroup
} from "react-bootstrap";
import { events } from "../../actions";
import EventForm from "./event_form";
import "./index.css";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }
  componentDidMount() {
    this.props.fetchEvents();
  }
  selectForEdit = id => {
    let edit_event = this.props.events[id];
    this.setState({
      event: edit_event
    });
  };
  render() {
    return (
      <div>
        <h1>Current Events</h1>



        
        <Row>
          <Col>
      
          <EventForm event={this.state.event} />
     
          </Col>
        </Row>
          



      <Container>
        <Row>
        
          {this.props.events.map((event, id) => (

            <Col>
            <div className="event_container" key={`event_${event.id}`}>
              <img src={event.event_image} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="eventDisplayTime">Event date and time:</p>
              
              <p>{event.start_datetime}</p>
              <p>to</p>
              <p>{event.end_datetime}</p>
              
              <div className = "eventButtons">
              <button
                className="btn btn-light btn-edit"
                onClick={() => this.selectForEdit(id)}
              >
                Edit
              </button>
              <button
                onClick={() => this.props.deleteEvent(id)}
                className="btn btn-light btn-delete"
              >
                Delete
              </button>
              </div>
            </div>
            </Col>
          ))}
         
        
        </Row>
        </Container>
{/* 
        <EventForm event={this.state.event} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    },
    deleteEvent: id => {
      dispatch(events.deleteEvent(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);