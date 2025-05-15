import { useState } from "react";
import AdminData from "../Data/AdminPanel.json";
import { DashDetail } from "./Dash-info";

export const DashCard = () => {
    const [selectedType, setSelectedType] = useState("donor");

    return (
        <div className="dashboard-content">
            <h3 className="mb-3">Welcome to Admin Panel</h3>
            <p className="mb-4">
                This is where you can manage donors, receivers, donations, and see platform analytics.
            </p>
            <div className="row">
                {Object.entries(AdminData).map(([key, value]) => (
                    <div className="col-sm-10 col-md-10 col-lg-4 mb-4" key={key} onClick={() => setSelectedType(key)}>
                        <div className="admin-card h-100">
                            <p>{value.entries.length + Math.floor(Math.random() * 15 + 1)}</p>
                            <h2>{value.label}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <DashDetail type={selectedType} />
        </div>
    );
};
