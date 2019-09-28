import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventList from "./EventList";
import Sponsors from "./Sponsors";

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

  render() {
    let events = this.props.events.filter(s =>
      ["live", "started", "ended", "completed"].includes(s.status)
    );
    return (
      <div>
        {events.length ? (
          <EventList events={events} />
        ) : (
          "Check back soon for events"
        )}
        <Sponsors />
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
