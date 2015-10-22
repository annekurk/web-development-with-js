import React from 'react';

const Counter = React.createClass({


    render: function() {
        return (
            <div className="megalaskuri">
                {this.props.count}

            </div>
        );
    },

})

export default Counter;
