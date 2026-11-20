export const loadState = () =>{
    try {
        const saved = localStorage.getItem("teamTaskManager");
        if (!saved) return undefined;
        return JSON.parse(saved);
    }
    catch{
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        localStorage.setItem("teamTaskManager", JSON.stringify(state));
    }
    catch{}
}