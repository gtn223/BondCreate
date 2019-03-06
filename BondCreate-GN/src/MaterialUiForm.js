import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import Checkbox from "material-ui/Checkbox";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import asyncValidate from "./asyncValidate";
import validate from "./validate";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const textStyle = {
  marginLeft: "66px",
  marginTop: "48px",
  width: "191px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const formStyle = {
  backgroundColor: "#F5F5F5",
  width: "1439px",
  height: "1533px",
  paddingTop: "70px",
  flex: "1"
};

const textYear = {
  marginLeft: "41px",
  marginTop: "48px",
  width: "191px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const divStyle2 = {
  width: "1216px",
  height: "151px",
  borderRadius: "4px",
  border: "solid 1px rgba(158, 158, 158, 0.39)",
  backgroundColor: "#ffffff",
  marginLeft: "20px",
  marginBottm: "7px",
  marginRight: "57px"
};

const textDate = {
  marginLeft: "212px",
  marginTop: "48px",
  width: "191px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const saveButt = {
  width: "60px",
  height: "35px",
  borderRadius: "4px",
  backgroundColor: "#109a53",
  fontColor: "#ffffff",
  marginLeft: "100px",
  marginTop: "20px"
};

const divStyle3 = {
  marginTop: "7px",
  width: "1216px",
  height: "151px",
  borderRadius: "4px",
  border: "solid 1px rgba(158, 158, 158, 0.39)",
  backgroundColor: "#ffffff",
  marginLeft: "20px",
  marginBottm: "7px",
  marginRight: "57px"
};

const taxE = {
  height: "40px",
  marginLeft: "966px",
  marginBottom: "35px"
};

const searchBondCard = {
  width: "589px",
  height: "168px",
  borderRadius: "4px",
  border: "solid 1px rgba(151, 151, 151, 0.39)",
  marginLeft: "20px",
  marginTop: "12px",
  backgroundColor: "#ffffff"
};

const searchBond = {
  width: "243px",
  height: "27px",
  fontFamily: "NotoSans",
  fontSize: "20px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242",
  marginLeft: "66px"
};

const lineCreditCard = {
  width: "590px",
  height: "168px",
  borderRadius: "4px",
  border: "solid 1px rgba(151, 151, 151, 0.39)",
  marginTop: "12px",
  marginLeft: "1px",
  marginRight: "2px",
  backgroundColor: "#ffffff"
};

const cardForLine = {
  width: "589px",
  height: "168px",
  borderRadius: "4px",
  border: "solid 1px rgba(151, 151, 151, 0.39)",
  marginLeft: "700px",
  marginRight: "2px",
  backgroundColor: "#ffffff"
};

const divStyle4 = {
  width: "1216px",
  height: "373px",
  borderRadius: "4px",
  border: "solid 1px rgba(158, 158, 158, 0.39)",
  marginLeft: "20px",
  marginTop: "12px",
  backgroundColor: "#ffffff"
};

const textBondInsurace = {
  marginLeft: "66px",
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const textIssuerfee = {
  marginLeft: "450px",
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const textOther = {
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  marginLeft: "66px",
  marginRight: "135px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const textStateBond = {
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  marginLeft: "315px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242",
  marginRight: "120px"
};

const textUnderWriters = {
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  marginLeft: "66px",
  paddingRight: "20px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const divEscrowandArb = {
  width: "588px",
  height: "312px",
  borderRadius: "4px",
  border: "solid 1px rgba(158, 158, 158, 0.39)",
  marginLeft: "20px",
  marginTop: "10px",
  backgroundColor: "#ffffff"
};

const textEscrow1 = {
  marginLeft: "66px",
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const textEscrow2 = {
  marginLeft: "66px",
  marginTop: "48px",
  width: "191px",
  height: "54.3px",
  borderRadius: "4px",
  fontFamily: "NotoSans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#424242"
};

const divFirstBond = {
  width: "588px",
  height: "312px",
  borderRadius: "4px",
  border: "solid 1px rgba(158, 158, 158, 0.39)",
  marginLeft: "39px",
  marginTop: "10px",
  backgroundColor: "ffffff"
};

class SomeForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props;

    return (
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={divStyle2}>
          <Field
            name="legalName"
            component={renderTextField}
            label="Legal Name"
            style={textStyle}
            defaultValue=" "
          />

          <Field
            name="Year"
            component={renderTextField}
            label="Year"
            style={textYear}
            defaultValue=" "
          />
          <Field
            name="Sale Date"
            component={renderTextField}
            label="Sale Date"
            style={textDate}
            defaultValue=" "
          />

          <button
            type="submit"
            disabled={pristine || submitting}
            style={saveButt}
          >
            Save
          </button>
        </div>

        <div style={divStyle3}>
          <Field
            name="Project Code"
            component={renderTextField}
            label="Project Code"
            style={textStyle}
            defaultValue=" "
          />

          <Field
            name="Issuer"
            component={renderTextField}
            label="Issuer"
            style={textYear}
            defaultValue=" "
          />
          <Field
            name="Dated"
            component={renderTextField}
            label="Dated"
            style={textDate}
            defaultValue=" "
          />
          <div style={taxE}>
            <Field
              name="Tax-Exempt"
              component={renderCheckbox}
              label="Tax-Exempt"
            />
          </div>
        </div>

        <span>
          <Grid container spacing={40}>
            <Grid item xs={16}>
              <div style={searchBondCard}>
                <span>
                  <Field
                    style={searchBond}
                    name="Search Bond Name"
                    component={renderSelectField}
                    label="Search Bond Name"
                  >
                    <MenuItem value="ff0000" primaryText="Bond Group 1" />
                    <MenuItem value="00ff00" primaryText="Bond Group 2" />
                    <MenuItem value="0000ff" primaryText="Bond Group 3" />
                  </Field>
                </span>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div style={lineCreditCard}>
                <Field name="notes" component={renderTextField} label="Notes" />
              </div>
            </Grid>
          </Grid>
        </span>

        <div style={divStyle4} onSubmit={handleSubmit}>
          <Field
            name="Bond Insurance"
            label="Bond Insurance"
            defaultValue=" "
            style={textBondInsurace}
            component={renderTextField}
          />

          <Field
            name="Issuer Fee"
            label="Issuer Fee"
            defaultValue=" "
            style={textIssuerfee}
            component={renderTextField}
            //className={classes.textIssuerfee}
          />
          <Field
            name="Other Insurance Fees"
            label="Other Insurance Fees"
            defaultValue=" "
            component={renderTextField}
            style={textOther}
            //className={classes.textOther}
            //value={this.state.name}
          />

          <Field
            name="State Bond Fee"
            label="State Bond Fee"
            defaultValue=" "
            component={renderTextField}
            style={textStateBond}
            //className={classes.textStateBond}
          />

          <Field
            name="Underwriters Discount"
            label="Underwriters Discount"
            defaultValue=" "
            component={renderTextField}
            style={textUnderWriters}
            //className={classes.textUnderWriters}
          />
        </div>
        <Grid container spacing={12}>
          <Grid item xs={16}>
            <div style={divEscrowandArb} onSubmit={handleSubmit}>
              <Field
                name="Arbitrage Yeild (%)"
                label="Arbitrage Yeild (%)"
                defaultValue=" "
                style={textEscrow1}
                component={renderTextField}
              />

              <Field
                name="First Escrow Deposit"
                label="First Escrow Deposit"
                defaultValue=" "
                style={textEscrow2}
                component={renderTextField}
                //className={classes.textIssuerfee}
              />
              <Field
                name="Escrow Yeild (%)"
                label="Escrow Yeild (%)"
                defaultValue=" "
                component={renderTextField}
                style={textEscrow1}
                //className={classes.textOther}
                //value={this.state.name}
              />

              <Field
                name="Escrow Deposit Date"
                label="Escrow Deposit Date"
                defaultValue=" "
                component={renderTextField}
                style={textEscrow2}
                //className={classes.textStateBond}
              />
            </div>
          </Grid>

          <div style={divFirstBond}>
            <Field
              name="Gross Proceeds"
              label="Gross Proceeds"
              defaultValue=" "
              style={textEscrow1}
              component={renderTextField}
            />

            <Field
              name="Deposit Date"
              label="Deposit Date"
              defaultValue=" "
              style={textEscrow2}
              component={renderTextField}
              //className={classes.textIssuerfee}
            />
            <Field
              name="Capitilized Interest"
              label="Capitilized Interest"
              defaultValue=" "
              component={renderTextField}
              style={textEscrow1}
              //className={classes.textOther}
              //value={this.state.name}
            />
          </div>
        </Grid>

        <div>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  asyncValidate
})(SomeForm);
