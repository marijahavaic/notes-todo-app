import { useState } from "react";

export default (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const reset = () => {
        setTitle("");
    };
    return [title, handleChange, reset];
};
