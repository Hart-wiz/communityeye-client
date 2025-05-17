import { useState } from "react";

const reports = [
  {
    title: "PowerSupply",
    type: "Limited Grid Access",
    lga: "Umuahia North",
    description: "The power supply in the community has been off for weeks...",
    location: { lat: 5.534, lng: 7.485 },
    mediaUrl: "https://via.placeholder.com/400x200", // replace with uploaded file URL
    date: "2025-05-16",
  },
  // ...more reports
];

const ReportsFeed = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Community Eye Reports</h2>
      <select
        className="border px-3 py-2 rounded mb-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Reports</option>
        <option value="main">Main Reports</option>
        <option value="early-warning">Early Warnings</option>
        <option value="missing-person">Missing Persons</option>
        <option value="wanted-person">Wanted Persons</option>
      </select>

      {reports.map((report, idx) => (
        <div key={idx} className="border rounded-md p-4 mb-6 shadow">
          <h3 className="text-lg font-semibold">
            {report.title} - {report.type}
          </h3>
          <p className="text-sm text-gray-500">
            {report.date} | {report.lga}
          </p>
          <p className="mt-2">{report.description}</p>
          {report.mediaUrl && (
            <img
              src={report.mediaUrl}
              alt="Evidence"
              className="mt-3 rounded-md"
            />
          )}
          <p className="text-xs mt-2 text-gray-600">
            Location: {report.location.lat}, {report.location.lng}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReportsFeed;
