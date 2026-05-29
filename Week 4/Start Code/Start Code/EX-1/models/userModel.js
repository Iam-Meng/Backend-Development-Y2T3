const users = [
    {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        role: 'admin'
    }
];

export const getUsers = () => users;

export const getUserById = (id) => users.find(user => user.id === id);

export const addUser = ({ name, email, role }) => {
    const newUser = {
        id: users.length + 1,
        name,
        email,
        role: role || 'user'
    };
    users.push(newUser);
    return newUser;
};

export const updateUser = (id, updates) => {
    const user = getUserById(id);
    if (!user) return null;
    Object.assign(user, updates);
    return user;
};

export const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
};
