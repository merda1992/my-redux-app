import { connect } from "react-redux";
import { inc , dec, rnd} from "../action";

const Counter = ({counter, inc, dec, rnd}) =>{

    return(
        <div className="jumbotron">
            <h1 id="counter">{counter}</h1>
                <button onClick={dec} id="dec" className="btn btn-primary">DEC</button>
                <button onClick={inc} id="inc" className="btn btn-primary">INC</button>
                <button onClick={rnd} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value,
        smt: state.foo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            dispatch(rnd(value));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);