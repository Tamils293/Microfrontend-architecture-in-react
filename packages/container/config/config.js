var data = {};
function callapi() {
    if (window.location.pathname !== "/Logout")
        data = fetch("../public/assets/config.json").then(res => res.json()).then(res => res);

}
callapi();

function config() {
    return data;
}

export default config;