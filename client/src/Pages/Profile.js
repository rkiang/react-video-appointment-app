import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const { username } = useParams();
    return (
        <div>Username: {username}</div>
    )
}

export default Profile;