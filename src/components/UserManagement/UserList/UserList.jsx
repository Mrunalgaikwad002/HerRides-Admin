import React from 'react';
import './UserList.css';

function UserList() {
  return (
    <div className="user-list-container">
      <div className="list-header">
        <div className="header-item">Driver name</div>
        <div className="header-item status">Status</div>
        <div className="header-item action">Action</div>
      </div>

      {/* Sample User List Items */}
      <div className="user-list-item">
        <div className="user-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Kriti Singh</p>
            <p className="user-id">#4393 - Activa 6</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://static.vecteezy.com/system/resources/previews/024/966/233/original/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Priya Sharma</p>
            <p className="user-id">#4394 - Scooty Pep</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag pending">Pending</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

       <div className="user-list-item selected">
         <div className="user-info">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Divya Kumari</p>
            <p className="user-id">#4395 - Activa 6</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Ananya Patel</p>
            <p className="user-id">#4396 - TVS Jupiter</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://static.vecteezy.com/system/resources/previews/024/966/233/original/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Meera Gupta</p>
            <p className="user-id">#4397 - Activa 125</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag pending">Pending</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Riya Verma</p>
            <p className="user-id">#4398 - Scooty Zest</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Sneha Reddy</p>
            <p className="user-id">#4399 - Activa 6</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag pending">Pending</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://static.vecteezy.com/system/resources/previews/024/966/233/original/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Pooja Mishra</p>
            <p className="user-id">#4400 - TVS Jupiter</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Neha Singh</p>
            <p className="user-id">#4401 - Activa 125</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag pending">Pending</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

      <div className="user-list-item">
         <div className="user-info">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ao-b9M130AwXmWOnI9V1hQHaHa&pid=Api&P=0&h=180" alt="avatar" className="avatar" />
          <div className="user-details">
            <p className="user-name">Aisha Khan</p>
            <p className="user-id">#4402 - Scooty Pep</p>
          </div>
        </div>
        <div className="user-status">
          <span className="status-tag verified">Verified</span>
        </div>
        <div className="user-actions">
          <span className="action-ellipsis">...</span>
        </div>
      </div>

    </div>
  );
}

export default UserList; 