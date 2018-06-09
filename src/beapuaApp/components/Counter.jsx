import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Counter extends PureComponent {
    static propTypes = {
        counter: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        const { counter, actions } = this.props;
        return (
            <div>
                <h2>count={counter.value}</h2>
                <button onClick={actions.increment}>増加</button>
                <button onClick={actions.decrement}>減少</button>
            </div>
        );
    }
}

export default Counter;