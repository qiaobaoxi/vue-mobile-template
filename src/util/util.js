/*
 * @Author: your name
 * @Date: 2020-06-03 13:24:57
 * @LastEditTime: 2020-06-08 14:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RMIB\src\tools\util.js
 */
export function format (time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    // 拼接
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}
export function confirm(_this,value){
    return new Promise((resolve)=>{
        _this.$confirm(value?value:'此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
        }).then(() => {
            resolve();
        }).catch(() => {
            _this.$message({
                type: 'info',
                message: '已取消'
            });
        });   
    });
} 
