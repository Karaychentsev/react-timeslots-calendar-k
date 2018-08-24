import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import '../../styles/demo/main.scss';

import ReactTimeslotCalendar from './../react-timeslot-calendar.jsx';
import MarkdownSnippet from './../util/markdown-snippet.jsx';
/** Code snippets **/
import customTimeslotSnippet from './snippets/custom-timeslot.md';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialDate = moment([2017, 3, 24]);

  }
  render() {
    return (
      <div className = "app">
        <h1> React Timeslot Calendar </h1>
        { this._customTimeslotSnippetRender() }
      </div>
    );
  }

  _customTimeslotSnippetRender() {
    return (
      <div>
        <h3> Using Custom Timeslots and Callback </h3>
        <MarkdownSnippet snippet = { customTimeslotSnippet }/>
        <ReactTimeslotCalendar
          initialDate = { this.initialDate.format() }
          timeslots = { [
            ['09:00', '10:20'],
            ['10:30', '11:40'],
            ['18:23'],
          ] }
          timeslotProps = {{
            format: 'HH:mm',
            showFormat: 'HH:mm',
          }}
          maxTimeslots = { 3 }
          onSelectTimeslot = { (timeslots, lastSelected) => {
            console.log('All Timeslots:');
            console.log(timeslots);

            console.log('Last selected timeslot:');
            console.log(lastSelected);
          } }
        />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.getElementById('react-timeslot-calendar'));
