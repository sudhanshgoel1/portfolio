import React from "react";
import './StatCard.css';

interface StatCardProps {
    // icon: string; // Bootstrap icon class
    icon?: React.ReactNode| undefined;
    value: string;
    label: string;
    description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, description }) => {
    return (
        <div className="stat-card-wrapper">
            <div className="stat-card-modern">
                <div className="stat-icon">{icon}</div>
                <h4 className="stat-value">{value}</h4>
                <p className="stat-label">{label}</p>
                {description && <p className="stat-description">{description}</p>}
            </div>
        </div>
    );
};

export default StatCard;
