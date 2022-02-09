import {inc, dec, rnd} from "../action";
import { useSelector, useDispatch} from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(
        <div className="jumbotron">
            <h1 id="counter">{counter}</h1>
                <button onClick={() => dispatch(dec())} id="dec" className="btn btn-primary">DEC</button>
                <button onClick={() => dispatch(inc())} id="inc" className="btn btn-primary">INC</button>
                <button onClick={() => dispatch(rnd())} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

/* const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}
 */
/* 
const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    return {
        inc: inc,
        dec: dec,
        rnd: rnd
       }

}  */

/* export default connect(mapStateToProps, actions)(Counter); */
export default Counter;