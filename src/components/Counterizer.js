import React from 'react';

const Counterizer = React.createClass({


    render: function() {
        return (
            <div className="tussi">
                {this.props.count}

                <button onClick={this.props.incrementCounter}>
                MOAR!
                </button>
            </div>
        );
    },

})

export default Counterizer;
