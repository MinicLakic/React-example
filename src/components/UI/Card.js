import './Card.css';

const Card = (props) => {
    // reusable wrapper component
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;