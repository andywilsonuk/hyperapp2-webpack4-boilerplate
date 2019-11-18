import { h } from 'hyperapp';
import Description from './description';
import Counter from './counter';
import actions from '../actions';

export default (state) =>
    <div onload={actions.startup}>
        <Description />
        <Counter num={state.num} add={actions.add} sub={actions.sub} />
    </div>;
