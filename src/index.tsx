import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StrokedText } from 'stroked-text';

ReactDOM.render(<StrokedText fill='lightblue' stroke='purple' strokeWidth={10} style={{
    font: 'bold 40px sans-serif',
}}>Example text!</StrokedText>, document.getElementById('root'));