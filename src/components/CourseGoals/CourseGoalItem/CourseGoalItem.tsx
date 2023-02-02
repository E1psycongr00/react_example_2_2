import React from "react";
import "./CourseGoalItem.css";

interface CourseGoalItemProps {
    id: string;
    onDelete: (goalId: string) => void;
    children: React.ReactNode;
}

const CourseGoalItem = (props: CourseGoalItemProps) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };
    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
};

export default CourseGoalItem;
