/**
 * Logo Component
 * Standalone logo for use in both static onboarding and dynamic navigation
 */

import React from 'react';


interface LogoProps {
    onClick?: () => void;
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`no-lightboard flex items-center hover:opacity-80 transition-opacity ${className}`}
            disabled={!onClick}
        >
            <span className="text-xl font-bold tracking-tight text-mist whitespace-nowrap">HOME BUTLER CLUB</span>
        </button>
    );
};

export default Logo;
