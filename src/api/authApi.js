const yourIpV4WirelessLanAdapterAddress = '192.168.1.79';
const authUrl = `http://${yourIpV4WirelessLanAdapterAddress}/api/v1/auth`;

const registerUser = async user => {
  const response = await fetch(`${authUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(response.json());
  return response.json();
};

const loginUser = async user => {
  const response = await fetch(`${authUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(response.json());
  return response.json();
};

const logOutUser = async () => {
  const response = await fetch(`${authUrl}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  console.log(response.json());
  return response.json();
};

export {registerUser, loginUser, logOutUser};
