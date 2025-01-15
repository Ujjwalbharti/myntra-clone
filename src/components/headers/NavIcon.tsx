import { AiOutlineUser } from "react-icons/ai";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

interface NavIconProps {
    type: 'profile' | 'wishlist' | 'bag';
}

const NavIcon: React.FC<NavIconProps> = ({ type }) => {
    const renderIcon = () => {
        switch (type) {
            case 'profile':
                return <AiOutlineUser className="m-1" />;
            case 'wishlist':
                return <FiHeart className="m-1" />;
            case 'bag':
                return <FiShoppingBag className="m-1" />;
            default:
                return null;
        }
    };

    const label = () => {
        switch (type) {
            case 'profile':
                return 'Profile';
            case 'wishlist':
                return 'Wishlist';
            case 'bag':
                return 'Bag';
            default:
                return '';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {renderIcon()}
            <span className="block text-xs">{label()}</span>
        </div>
    );
}

export default NavIcon;