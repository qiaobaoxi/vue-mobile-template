/*
 * @Author: your name
 * @Date: 2020-05-28 14:20:03
 * @LastEditTime: 2020-05-29 14:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RMIB\src\tools\validate.js
 */
const validate = {
    // 验证是float类型 支持正/负float类型
    checkFloat (val) {
        const reg = new RegExp(/[-+]*[0-9][.][0-9]+|[-+]*[1-9][0-9]*|^[0]$/);
        return this.testReg(reg, val);
    },
    // 验证 正 float  
    positiveFloat (val) {
        const reg = new RegExp(/^(\+)?\d+(\.\d+)?$/);
        return this.testReg(reg, val);

    },
    // 验证正数
    positiveNumber (val) {
        const reg = new RegExp(/^[0-9]+$/);
        return this.testReg(reg, val);
    },

    // 检查手机号码   ^[a-zA-Z]+$
    checkPhone (rule, value, callback) {
        const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/;
        const ring = /^0\d{2,3}-?\d{7,8}$/;
        if (!value) {
            return callback(new Error('电话号码不能为空'));
        }
        if (isNaN(value)) {
            return callback(new Error('请输入数字值'));
        }
        if (!phoneReg.test(value) && !ring.test(value)) {
            return callback(new Error('电话号码格式不正确'));
        }
        return callback();
    },
    // 检查编码  
    checkCode (rule, value, callback) {
        const codeReg = / ^[a-zA-Z]+$/;
        if (!value) {
            return callback(new Error('请填写权限编码'));
        }
        if (isNaN(value)) {
            return callback(new Error('请输入权限名称首字母'));
        }
        if (!codeReg.test(value)) {
            return callback(new Error('权限编码格式不正确'));
        }
        return callback();
    },
    // 金额 包括0
    validateMoney (val) {
        //验证小数部分最多俩位
        const reg = new RegExp(/^[0-9]\d*\.\d{1,2}$/);
        if (val) {
            // 验证整数位，小数时只有第一位可以是0 
            if (new RegExp(/^[1-9]\d*(\.\d+)?$|^0{0,1}(\.\d+)?$/).test(val)) {
                //整数
                if (!new RegExp(/^[0-9]\d*$/).test(val)) {
                    if (!reg.test(val)) {
                        return '最多两位小数';
                    }
                }
                return '';
            }
            return '格式不正确';
        }
        return '';
    },
    // 验证方法 test
    testReg (reg, val) {
        return reg.test(val);
    },
};



export default validate;