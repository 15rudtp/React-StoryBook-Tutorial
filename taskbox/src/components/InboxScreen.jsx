import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, fetchUser } from "../lib/store";
import TaskList from "./TaskList";

export default function InboxScreen({error}) {
    const dispatch = useDispatch();

    // const { error } = useSelector((state) => state.taskbox);

    useEffect(()=>{
        dispatch(fetchTasks())
    },[])

    if(error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"></span>
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        )
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList/>
        </div>
    )

}