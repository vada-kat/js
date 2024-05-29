function deepClone(obj) {
    79916
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    
    const cloned = Array.isArray(obj) ? [] : {};

    
    for (let key in obj) {
        
        cloned[key] = deepClone(obj[key]);
    }

    return cloned;
}


const originalTask = {
    id: 1,
    title: "Main Task",
    subtasks: [
        { id: 2, title: "Subtask 1" },
        { id: 3, title: "Subtask 2" }
    ]
};

const clonedTask = deepClone(originalTask);
console.log(clonedTask);
