import styles from './index.less';
import React from 'react';
import {Input,Button,Divider,List,Checkbox,Row} from 'antd'

// export default function IndexPage() {
//   return (
//     <div className={styles.div}>
//       <h1 className={styles.title}>Page index</h1>
//       <h1 className={styles.header}>标题</h1>
//       <p className={styles.text1}>测试段落1，利用css样式首行缩进2空格，字体大小为20px,
//         <span className={styles.text1_p}>这里字体颜色为红色，背景色为透明度=0.5的蓝色，</span></p>
//       <p className={styles.text2}>下面是一个布局的例子，请创建一个高度占浏览器高度一半，距离浏览器边缘左右边距20%的淡绿色div元素。在里面创建一个小的高度和宽度都为80px，
//         红色4px实线边框的黄色div元素,并让它垂直居中显示。</p>
//       <div className={styles.div1}>
//         <div className={styles.div1_1}></div>
//       </div>
//       <p className={styles.text2}>右边有个固定在那的宽高200px的广告弹窗</p>
//       <div className={styles.div2}>
//         <p>广告</p>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      undoneInputValue: '',
      doneInputValue: '',
      undoneEditBtnState: false,
      doneEditBtnState: false,
      undoneData:[
        {
          id: '还款1',
          title:'还款',
          bool: false,
        },
        {
          id:'看书一小时1',
          title:'看书一小时',
          bool: false,
        }
      ],
      doneData:[
        {
          id:'跑步半小时1',
          title:'跑步半小时',
          bool: false,
        }
      ]
    }
  }
  componentDidMount() {

  }
  inputOnChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  //添加事项的添加功能
  addBtnClick = () => {
    let item = {
      id: this.state.inputText + '1',
      title: this.state.inputText,
      bool: false,
    }
    this.state.undoneData.push(item)
    this.setState({
      undoneData: this.state.undoneData,
    })
  }
  //未完成事项的框选功能
  undoneCheckboxOnChange = (e,id) => {
    let item = {};
    if(e.target.checked){
      for(let i=0;i<this.state.undoneData.length;i++){
        if(id === this.state.undoneData[i].id){
          item = this.state.undoneData[i];
          this.state.undoneData.splice(i,1)
          this.setState({
            undoneData: this.state.undoneData,
          })
        }
      }
      this.state.doneData.push(item)
      this.setState({
        doneData: this.state.doneData,
      })
    } else {

    }
  }
  undoneInputOnChange = (e,id) => {
    for(let i=0;i<this.state.undoneData.length;i++){
      if(id === this.state.undoneData[i].title){
        this.state.undoneData[i].id = e.target.value+'1';
        this.state.undoneData[i].title = e.target.value;
        this.setState({
          undoneData: this.state.undoneData,
          undoneInputValue: e.target.value,
        })
      }
    }
  }
  //未完成事项的编辑功能
  undoneEditBtnClick = (id) => {
    // document.getElementById('edit').innerText = '保存'
    if(document.getElementById(id).innerText === '编辑'){
      document.getElementById(id).innerText = '保存';
      for(let i=0;i<this.state.undoneData.length;i++){
        if(id === this.state.undoneData[i].id){
          this.state.undoneInputValue = this.state.undoneData[i].title;
          this.state.undoneData[i].bool = true;
          this.setState({
            undoneData: this.state.undoneData,
            undoneInputValue:  this.state.undoneInputValue,
          })
        }
      }
    } else {
      document.getElementById(id).innerText = '编辑';
      for(let i=0;i<this.state.undoneData.length;i++){
        if(id === this.state.undoneData[i].id){
          this.state.undoneData[i].bool = false;
          this.setState({
            undoneData: this.state.undoneData,
          })
        }
      }
    }
  }
  //未完成事项的删除功能
  undoneDeleteBtnClick = (id) => {
    for(let i=0;i<this.state.undoneData.length;i++){
      if(id === this.state.undoneData[i].id){
        this.state.undoneData.splice(i,1)
        this.setState({
          undoneData: this.state.undoneData,
        })
      }
    }
  }
  //已完成事项的框选功能
  doneCheckboxOnChange = (e,id) => {
    if(e.target.checked){
      this.doneDeleteBtnClick(id)
    }
  }
  doneInputOnChange = (e,id) => {
    for(let i=0;i<this.state.doneData.length;i++){
      if(id === this.state.doneData[i].title){
        this.state.doneData[i].id = e.target.value+'1';
        this.state.doneData[i].title = e.target.value;
        this.setState({
          doneData: this.state.doneData,
          doneInputValue: e.target.value,
        })
      }
    }
  }
  //已完成事项的编辑功能
  doneEditBtnClick = (id) => {
    if(document.getElementById(id).innerText === '编辑'){
      document.getElementById(id).innerText = '保存';
      for(let i=0;i<this.state.doneData.length;i++){
        if(id === this.state.doneData[i].id){
          this.state.doneInputValue = this.state.doneData[i].title;
          this.state.doneData[i].bool = true;
          this.setState({
            doneData: this.state.doneData,
            doneInputValue: this.state.doneInputValue,
          })
        }
      }
    } else {
      document.getElementById(id).innerText = '编辑';
      for(let i=0;i<this.state.doneData.length;i++){
        if(id === this.state.doneData[i].id){
          this.state.doneData[i].bool = false;
          this.setState({
            doneData: this.state.doneData,
          })
        }
      }
    }
  }
  //已完成事项的删除功能
  doneDeleteBtnClick = (id) => {
    for(let i=0;i<this.state.doneData.length;i++){
      if(id === this.state.doneData[i].id){
        this.state.doneData.splice(i,1)
        this.setState({
          doneData: this.state.doneData,
        })
      }
    }
  }
  render() {
    const {undoneData,doneData,undoneInputValue,doneInputValue} = this.state;
    return (
      <div className={styles.root}>
        <div style={{marginBottom:'30px'}}>
          <h3 className={styles.title}>添加事项</h3>
          <Divider className={styles.divider} />
          <Input className={styles.input} placeholder="请输入任意内容" onChange={this.inputOnChange} />
          <Button type='text' onClick={this.addBtnClick}>添加</Button>
        </div>
        <div style={{marginBottom:'30px'}}>
          <h3 className={styles.title}>未完成事项</h3>
          <Divider className={styles.divider} />
          <List
            dataSource={undoneData}
            renderItem={item => (
              <List.Item>
                <Checkbox onChange={(e)=>this.undoneCheckboxOnChange(e,item.id)}> </Checkbox>
                { item.bool ?
                  <Input bordered={item.bool} className={styles.undoneInput} id={item.title} value={undoneInputValue}
                         onChange={(e)=>this.undoneInputOnChange(e,item.title)} />
                  :<Input value={item.title}  bordered={false} className={styles.undoneInput} />}
                <Button type='text' onClick={()=>this.undoneEditBtnClick(item.id)} id={item.id}>编辑</Button>
                <Button type='text' onClick={()=>this.undoneDeleteBtnClick(item.id)}>删除</Button>
              </List.Item>
            )}
          >
          </List>
        </div>
        <div>
          <h3 className={styles.title}>已完成事项</h3>
          <Divider className={styles.divider} />
          <List
            dataSource={doneData}
            renderItem={item => (
              <List.Item>
                <Checkbox onChange={(e)=>this.doneCheckboxOnChange(e,item.id)}> </Checkbox>
                {/*<Input value={item.title} bordered={item.bool} className={styles.doneInput} id={item.title} />*/}
                { item.bool ?
                  <Input bordered={item.bool} className={styles.doneInput1} id={item.title} value={doneInputValue}
                         onChange={(e)=>this.doneInputOnChange(e,item.title)} />
                  :<Input value={item.title}  bordered={false} className={styles.doneInput2} />}
                <Button type='text' onClick={()=>this.doneEditBtnClick(item.id)} id={item.id}>编辑</Button>
                <Button type='text' onClick={()=>this.doneDeleteBtnClick(item.id)}>删除</Button>
              </List.Item>
            )}
          >
          </List>
        </div>
      </div>
    )
  }
}
export default  App;
