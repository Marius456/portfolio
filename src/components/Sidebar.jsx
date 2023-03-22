import { useEffect, useState } from "react"
import projects from "../data/projects.json"
import { ProjectList } from "../pages/ProjectsList";
import "./styles/Sidebar.css"

export function Sidebar() {
    const [tags, settags] = useState([])
    useEffect(() => {
        projects.forEach(item => {
            item.technology.forEach(tag => {
                settags(tags => [...tags, { "tag": tag.name, "title": item.name }])
            });
        });
    }, []);

    var groupBy = function (data, key) {
        return data.reduce(function (acc, cur) {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc;
        }, {});
    };
    const grouped_tags = groupBy(tags, "tag")

    let tags_names = []
    Object.keys(grouped_tags).reduce((accum, currKey) =>
        tags_names.push({ "name": grouped_tags[currKey][0].tag }), '')

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    return (
        <>
            <div id="mySidebar" className="sidebar">
                <a className="closebtn" onClick={closeNav} >x</a>
                {tags_names.map(item => (
                    <a key={"tag-" + item.name} href={"#/projects/" + item.name}>{item.name}</a>
                ))}
            </div>
            <div id="main">
                <button className="openbtn" onClick={openNav}>&#9776;</button>
                <ProjectList/>
            </div>
        </>
    )
}