import React from "react";
import CourseGoal from "../CourseGoal";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

interface CourseGoalItemProps {
    items: CourseGoal[];
    onDeleteItem: (goalId: string) => void;
}
const CourseGoalList = (props: CourseGoalItemProps) => {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
