import AdminData from "../Data/AdminPanel.json";

export const DashDetail = ({ type }) => {
    const entries = AdminData?.[type]?.entries || [];

    return (
        <div className="details">
            <h2>{AdminData[type]?.label}</h2>
            <hr />
            {entries.map((entry) => (
                <div className="card-detail" key={entry.id}>
                    <h4>{entry.name || entry.donorName || entry.receiver}</h4>
                    <p>{entry.email || entry.contact}</p>
                    <p>{entry.phone}</p>
                    <p>{entry.location}</p>
                    <p>{entry.item}</p>
                    <p>{entry.quantity}</p>
                    <p>{entry.status}</p>
                    <p>{entry.date}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};
