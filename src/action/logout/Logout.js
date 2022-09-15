const Logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('now');
    window.location.replace('/login');
}

export default Logout;