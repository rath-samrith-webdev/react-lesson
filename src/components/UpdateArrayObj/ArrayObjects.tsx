import { useState } from "react"; // Import useState

import {produce} from "immer";

// Extract Interface
interface Bug {
    id: number;
    name: string;
    description: string;
    fixed: boolean;
}

// Extract Constant
const initialBugs: Bug[] = [
    { id: 1, name: 'bug1', description: 'bug1 description', fixed: false },
    { id: 2, name: 'bug2', description: 'bug2 description', fixed: false },
];

function ArrayObjects() {
    const [bugs, setBugs] = useState<Bug[]>(initialBugs); // Use the extracted constant and interface
    const handleClick = () => {
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) {
                bug.fixed = true;
            }
        }));
    }
    return <>
        <div className="d-flex gap-2 justify-content-between align-content-center">
            {bugs.map((bug) => <div onClick={handleClick} key={bug.id} className={bug.fixed?'badge badge-light text-bg-success p-2 rounded-md':'badge badge-light text-bg-warning p-2 rounded-md'}>{bug.name}</div>)}
        </div>
    </>
}
export default ArrayObjects;