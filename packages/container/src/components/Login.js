import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import SelectTag from "react-select"
import config from '../../config/config';
import axios from "axios"
import { Row, Col, Dropdown, Card, Table, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom";
var CryptoJS = require("crypto-js");

function Login({ }) {

    // const { validation_error } = SvgForFunctions();
    const { register, handleSubmit, getValues, reset, setValue, clearErrors, control, formState: { errors } } = useForm({ mode: 'onChange' });
    const eye = <FontAwesomeIcon icon={faEye} />;
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

    const [configData, setConfigData] = useState();
    const [Version, setVersion] = useState("");
    const [companies, setCompanies] = useState([]);
    const [passwordShown, setPasswordShown] = useState();
    const [btnloader, setbtnLoader] = useState(false);
    // const [listdata, setListData] = useState([]);
    const [btndisabled, setbtndisabled] = useState(false);
    const [Token, setToken] = useState("");
    const [CompId, setCompanyId] = useState("");
    const history = useHistory()

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    const defaultValue = {
        companyId: "",
        loginName: "",
        password: ""

    };

    const SpecialCharValidate = (value) => { return (RegExp(/[^A-Za-z0-9_\s]/).test(value)) ? "Special characters not allowed" : true; }
    const OnlyNumericsValidate = (value) => { return (RegExp(/^[0-9]+$/).test(value)) ? "Only numerics not allowed" : true; }
    const ShouldNotBeginWithUnderScore = (value) => { return (RegExp(/(^_+)([a-zA-Z0-9]+)/).test(value)) ? "Should not begin with underscore" : true; }
    const ShouldNotBeginWithSpace = (value) => { return (!RegExp(/^[^-\s][a-zA-Z0-9_\s-]+$/).test(value)) ? "Should not begin with space" : true; }
    const ShouldNotBeginWithNumber = (value) => { return (!RegExp(/^[a-zA-Z]/).test(value)) ? "Should not begin with number" : true; }
    const SpaceWithUnderScore = (value) => { return (RegExp(/^ (\s?)(_+)(\s?)([a-zA-Z0-9]+)/).test(value)) ? "Space with underscore precedence not allowed" : true; }
    const ShouldNotEndWithUnderScore = (value) => { return (RegExp(/([a-zA-Z0-9]+)(_+$)/).test(value)) ? "Should not end with underscore" : true; }
    const MultiUnderScoreRegex = (value) => { return (RegExp(/(([a-zA-z0-9]+)(_)(_+)([a-zA-Z0-9]+)*)/).test(value)) ? "Multiple underscore cannot be combined together" : true; }
    const SpaceAndUnderScoreRegex = (value) => { return (RegExp(/(([a-zA-z0-9]+)(_)(\s+)([a-zA-Z0-9]+)*)/).test(value)) ? "Space & underscore should not follow each other" : true; }
    const InvalidRegex = (value) => { return (!RegExp(/\d/).test(value) && !RegExp(/[a-zA-Z]/).test(value)) ? "Invalid name" : true; }
    const secondChar = (value) => { return value.charAt(1) === " " ? 'Space should not follow after first character' : true }
    const passwordRegex = (value) => { return (!RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,15}$/).test(value)) ? "Invalid password" : true; }

    useEffect(() => {
        getJson()
    }, [])

    const getJson = async () => {
        let configdatas = await config();
        setConfigData(configdatas);
        setVersion(configdatas.Version);

    }

    useEffect(() => {
        configData && list();
        // configData && companyList();

    }, [configData])

    const companyList = () => {
        return companies.map((data) => ({
            label: data.displayName,
            value: data.id,
        }));
    }

    const handleChange = (value, name) => {

        setValue(name, value);

        clearErrors(name);
        console.log(getValues("companyId"))
        if (name == "companyId") setCompanyId(value)
    }

    const onSubmit = (data) => {
        delete data.companyName
        // data.password = CryptoEncdata.password)
        const password = data.password
        const hashedPassword = CryptoJS.MD5(password).toString();
        console.log(hashedPassword);
        data.password = hashedPassword
        setbtndisabled(true);
        setbtnLoader(true)
        // data.name = data.name.replace(/^\s+|\s+$/gm, '');

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + window.sessionStorage.getItem("Token"),
            },
            body: JSON.stringify(data),
        };
        fetch(configData.BaseUrl + configData.authenticate, requestOptions)
            .then((res) => { return res.json(); })
            .then((result) => {
                sessionStorage.setItem("Token", result.token);
                setToken(sessionStorage.getItem("Token"))
                debugger
                if (result.token) {
                    history.push("/configure");
                } else if (result.Success === false) {
                    setbtndisabled(false)
                    setbtnLoader(false)
                    // window.nilaToastrMessage(result.Message, "unauthorised");
                    // history.push("/Logout");

                    history.push("/configure");
                    list();
                }
            })
            .catch((err) => {
                history.push("/dashboard");
                setTimeout(() => {
                    setbtndisabled(false)
                }, 3000)

            })
    }

    const list = () => {
        axios.get(configData.BaseUrl + configData.Companies + "names").then((res) => {
            if (res.data.length) {

                setCompanies(res.data);

            } else {

                history.push("/Company-info");

            }
        }).catch((err) => {

            history.push("/Logout");
        });
    }

    return (
        <>
            <div className="container-fluid account-pages d-grid">
                <Row className="align-items-center">
                    <Col sm={8} md={9} lg={6}>
                        <Row className="justify-content-center">
                            <Col sm={8} md={9} lg={8}>
                                <Card className="bg-transparent shadow-none">
                                    <div className="bg-transparent width-fit-content">
                                        <img src="../../public/assets/images/login_assets/Logo.png" title="Logo" class="img-fluid" />
                                        <p className="text-right" title="Version">{Version}</p>
                                    </div>
                                    <Card.Body>
                                        <p className="font-size-16 font-weight-bold mb-4"> Welcome to Continuity Patrol. </p>
                                        <Form.Group className="form-group">
                                            <Controller
                                                name="companyId"
                                                control={control}
                                                defaultValue={null}
                                                rules={{
                                                    required: "Select company"
                                                }}
                                                render={({ field }) => <SelectTag
                                                    {...field}
                                                    options={companyList()}
                                                    required={true}
                                                    value={companyList().find(c => c.value === getValues("companyId"))}
                                                    className="form-control"
                                                    onChange={(e) => {

                                                        handleChange(e.value, "companyId");
                                                        handleChange(e.label, "companyName");
                                                    }}

                                                    id="companyId"
                                                />}
                                            />
                                            <label className='animation-label select-animation-label'>Company Name</label>
                                            <ErrorMessage
                                                errors={errors}
                                                name="companyId"
                                                render={({ message }) => <span className="validation">ℹ{message}</span>}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Control type="text" required id="txtName" name="loginName" autoComplete="off" maxLength={30}
                                                {...register('loginName', {
                                                    required: "Enter login name",
                                                    minLength: { value: 3, message: 'Between 3 to 30 characters' },
                                                    maxLength: { value: 30, message: 'Between 3 to 30 characters' },
                                                    validate: {
                                                        SpecialCharValidate,
                                                        OnlyNumericsValidate,
                                                        ShouldNotBeginWithUnderScore,
                                                        ShouldNotBeginWithSpace,
                                                        ShouldNotBeginWithNumber,
                                                        SpaceWithUnderScore,
                                                        ShouldNotEndWithUnderScore,
                                                        MultiUnderScoreRegex,
                                                        SpaceAndUnderScoreRegex,
                                                        InvalidRegex,
                                                        // IsAlreadyExist,
                                                        secondChar
                                                    },
                                                })}
                                            />
                                            <Form.Label id="txtName" className="animation-label">
                                                Login Name <span class="mandatory">*</span>
                                            </Form.Label>
                                            <ErrorMessage errors={errors} name="loginName" render={({ message }) => <span className="validation">ℹ{message}</span>} />
                                        </Form.Group>
                                        <Form.Group className="form-group">

                                            <Form.Control type={passwordShown ? "text" : "password"}
                                                required

                                                id="txtPassword"
                                                name="password"
                                                autoComplete="off"
                                                maxLength={15}
                                                {...register('password', {
                                                    required: "Enter password",
                                                    validate: {
                                                        passwordRegex
                                                    },
                                                })}
                                            />

                                            <Form.Label id="txtPassword" className="animation-label">
                                                Password <span class="mandatory">*</span>
                                            </Form.Label>

                                            <span class="passeyeicon"> <i onClick={togglePasswordVisiblity}>{passwordShown ? eyeSlash : eye}</i></span>

                                            <ErrorMessage
                                                errors={errors}
                                                name="password"
                                                render={({ message }) => <span className="validation">ℹ{message}</span>} />

                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <div className="d-flex flex-row">
                                                <div className="custom-control custom-checkbox">
                                                    <Form.Control
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="chk-ad"
                                                        name="activedirectory"
                                                    // onChange={this.checking}
                                                    // checked={this.state.form.activedirectory}
                                                    />
                                                    <Form.Label className="custom-control-label" htmlFor="chk-ad">AD</Form.Label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Col sm={5} md={6} xl={4} px={0}>
                                            <Form.Group className="form-group mt-5">
                                                <Button
                                                    className="btn btn-primary btn-lg rounded-pill align-items-center d-flex login-btn"
                                                    title="Login"
                                                    id="btnlogin"
                                                    disabled={btndisabled}
                                                    onClick={() => handleSubmit(onSubmit)()}
                                                >
                                                    {btnloader ? (
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    ) : null}
                                                    <div className="mx-auto">LOGIN</div>
                                                </Button>
                                            </Form.Group>
                                        </Col>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-6 col-xl-6 text-center">
                        <Row className="justify-content-center h-100">
                            <Col lg={8}>
                                <div id="carouselExampleIndicators" className="carousel slide h-100" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="login-img" src="../../public/assets/images/orchestratrion_automation.svg" title="Login Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Orchestration & Automation</h5>
                                                <p>Simple workflows to perform actions and failovers infew-clicks.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="login-img" src="../../public/assets/images/tru_software_only_suite.svg" title="Login Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>True Software-Only Suite</h5>
                                                <p>No appliances, agents, scripts, or vendor lock-in.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="login-img" src="../../public/assets/images/patended_methodology.svg" title="Login Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Patented Methodology</h5>
                                                <p>Patented and proven - parallel recovery workflowexecution.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="login-img" src="../../public/assets/images/platform_technology.svg" title="Login Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Platform & Technology Agnostic</h5>
                                                <p>Supports any Infrastructure - any Cloud, any OS,Public Cloud, etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ol className="carousel-indicators position-relative">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    </ol>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Col className="col-12 p-3 text-center fixed-bottom">
                        <p className="mb-0">
                            © &nbsp; <script>document.write(new Date().getFullYear())</script>
                            <span className="text-danger">
                                <a href="https://ptechnosoft.com/" target="_blank" title="Perpetuuiti" id="cmpnyname">Perpetuuiti{" "}</a>
                            </span>
                            Technosoft Services Pvt. Ltd, All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Login;