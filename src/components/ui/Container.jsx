import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className="w-full max-w-7xl px-6 mx-auto">{children}</div>
    )
}
Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    className: PropTypes.string,
};

export default Container