import { useState } from "react";

const challengesData = {
  PowerSupply: {
    Challenges: [
      "Limited Grid Access",
      "Unreliable and Expensive Energy",
      "Dependence on Traditional Energy Source like Firewood",
      "Reliability Issues",
      "Regulatory and Policy Issues",
    ],
  },
  RoadsAndTransport: {
    Challenges: [
      "Potholes and Erosion",
      "Lack of Road Maintenance",
      "Inadequate Transport Services",
      "Poor Traffic Management",
      "Unsafe Road Conditions",
    ],
  },
  Healthcare: {
    Challenges: [
      "Lack of Medical Facilities",
      "Shortage of Health Workers",
      "Inaccessibility in Rural Areas",
      "Expired or Fake Drugs",
      "Overcrowded Hospitals",
    ],
  },
  Education: {
    Challenges: [
      "Dilapidated School Structures",
      "Shortage of Teachers",
      "Lack of Learning Materials",
      "Unavailability of Inclusive Education",
      "Poor Sanitation in Schools",
    ],
  },
  WaterAndSanitation: {
    Challenges: [
      "Lack of Clean Drinking Water",
      "Broken Boreholes",
      "Poor Drainage Systems",
      "Open Defecation",
      "Flooding and Erosion",
    ],
  },
  WasteManagement: {
    Challenges: [
      "Improper Waste Disposal",
      "Lack of Waste Collection Services",
      "Burning of Waste",
      "Clogged Drainages",
      "No Recycling Facilities",
    ],
  },
  Security: {
    Challenges: [
      "Theft and Burglary",
      "Lack of Police Presence",
      "Vandalism",
      "Cultism and Gang Activities",
      "Poor Street Lighting",
    ],
  },
  Housing: {
    Challenges: [
      "Overcrowded Living Conditions",
      "Lack of Affordable Housing",
      "Poor Building Standards",
      "Flood-Prone Homes",
      "Illegal Structures",
    ],
  },
  Agriculture: {
    Challenges: [
      "Lack of Access to Markets",
      "Poor Storage Facilities",
      "High Cost of Inputs",
      "Inadequate Extension Services",
      "Farmland Encroachment",
    ],
  },
  Environment: {
    Challenges: [
      "Illegal Deforestation",
      "Air and Water Pollution",
      "Noise Pollution",
      "Unregulated Mining",
      "Climate Change Impacts",
    ],
  },
  DigitalConnectivity: {
    Challenges: [
      "Lack of Internet Access",
      "Poor Mobile Network",
      "Digital Illiteracy",
      "High Data Costs",
      "Inadequate ICT Infrastructure",
    ],
  },
  PublicService: {
    Challenges: [
      "Bribery and Corruption",
      "Poor Customer Service",
      "Delays in Service Delivery",
      "Lack of Transparency",
      "Inaccessible Offices",
    ],
  },
  YouthAndEmployment: {
    Challenges: [
      "High Youth Unemployment",
      "Lack of Skill Acquisition Centers",
      "Job Scams",
      "No Job Fairs or Networking Events",
      "Gender and Disability Discrimination",
    ],
  },
  SocialWelfare: {
    Challenges: [
      "Neglect of the Elderly and Disabled",
      "No Access to Social Grants",
      "Lack of Support for Vulnerable Families",
      "Child Abuse and Neglect",
      "No Emergency Shelters",
    ],
  },
  MarketAndTrade: {
    Challenges: [
      "Poor Market Infrastructure",
      "Lack of Sanitation in Markets",
      "Illegal Levies on Traders",
      "No Waste Disposal in Market Areas",
      "Insecurity in Marketplaces",
    ],
  },
};

const ReportForm = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [projectTypeOptions, setProjectTypeOptions] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const [lga, setLga] = useState("");
  const [address, setAddress] = useState("");
  const [ward, setWard] = useState("");
  const [contractor, setContractor] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setSelectedTitle(value);
    setProjectTypeOptions(challengesData[value]?.Challenges || []);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    } else {
      alert("Geolocation not supported.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category: "main",
      title: selectedTitle,
      type: selectedType,
      lga,
      address,
      ward,
      contractor,
      description,
      contact,
      location,
    };

    try {
      const res = await fetch("http://localhost:5000/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Report submitted successfully!");
      } else {
        alert("Error submitting report.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Could not connect to server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">
        Report a Failed Project
      </h2>

      <select
        onChange={handleTitleChange}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">Select Report Title</option>
        {Object.keys(challengesData).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">Select Project Type</option>
        {projectTypeOptions.map((challenge, index) => (
          <option key={index} value={challenge}>
            {challenge}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Local Government Area"
        className="w-full border rounded px-3 py-2"
        value={lga}
        onChange={(e) => setLga(e.target.value)}
      />

      <input
        type="text"
        placeholder="Community / Address / Landmark"
        className="w-full border rounded px-3 py-2"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ward (optional)"
        className="w-full border rounded px-3 py-2"
        value={ward}
        onChange={(e) => setWard(e.target.value)}
      />

      <input
        type="text"
        placeholder="Involved Contractor or Personnel"
        className="w-full border rounded px-3 py-2"
        value={contractor}
        onChange={(e) => setContractor(e.target.value)}
      />

      <textarea
        placeholder="Issue Description"
        className="w-full border rounded px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="button"
        onClick={handleGetLocation}
        className="border border-dashed p-4 rounded text-center"
      >
        📍{" "}
        {location.lat
          ? `Lat: ${location.lat}, Lng: ${location.lng}`
          : "Share Location"}
      </button>

      <input
        type="text"
        placeholder="Phone Number or Email (optional)"
        className="w-full border rounded px-3 py-2"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" required />I confirm the above information is
        true to the best of my knowledge.
      </label>

      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Submit Report
      </button>
    </form>
  );
};

export default ReportForm;
