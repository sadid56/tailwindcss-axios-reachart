import PropTypes from 'prop-types';
const Link = ({route}) => {
    return ( 
        <li className="px-5"><a href={route.path}>{route.name}</a></li>
     );
}
 Link.PropTypes = {
    route: PropTypes.object
 }
export default Link;