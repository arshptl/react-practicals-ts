import React, { useRef } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './forms.module.css';
import cx from 'classnames';
import { authActions } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import "yup-phone";

// validation for phoneNo
const phoneSchema = Yup.string()
  .phone("IN")
  .required("PhoneNo is required");

// This component will generate the form
const FormComp = () => {

    const dispatch = useDispatch();
    const fileRef = useRef();

    const formik = useFormik({
        initialValues: {
            profilePic: null,
            name: '',
            phoneNo: '',
            email: '',
            password: '',
            confPassword: '',
        },
        //validation using Yup
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Name is Required'),
            profilePic: Yup.mixed()
                .nullable()
                .required("Profile picture is required")
                .test("fileSize", "image size is too much big", (value) => {
                    return !value || (value !== null && value.size <= 2000000);
                })
                .test("fileType", "image type should be jpg or png only ", (value) => {
                    return (!value || (value !== null && ["image/jpg", "image/png"].includes(value.type)));
                }),
            phoneNo: phoneSchema,
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string().required('No password provided'),
            confPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('No password provided')

        }),
        onSubmit: values => {

            dispatch(
                authActions.login({
                    profilePic: URL.createObjectURL(values.profilePic),
                    name: values.name,
                    phoneNo: values.phoneNo,
                    email: values.email,
                    password: values.password,
                })
            );

            fileRef.current.value = "";
            formik.resetForm();
        },

    });

    return (
        <form className={classes.formDiv} onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

            <div className={classes.imageWrapper}>
                <input
                    hidden
                    type="file"
                    name="profilePic"
                    ttitle="&nbsp;"
                    accept=".jpg, .png"
                    className={classes.customImgInput}
                    ref={fileRef}
                    onChange={(event) => {
                        formik.setFieldValue(
                            "profilePic",
                            event.currentTarget.files[0]
                        );
                    }}
                    onBlur={formik.handleBlur}
                />
                
            <button onClick={() => fileRef.current.click()}>Photo +</button>
            {formik.touched.profilePic && formik.errors.profilePic ? (
                    <div className={classes.errorMsg}>{formik.errors.profilePic}</div>
                ) : null}
                {formik.values.profilePic !== null && <div className={classes.photoName}>{formik.values.profilePic.name}</div>}
            </div>
            


            <label htmlFor="name">Full Name</label>

            <input
                className={classes.inputField}
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={classes.errorMsg}>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="lastName">PhoneNo</label>
            <input
                className={classes.inputField} id="phoneNo" type="text" {...formik.getFieldProps('phoneNo')} />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
                <div className={classes.errorMsg}>{formik.errors.phoneNo}</div>
            ) : null}

            <label htmlFor="email">    EmailAdd</label>
            <input className={classes.inputField} id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
                <div className={classes.errorMsg}>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input className={classes.inputField} id="password" type="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
                <div className={classes.errorMsg}>{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confPassword">Confirm Password</label>
            <input className={classes.inputField} id="confPassword" type="password" {...formik.getFieldProps('confPassword')} />
            {formik.touched.confPassword && formik.errors.confPassword ? (
                <div className={classes.errorMsg}>{formik.errors.confPassword}</div>
            ) : null}

            <div className={classes.buttonDiv}>
                <button className={cx(classes.btn, classes.submit)} type="submit">Submit</button>
                <button className={cx(classes.btn, classes.reset)}  type="reset">Reset</button>

            </div>
        </form>
    );
}

export default FormComp