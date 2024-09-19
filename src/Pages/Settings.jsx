import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile'); // State to manage the active tab

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-white shadow-lg rounded-lg">
      {/* Tab Navigation */}
      <div className="border-b mb-6">
        <nav className="flex space-x-8">
          <button
            className={`px-4 py-2 text-lg ${
              activeTab === 'profile' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 text-lg ${
              activeTab === 'account' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button
            className={`px-4 py-2 text-lg ${
              activeTab === 'notifications' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </nav>
      </div>

      {/* Render the selected tab content */}
      <div>{renderContent()}</div>
    </div>
  );
};

// Profile Tab Content (10 Fields)
const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    phone: '',
    bio: '',
    location: '',
    website: '',
    birthdate: '',
    gender: '',
    occupation: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(settings).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={settings[key]}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Account Tab Content (10 Fields)
const AccountSettings = () => {
  const [account, setAccount] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuth: false,
    securityQuestion: '',
    securityAnswer: '',
    accountVisibility: 'Private',
    deactivateAccount: false,
    loginHistory: 'View',
    connectedApps: 'Manage',
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setAccount({ ...account, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={account.currentPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={account.newPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={account.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="twoFactorAuth"
            checked={account.twoFactorAuth}
            onChange={handleInputChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Enable Two-Factor Authentication</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Security Question</label>
          <input
            type="text"
            name="securityQuestion"
            value={account.securityQuestion}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Security Answer</label>
          <input
            type="text"
            name="securityAnswer"
            value={account.securityAnswer}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Account Visibility</label>
          <select
            name="accountVisibility"
            value={account.accountVisibility}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="deactivateAccount"
            checked={account.deactivateAccount}
            onChange={handleInputChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Deactivate Account</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Login History</label>
          <button className="w-full px-4 py-2 border rounded-md text-gray-700">View</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Connected Apps</label>
          <button className="w-full px-4 py-2 border rounded-md text-gray-700">Manage</button>
        </div>
      </div>
    </div>
  );
};

// Notifications Tab Content (10 Fields)
const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    newsletter: true,
    promotionalOffers: false,
    updates: true,
    newFollowers: false,
    messages: true,
    mentions: true,
    activityAlerts: true,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(notifications).map((key) => (
          <div key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={key}
              checked={notifications[key]}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="capitalize text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
