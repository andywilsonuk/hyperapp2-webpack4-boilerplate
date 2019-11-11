import { h } from 'hyperapp';
import Counter from './counter';
import actions from '../actions';

export default (state) =>
    <div>
        <Counter num={state.num} add={actions.add} sub={actions.sub} />
    </div>;
