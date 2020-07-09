import { css } from 'lit-element';
/*
 * author:evanliu2968
 * github:https://github.com/EvanLiu2968/el-checkbox
 * lincense:MIT
 */
/*checkbox radio component*/
export const toggleSwitchStyles = css`
  
.el-radio,
.el-checkbox {
  position: relative;
  font-size: 100%;
}
label.el-radio,
label.el-checkbox {
  display: block;
  cursor: pointer;
}
.el-radio > input[type="radio"],
.el-checkbox > input[type="checkbox"] {
  display: none;
}
.el-radio > input[type="radio"][disabled],
.el-checkbox > input[type="checkbox"][disabled] {
  cursor: not-allowed;
}
.el-radio > input[type="radio"] + .el-radio-style,
.el-checkbox > input[type="checkbox"] + .el-checkbox-style {
  position: relative;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  vertical-align: middle;
  cursor: pointer;
}
.el-radio > input[type="radio"] + .el-radio-style:hover:before,
.el-checkbox > input[type="checkbox"] + .el-checkbox-style:hover:before {
  border-color: #20a0ff;
}
.el-radio > input[type="radio"] + .el-radio-style:before,
.el-checkbox > input[type="checkbox"] + .el-checkbox-style:before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  content: '';
  border: 1px solid #C0CCDA;
}
.el-radio > input[type="radio"] + .el-radio-style:after,
.el-checkbox > input[type="checkbox"] + .el-checkbox-style:after {
  position: absolute;
  display: none;
  content: '';
}
.el-radio > input[type="radio"][disabled] + .el-radio-style,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style {
  cursor: not-allowed;
  color: #D3DCE6;
}
.el-radio > input[type="radio"][disabled] + .el-radio-style:hover,
.el-radio > input[type="radio"][disabled] + .el-radio-style:before,
.el-radio > input[type="radio"][disabled] + .el-radio-style:after,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style:hover,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style:before,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style:after {
  cursor: not-allowed;
}
.el-radio > input[type="radio"][disabled] + .el-radio-style:hover:before,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style:hover:before {
  border: 1px solid #D3DCE6;
  animation-name: none;
}
.el-radio > input[type="radio"][disabled] + .el-radio-style:before,
.el-checkbox > input[type="checkbox"][disabled] + .el-checkbox-style:before {
  border-color: #D3DCE6;
}
.el-radio > input[type="radio"]:checked + .el-radio-style:before,
.el-checkbox > input[type="checkbox"]:checked + .el-checkbox-style:before {
  animation-name: none;
}
.el-radio > input[type="radio"]:checked + .el-radio-style:after,
.el-checkbox > input[type="checkbox"]:checked + .el-checkbox-style:after {
  display: block;
}
.el-radio > input[type="radio"] + .el-radio-style:before {
  border-radius: 50%;
}
.el-radio > input[type="radio"] + .el-radio-style:after {
  top: 0.4em;
  left: 0.4em;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background: #20a0ff;
}
.el-radio > input[type="radio"]:checked + .el-radio-style:before {
  border: 1px solid #20a0ff;
}
.el-radio > input[type="radio"]:checked[disabled] + .el-radio-style:before {
  border: 1px solid #b0d7f5;
}
.el-radio > input[type="radio"]:checked[disabled] + .el-radio-style:after {
  background: #b0d7f5;
}
.el-checkbox > input[type="checkbox"] + .el-checkbox-style:before {
  border-radius: 3px;
}
.el-checkbox > input[type="checkbox"] + .el-checkbox-style:after {
  top: 0.15em;
  left: 0.5em;
  box-sizing: border-box;
  width: 0.4em;
  height: 0.85em;
  transform: rotate(45deg);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
.el-checkbox > input[type="checkbox"]:checked + .el-checkbox-style:before {
  border: #20a0ff;
  background: #20a0ff;
}
.el-checkbox > input[type="checkbox"]:checked[disabled] + .el-checkbox-style:before {
  border: #b0d7f5;
  background: #b0d7f5;
}
/*blue theme*/
.el-radio.el-radio-blue > input[type="radio"] + label:hover:before,
.el-checkbox.el-checkbox-blue > input[type="checkbox"] + label:hover:before,
.el-radio.el-radio-blue > input[type="radio"]:checked + label:before,
.el-checkbox.el-checkbox-blue > input[type="checkbox"]:checked + label:before {
  border-color: #20a0ff;
}
.el-checkbox.el-checkbox-blue > input[type="checkbox"]:checked + label:before,
.el-radio.el-radio-blue > input[type="radio"] + label:after {
  background: #20a0ff;
}
.el-radio.el-radio-blue > input[type="radio"][disabled] + label:hover:before,
.el-checkbox.el-checkbox-blue > input[type="checkbox"][disabled] + label:hover:before {
  border-color: #D3DCE6;
}
.el-checkbox.el-checkbox-blue > input[type="checkbox"]:checked[disabled] + label:before,
.el-radio.el-radio-blue > input[type="radio"]:checked[disabled] + label:before {
  border-color: #b0d7f5;
}
.el-checkbox.el-checkbox-blue > input[type="checkbox"][disabled]:checked + label:before,
.el-radio.el-radio-blue > input[type="radio"]:checked[disabled] + label:after {
  background: #b0d7f5;
}
/*green theme*/
.el-radio.el-radio-green > input[type="radio"] + label:hover:before,
.el-checkbox.el-checkbox-green > input[type="checkbox"] + label:hover:before,
.el-radio.el-radio-green > input[type="radio"]:checked + label:before,
.el-checkbox.el-checkbox-green > input[type="checkbox"]:checked + label:before {
  border-color: #13ce66;
}
.el-checkbox.el-checkbox-green > input[type="checkbox"]:checked + label:before,
.el-radio.el-radio-green > input[type="radio"] + label:after {
  background: #13ce66;
}
.el-radio.el-radio-green > input[type="radio"][disabled] + label:hover:before,
.el-checkbox.el-checkbox-green > input[type="checkbox"][disabled] + label:hover:before {
  border-color: #D3DCE6;
}
.el-checkbox.el-checkbox-green > input[type="checkbox"]:checked[disabled] + label:before,
.el-radio.el-radio-green > input[type="radio"]:checked[disabled] + label:before {
  border-color: #a1efc4;
}
.el-checkbox.el-checkbox-green > input[type="checkbox"][disabled]:checked + label:before,
.el-radio.el-radio-green > input[type="radio"]:checked[disabled] + label:after {
  background: #a1efc4;
}
/*red theme*/
.el-radio.el-radio-red > input[type="radio"] + label:hover:before,
.el-checkbox.el-checkbox-red > input[type="checkbox"] + label:hover:before,
.el-radio.el-radio-red > input[type="radio"]:checked + label:before,
.el-checkbox.el-checkbox-red > input[type="checkbox"]:checked + label:before {
  border-color: #ff4949;
}
.el-checkbox.el-checkbox-red > input[type="checkbox"]:checked + label:before,
.el-radio.el-radio-red > input[type="radio"] + label:after {
  background: #ff4949;
}
.el-radio.el-radio-red > input[type="radio"][disabled] + label:hover:before,
.el-checkbox.el-checkbox-red > input[type="checkbox"][disabled] + label:hover:before {
  border-color: #D3DCE6;
}
.el-checkbox.el-checkbox-red > input[type="checkbox"]:checked[disabled] + label:before,
.el-radio.el-radio-red > input[type="radio"]:checked[disabled] + label:before {
  border-color: #f9b3b3;
}
.el-checkbox.el-checkbox-red > input[type="checkbox"][disabled]:checked + label:before,
.el-radio.el-radio-red > input[type="radio"]:checked[disabled] + label:after {
  background: #f9b3b3;
}
/*yellow theme*/
.el-radio.el-radio-yellow > input[type="radio"] + label:hover:before,
.el-checkbox.el-checkbox-yellow > input[type="checkbox"] + label:hover:before,
.el-radio.el-radio-yellow > input[type="radio"]:checked + label:before,
.el-checkbox.el-checkbox-yellow > input[type="checkbox"]:checked + label:before {
  border-color: #f7ba2a;
}
.el-checkbox.el-checkbox-yellow > input[type="checkbox"]:checked + label:before,
.el-radio.el-radio-yellow > input[type="radio"] + label:after {
  background: #f7ba2a;
}
.el-radio.el-radio-yellow > input[type="radio"][disabled] + label:hover:before,
.el-checkbox.el-checkbox-yellow > input[type="checkbox"][disabled] + label:hover:before {
  border-color: #D3DCE6;
}
.el-checkbox.el-checkbox-yellow > input[type="checkbox"]:checked[disabled] + label:before,
.el-radio.el-radio-yellow > input[type="radio"]:checked[disabled] + label:before {
  border-color: #fbeac1;
}
.el-checkbox.el-checkbox-yellow > input[type="checkbox"][disabled]:checked + label:before,
.el-radio.el-radio-yellow > input[type="radio"]:checked[disabled] + label:after {
  background: #fbeac1;
}
/*switch component*/
.el-switch,
.el-switch-style,
.el-switch-style:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.el-switch {
  display: inline-block;
  font-size: 100%;
  height: 1.6em;
  position: relative;
}
.el-switch .el-switch-style {
  height: 1.6em;
  left: 0;
  background: #C0CCDA;
  -webkit-border-radius: 0.8em;
  border-radius: 0.8em;
  display: inline-block;
  position: relative;
  top: 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 3em;
  cursor: pointer;
}
.el-switch .el-switch-style:before {
  display: block;
  content: '';
  height: 1.4em;
  position: absolute;
  width: 1.4em;
  background-color: #fff;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  left: 0.1em;
  top: 0.1em;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.el-switch > input[type="checkbox"] {
  display: none;
}
.el-switch > input[type="checkbox"][disabled] + .el-switch-style {
  cursor: not-allowed;
  background-color: #D3DCE6;
}
.el-switch > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #20a0ff;
}
.el-switch > input[type="checkbox"]:checked + .el-switch-style:before {
  left: 50%;
}
.el-switch > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #b0d7f5;
}
.el-switch.el-switch-blue > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #20a0ff;
}
.el-switch.el-switch-blue > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #b0d7f5;
}
.el-switch.el-switch-green > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #13ce66;
}
.el-switch.el-switch-green > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #a1efc4;
}
.el-switch.el-switch-red > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #ff4949;
}
.el-switch.el-switch-red > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #f9b3b3;
}
.el-switch.el-switch-yellow > input[type="checkbox"]:checked + .el-switch-style {
  background-color: #f7ba2a;
}
.el-switch.el-switch-yellow > input[type="checkbox"]:checked[disabled] + .el-switch-style {
  background-color: #fbeac1;
}
/*define size*/
.el-radio.el-radio-sm,
.el-checkbox.el-checkbox-sm,
.el-switch.el-switch-sm {
  font-size: 85%;
}
.el-radio.el-radio-lg,
.el-checkbox.el-checkbox-lg,
.el-switch.el-switch-lg {
  font-size: 125%;
}`;