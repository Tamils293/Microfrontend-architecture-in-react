import React from 'react'
import { NavLink } from "react-router-dom"
function Header() {
    return (
        <header >
            <div className="navbar-header">
                <div className="d-flex">
                    {/*<!-- LOGO -->*/}
                    <div tabIndex="0" className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img className="logo" src="../../../public/assets/images/logo-sm.png" alt="" title="Logo" height="34" id="cplogo" />
                            </span>
                            {/* <span className="logo-lg">
                                <img className="logo" src="../../../public/assets/images/logo-light.png" title="Logo" alt="" />
                            </span> */}
                        </a>
                        <a href="index.html" className="logo logo-light">
                            {/* <span className="logo-sm">
                                <img className="logo" src="../../../public/assets/images/logo-sm.png" title="Logo" alt="" height="34" />
                            </span> */}
                            <span className="logo-lg">
                                <img className="logo" src="../../../public/assets/images/logo-light.png" title="Logo" alt=""></img>
                            </span>
                        </a>
                    </div>
                    {/* <div tabIndex="0">
            <button type="button" className="menu-icon btn btn-sm header-item" id="vertical-menu-btn" title="Menu Toggle" onClick={() => this.toggleSideBar()}>
                <span></span>
                <span></span>
                <span className="mb-0"></span>
            </button>
        </div> */}
                </div>
                <div className="d-flex">
                    <div tabIndex="0" className="dropdown  d-none d-sm-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-bell-outline" title="Alert Notification"></i>
                            <span className="badge badge-danger badge-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="m-0 font-size-16"> Notifications (258) </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-simplebar style={{ "maxHeight": 230 + 'px' }}>
                                <a href="#" className="text-reset notification-item">
                                    <div tabIndex="0" className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="mdi mdi-cart-outline"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" className="text-reset notification-item">
                                    <div tabIndex="0" className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-warning rounded-circle font-size-16">
                                                <i className="mdi mdi-message-text-outline"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">New Message received</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div tabIndex="0" className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-info rounded-circle font-size-16">
                                                <i className="mdi mdi-glass-cocktail"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">It is a long established fact that a reader will</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div tabIndex="0" className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="mdi mdi-cart-outline"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="text-reset notification-item">
                                    <div tabIndex="0" className="media">
                                        <div className="avatar-xs mr-3">
                                            <span className="avatar-title bg-danger rounded-circle font-size-16">
                                                <i className="mdi mdi-message-text-outline"></i>
                                            </span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-0 mb-1">New Message received</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div tabIndex="0" className="p-2 border-top">
                                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect d-flex text-right align-items-center" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="header-profile-text d-none d-sm-none d-md-block">
                                <span className="mr-2">Admin</span><br />
                                <span id="time" className="times d-flex ml-2" title="Current Date Time"></span>
                            </div>
                            <img className="rounded-circle header-profile-user" src="../../../public/assets/images/users/user-4.jpg" alt="Header Avatar" title="Profile User" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            {/*<!-- item-->*/}
                            <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle font-size-17  mr-1"></i> Profile</a>
                            <a className="dropdown-item d-block" href="#">{/*<span class="badge badge-success float-right">11</span>*/}<i className="mdi mdi-settings font-size-17 align-middle mr-1"></i> Settings</a>
                            <NavLink className="dropdown-item" activeClassName="activepage" to="/Lock"><i className="mdi mdi-lock-open-outline font-size-17  mr-1"></i> Lock screen</NavLink>
                            <button className="dropdown-item btn btn-primary w-100 rounded-0 text-white"><svg className="vertical-align-sub mr-2" width="16" height="16" viewBox="0 0 18 18">
                                <defs>
                                    <clipPath id="clipPath">
                                        <rect id="Rectangle_2135" data-name="Rectangle 2135" width="18" height="18" transform="translate(1448.535 228.666)" fill="#fff" stroke="#707070" strokeWidth="2" />
                                    </clipPath>
                                </defs>
                                <g id="logout" transform="translate(-1448.535 -228.666)" clipPath="url()">
                                    <g id="Group_8436" data-name="Group 8436" transform="translate(-172.032 23.471)">
                                        <path id="Path_16486" data-name="Path 16486" d="M99.922,4.833a7.59,7.59,0,1,1-9.042,0" transform="translate(1533.755 203.677)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        <line id="Line_779" data-name="Line 779" y2="9.6" transform="translate(1629.156 206.194)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                </g>
                            </svg>
                                Logout</button>
                            {/*<NavLink class="dropdown-item btn btn-primary w-100 rounded-0 text-white" activeClassName="activepage" to="/Logout">*/}
                            {/*    <svg className="vertical-align-sub mr-2" width="16" height="16" viewBox="0 0 18 18">*/}
                            {/*        <defs>*/}
                            {/*            <clipPath id="clipPath">*/}
                            {/*                <rect id="Rectangle_2135" data-name="Rectangle 2135" width="18" height="18" transform="translate(1448.535 228.666)" fill="#fff" stroke="#707070" strokeWidth="2" />*/}
                            {/*            </clipPath>*/}
                            {/*        </defs>*/}
                            {/*        <g id="logout" transform="translate(-1448.535 -228.666)" clipPath="url()">*/}
                            {/*            <g id="Group_8436" data-name="Group 8436" transform="translate(-172.032 23.471)">*/}
                            {/*                <path id="Path_16486" data-name="Path 16486" d="M99.922,4.833a7.59,7.59,0,1,1-9.042,0" transform="translate(1533.755 203.677)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />*/}
                            {/*                <line id="Line_779" data-name="Line 779" y2="9.6" transform="translate(1629.156 206.194)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />*/}
                            {/*            </g>*/}
                            {/*        </g>*/}
                            {/*    </svg>*/}
                            {/*     Logout*/}
                            {/*</NavLink>*/}
                        </div>
                    </div>
                    <div className="dropdown d-none d-sm-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle">
                            <i className="mdi mdi-settings-outline" style={{ "display": 'none' }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header