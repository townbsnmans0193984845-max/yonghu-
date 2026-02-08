import MobilePageFrame from "../../components/MobilePageFrame";

export default function RecruiterPostJobPage() {
  return (
    <MobilePageFrame title="发布岗位" subtitle="填写完整信息后发布">
      <div className="form">
        <label>岗位标题 *</label>
        <input placeholder="请输入岗位标题" />
        <label>薪资 *</label>
        <div className="input-group">
          <input placeholder="50" />
          <button className="ghost-button">小时 ▾</button>
        </div>
        <label>工作地点 *</label>
        <input placeholder="请选择地点" />
        <label>招聘人数 *</label>
        <input placeholder="5" />
        <label>工作时间 *</label>
        <input placeholder="选择日期时间" />
        <label>岗位描述 *</label>
        <textarea placeholder="描述岗位内容" rows={4} />
        <button className="primary-button full">发布岗位</button>
      </div>
    </MobilePageFrame>
  );
}
