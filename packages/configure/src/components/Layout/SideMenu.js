import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, } from "react-router-dom";
import config from "../../config";
import { useHistory } from 'react-router-dom';
import { Row, Container, Col, Button, Modal, Form, FormGroup, Dropdown, Card, Tabs, Tab, } from "react-bootstrap";
import SvgForFunctions from "../../common/SVG/SvgForFunctions";

export default function SideMenu() {
    const [classname, setClass] = useState(true)
    const [collapse, setCollapse] = useState(true)
    let search = window.location.href;
    const dashlink = search.search("Dashboard");
    const linkname = search.search("Configure");
    const ManageLink = search.search("Manage");
    const adminlink = search.search("Admin");
    const profilelink = search.search("Profile User");
    const ITOrchestration = search.search("ITOrchestration")
    const Report = search.search("Report");
    const AlertLink = search.search("Alert");
    const [configData, setConfigData] = useState();


    const [date, setDate] = useState(new Date());



    const toggleSideBar = () => {
        const menu_icon = document.getElementById("vertical-menu-btn")
        const body = document.getElementsByTagName("body")[0];
        menu_icon.classList.toggle('active');
        if (menu_icon.classList.contains('active')) {
            body.classList.add('sidebar-expanded');
            body.classList.remove('vertical-collpsed');
        }
        else {
            body.classList.remove("sidebar-expanded");
            body.classList.add("vertical-collpsed");
        }
    }

    const toggleThemecolor = () => {
        const menu_icon = document.getElementById("themeBlue")
        const body = document.getElementsByTagName("body")[0];
        menu_icon.classList.toggle('active');
        if (menu_icon.classList.contains('active')) {
            body.classList.add('blue');
            body.classList.remove('blue');
        }
        else {
            body.classList.remove("blue");
            body.classList.add("blue");
        }
    }

    const menuCollapse = () => {
        setClass(!classname);
        setCollapse(!collapse)
    }


    useEffect(() => { console.log(search = window.location.href); search = window.location.href }, [])

    useEffect(() => {
        var timer = setInterval(() => {
            setDate(new Date(), 1000)
        });
        return function cleanup() {
            clearInterval(timer)
        }

    });
    useEffect(() => {
        getConfig();
        // setLoading(false)
        // if (history.loading.pathname === "/Dashboard/commandCenter")  setLoading(true)
        // else 

        // // setTimeout(() => {
        // //     setLoading(true)
        // // }, 500)


    }, [])

    const getConfig = async () => {
        let configdatas = await config();
        setConfigData(configdatas);
    }

    const logout = (e) => {
        const requestOptions = {
            method: 'POST', headers: { 'Content-Type': 'text/plain', "Authorization": "Bearer " + window.sessionStorage.getItem("Token") }
        };
        fetch(config.BaseUrl + config.logout, requestOptions)
            .then(res => res.json())
            .then((result) => {

                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });

        window.location.href = "Logout";
    }

    const { Dashboard_Menu_Icon, Configure_Menu_Icon, IT_Orchestration_Menu_Icon, Report_Menu_Icon, Manage_Menu_Icon, Alerts_Menu_Icon, Admin_Menu_Icon } = SvgForFunctions();

    return (

        <>
            <div className="vertical-menu">
                <div className="navbar-brand-box">
                    <a className="logo">
                        <span className="logo-sm">
                            <img className="logo" src="assets/images/CP_6.0.svg" alt="" title="Logo" height="40" id="cplogo" />
                        </span>
                        <span className="logo-lg">
                            <img className="logo" src="assets/images/logo-light.png" title="Logo" alt="" />
                        </span>
                    </a>
                </div>
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu" className="sidebar">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className={dashlink !== -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {Dashboard_Menu_Icon}<span><strong className="position-relative">Dashboard</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Dashboard/commandCenter">Command Center</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Dashboard/loadBalance">Load Balancer</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Dashboard/pageanalytics">Analytics</NavLink></li>
                                </ul>
                            </li>
                            <li className={linkname !== -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {Configure_Menu_Icon}<span><strong className="position-relative">Configure</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/company">Company</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/site">Site</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/business_service">Business Service</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/business_function">Business Function</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/singlesignon">Single Sign-On</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/credential_profile">Credential Profile</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/server">Server</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/nodeconfig">Node</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/database_form">Database</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/replication_form">Replication</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/infra_objects">InfraObject</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Configure/formbuilder">FormBuilder</NavLink></li>
                                </ul>
                            </li>
                            <li className={ITOrchestration !== -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {IT_Orchestration_Menu_Icon}<span><strong className="position-relative">IT Orchestration</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><a href="">Solution Builder</a></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/ITOrchestration/workflow_configuration">Workflow Configuration</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/ITOrchestration/profile_Management">Workflow Profile Management</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/ITOrchestration/workflow_execution">Workflow Execution</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/ITOrchestration/workflow_list">Workflow List</NavLink></li>
                                    <li className="sub-menu-li"><a href="">CP Core Engine</a></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/ITOrchestration/action_builder">Action Builder</NavLink></li>
                                </ul>
                            </li>
                            <li className={Report !== -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {Report_Menu_Icon}<span><strong className="position-relative">Report</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Report/custom">Custom Reports</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Report/prebuild">Prebuild Reports</NavLink></li>
                                </ul>
                            </li>
                            <li className={ManageLink !== -1 && ITOrchestration === -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {Manage_Menu_Icon}<span><strong className="position-relative">Manage</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/jobmanagement">Job Management</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/monitoringService">Monitoring Services</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/notificationManager">Notification Manager</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/manageBusiness">Manage Business Service</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/solutiontemplate">Solution Template</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Manage/logviewer">Log Viewer</NavLink></li>

                                </ul>
                            </li>
                            <li className={AlertLink !== -1 ? 'logoactive' : null}>
                                <a className="has-arrow cursor-pointer" >
                                    {Alerts_Menu_Icon}<span><strong className="position-relative">Alerts</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Alert/alert">Alerts</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Alert/alertdashboard">Alert Dashboard</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Alert/managealert">Manage Alerts</NavLink></li>

                                </ul>
                            </li>
                            <li className={adminlink !== -1 ? 'logoactive' : null} >
                                <a className="has-arrow cursor-pointer" >
                                    {Admin_Menu_Icon}<span><strong className="position-relative">Admin</strong></span>
                                </a>
                                <ul className="sub-menu mm-collapse" aria-expanded="false">
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/archive">Archive</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/backupdata">Backup Data</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/user">User Management</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/access">Access Manager</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/settings">Settings</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/license">License Manager</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/pluginmanager">Plugin Manager</NavLink></li>
                                </ul>
                            </li>
                            <li className={profilelink !== -1 ? 'logoactive' : null} onClick={() => { menuCollapse(); }}>
                                <a className="has-arrow cursor-pointer" >
                                    <img className="rounded-circle header-profile-user" src="assets/images/users/user-4.jpg" alt="Header Avatar" title="Profile User" />
                                    <span><strong className="position-relative">Profile User</strong></span>
                                </a>
                                <ul className={`sub-menu ${collapse ? "mm-collapse " : "mm-show"}`} aria-expanded="false">
                                    <li className="sub-menu-li"><a href=""> Profiles</a></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/Admin/settings"> Settings</NavLink></li>
                                    <li className="sub-menu-li"><a data-toggle="modal" data-target="#Profiles_Settings"> Profiles Settings</a></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/lock"> Lock</NavLink></li>
                                    <li className="sub-menu-li"><NavLink activeClassName="activepage" to="/logout"> Logout</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="time">
                            <div id="time">
                                <div>
                                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                                </div>
                                <div>
                                    {date.toLocaleTimeString('en-US')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="Profiles_Settings">
                <Modal.Dialog className="modal-dialog-slideout modal-sm theme-slideout">
                    <Modal.Header className='p-3'>
                        <h5 className="modal-title" id="exampleModalLabel">
                            <span className="text-primary">Theme</span> Customizer
                        </h5>
                        <Button variant="transparent" className="close" id="CloseModal" data-dismiss="modal">
                            <div className="close-container d-inline-block " title="Close">
                                <div className="leftright"></div>
                                <div className="rightleft"></div>
                            </div>
                        </Button>
                    </Modal.Header>
                    <Modal.Body className='p-3'>
                        <div className='d-flex flex-column'>
                            <div>
                                <h6>Layout Color</h6>
                            </div>
                            <div>
                                <fieldset class="form-group">
                                    <div class="p-3 d-inline-block rounded cursor-pointer bg-info mark-active" id="themeBlue" onClick={() => { setClass(!classname); toggleThemecolor(); }}></div>
                                    <div class="p-3 d-inline-block rounded mx-1 cursor-pointer bg-secondary"></div>
                                    <div class="p-3 d-inline-block rounded cursor-pointer bg-success"></div>
                                    <div class="p-3 d-inline-block rounded mx-1 cursor-pointer bg-danger"></div>
                                    <div class="p-3 d-inline-block rounded cursor-pointer bg-warning"></div>
                                    <div class="p-3 d-inline-block rounded mx-1 cursor-pointer bg-info"></div>
                                    <div class="p-3 d-inline-block rounded cursor-pointer bg-dark"></div>
                                </fieldset>
                            </div>
                        </div>
                        <div className='d-flex align-items-center pb-3'>
                            <div className=''>
                                <h6 className='mb-0'>Menu Layout</h6>
                            </div>
                            <div className='ml-auto'>
                                <input type="checkbox" switch="default" id="vertical-menu-btn" onClick={() => { setClass(!classname); toggleSideBar(); }} />
                                <label for="vertical-menu-btn" data-on-label="" data-off-label=""></label>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>


    )

}

