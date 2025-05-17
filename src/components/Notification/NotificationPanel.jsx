import { useEffect, useState } from "react";

const dummyNotifications = [
  {
    message: "Your report on 'Collapsed Building' has been reviewed.",
    status: "Reviewed",
    reportId: "123",
    timestamp: "2025-05-16 10:30 AM",
  },
  {
    message: "Your early warning on 'Pothole at Ring Road' has been verified.",
    status: "Verified",
    reportId: "456",
    timestamp: "2025-05-15 2:45 PM",
  },
];

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace with fetch from database using userId
    setNotifications(dummyNotifications);
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-3">Notifications</h2>
      <ul className="space-y-3">
        {notifications.map((note, index) => (
          <li key={index} className="border p-3 rounded hover:bg-gray-50">
            <p className="text-sm">{note.message}</p>
            <p className="text-xs text-gray-500">{note.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
