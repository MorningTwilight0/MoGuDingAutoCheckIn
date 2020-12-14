/*
 * @Author: XiaoKang
 * @Date: 2020-11-06 16:29:54
 * @LastEditTime: 2020-11-06 23:09:21
 * @Description: 开始执行签到
 */

function saveType() {
  var date = new Date();
  let type = "START";
  if (date.getHours() >= 11 && date.getHours() <= 15) {
    type = "END";
  }
  console.log(date);
  return type;
}
async function save(axios, planId) {
  let type = saveType();
  let dataForm = {
    device: "iOS",
    planId: planId,
    country: "中国",
    state: "NORMAL",
    attendanceType: "",
    address: "山西省太原市小店区小店街道真武路",
    type: type,
    longitude: "116.404267",
    city: "北京市",
    province: "北京市",
    latitude: "39.910131",
  };
  console.log("Type:", type);
  let { data: res } = await axios.request({
    method: "post",
    url: "/attendence/clock/v1/save",
    data: dataForm,
  });
  let msg = false;
  if (res.code == 200) {
    // 签到成功
    msg = true;
  }
  return msg;
}
module.exports = save;
